import gitlab from "../../utils/gitlab";

import Link from "next/link";
import slugify from "@sindresorhus/slugify";
import hl from "highlight.js";
import marked from "marked";
import createDOMPurify from "dompurify";
import emoji from "emoji-toolkit";
import strftime from "strftime";
import { JSDOM } from "jsdom";

const renderer = new marked.Renderer();
renderer.image = function(href, title, text) {
  const hostHref = "https://brdn.dev/blog/content" + href;

  return `<img src=${hostHref} alt=${text} />`;
};

export default ({ title, content, comments, web_url }) => {
  return (
    <main className="container h-full w-full max-w-4xl mx-auto px-20 py-10">
      <nav>
        <Link href="/">
          <a className="link home">Home</a>
        </Link>
      </nav>
      <article data-ui-component="issue" className="mt-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3">{title}</h1>
        <section className="leading-normal" dangerouslySetInnerHTML={content} />
        {Comments(comments, web_url)}
      </article>
    </main>
  );
};

export const getStaticPaths = async () => {
  const issues = await gitlab.Issues.all(2);
  return {
    paths: issues.map(issue => `/issue/${slugify(issue.title)}`),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const { title } = params;
  const issues = await gitlab.Issues.all(2);
  const [issue] = issues.filter(issue => slugify(issue.title) === title);
  const { description, web_url } = issue;
  const comments = await gitlab.IssueNotes.all(2, issue.iid);
  return {
    props: {
      title: issue.title,
      web_url,
      content: createMarkup(description),
      comments: comments
        .filter(comment => !comment.system)
        .map(comment => {
          comment.body = createMarkup(comment.body);
          return comment;
        })
        .reverse()
    }
  };
};

function createMarkup(markdown) {
  const window = new JSDOM("").window;
  const DOMPurify = createDOMPurify(window);
  return {
    __html: DOMPurify.sanitize(
      emoji.shortnameToImage(
        marked(markdown, {
          highlight: function(code, lang) {
            return hl.highlight(lang, code).value;
          },
          renderer
        })
      )
    )
  };
}

function Comments(comments, web_url) {
  if (comments.length) {
    return (
      <section className="mb-12 max-w-lg">
        <p>{comments.length} Comments</p>
        <div>
          {comments.map(comment => (
            <div className="flex flex-row mb-8" key={comment.id}>
              <img
                className="mr-5 h-12 w-12 rounded-full"
                src={comment.author.avatar_url}
              />
              <div>
                <p className="text-sm mb-0">
                  {comment.author.username} -
                  <a href={`${web_url}/#note_id=${comment.id}`}>
                    <date>
                      {strftime(" %B %d, %Y", new Date(comment.created_at))}
                    </date>
                  </a>
                </p>
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={comment.body}
                />
              </div>
            </div>
          ))}
        </div>
        <a href={web_url}>write a comment</a>
      </section>
    );
  }
}

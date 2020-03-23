import gitlab from "../utils/gitlab";

import Link from "next/link";
import Head from "next/head";
import slugify from "@sindresorhus/slugify";
import strftime from "strftime";

export default ({ issues }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <title>Jake Burden</title>
        <meta name="title" content="Jake Burden" />
        <meta name="description" content="About Jake Burden - Blog" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://burden.blog/" />
        <meta property="og:title" content="Jake Burden" />
        <meta property="og:description" content="About Jake Burden - Blog" />
        <meta property="og:image" content="/jake-burden-presenting.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://burden.blog/" />
        <meta name="twitter:title" content="Jake Burden" />
        <meta name="twitter:description" content="About Jake Burden - Blog" />
        <meta name="twitter:image" content="/jake-burden-presenting.jpg" />

        <link rel="stylesheet" href="/styles.css" />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="container mx-auto py-10 flex flex-col-reverse lg:flex-row h-full w-full justify-around">
        <section>
          <header className="box lg:p-0 lg:mb-8 flex items-center lg:items-end">
            <img
              className="rounded-full w-20 lg:w-32 mr-3 lg:mr-5"
              src="/jake-burden.jpg"
              alt="Profile picture of Jake Burden"
            />
            <div>
              <h1 className="text-3xl lg:text-5xl leading-tight lg:leading-none mt-0 lg:mb-4 font-thin">
                Jake Burden
              </h1>
              <h2 className="text-base lg:text-2xl leading-normal lg:leading-tight my-0 lg:mb-4 font-bold uppercase tracking-wide text-gray-400">
                Software Engineer
              </h2>
            </div>
          </header>
          <div className="box leading-loose lg:text-lg lg:p-0">
            <p>
              I'm currently engineering solutions for
              <a
                className="link gitlab"
                target="_blank"
                rel="noopener noreferrer"
                href="https://about.gitlab.com"
              >
                GitLab
              </a>
              .
            </p>
            <p>
              Previously, I was at
              <a
                className="link digitalsurgeons"
                target="_blank"
                rel="noopener noreferrer"
                href="https://digitalsurgeons.com"
              >
                Digital Surgeons
              </a>
              , using design thinking to help clients grow their businesses.
              Before that, I was at
              <a
                className="link qscend"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.qscend.com/"
              >
                QScend
              </a>
              , building municipal websites to help citizens.
            </p>
            <p>
              In parallel with my previous roles, I received a degree in
              Philosophy.
            </p>
          </div>
        </section>
        <section>
          <h2 className="box leading-loose lg:p-0 lowercase text-2xl font-extrabold mb-4 text-indigo-200 font-mono">
            Issues
          </h2>
          <ul className="box leading-loose lg:text-lg lg:px-0">
            {issues.map(issue => (
              <li key={issue.iid}>
                <Link
                  href="/issue/[title]"
                  as={`/issue/${slugify(issue.title)}`}
                >
                  <a className="block mt-1 text-lg leading-tight font-semibold hover:underline">
                    #{issue.id}: {issue.title}
                  </a>
                </Link>
                <date className="text-base">
                  {strftime(" %B %d, %Y", new Date(issue.created_at))}
                </date>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const issues = await gitlab.Issues.all(2);
  return {
    props: {
      issues
    }
  };
};

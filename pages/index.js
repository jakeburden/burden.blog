// import gitlab from "../utils/gitlab";

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
      <main className="h-screen w-full">
        <section className="container mx-auto py-10 px-4">
          <header className="pb-4 lg:px-0 md:pb-10 flex items-center lg:items-end">
            <img
              className="rounded-full w-20 md:w-32 mr-3  md:mr-5"
              src="/jake-burden.jpg"
              alt="Profile picture of Jake Burden"
            />
            <div>
              <h1 className="text-3xl md:text-5xl leading-tight md:leading-none mt-0 md:mb-4 font-thin">
                Jake Burden
              </h1>
              <h2 className="text-base md:text-2xl leading-normal md:leading-tight my-0 md:mb-4 font-bold uppercase tracking-wide text-gray-400">
                Software Engineer
              </h2>
            </div>
          </header>
          <div className="leading-loose text-base md:text-3xl lg:text-5xl lg:p-0">
            <ul>
              <li className="lg:text-6xl">
                💻 Web Development Engineer at{" "}
                <a className="link aws" href="https://aws.amazon.com/">
                  AWS
                </a>
              </li>
              <li>🎓 BA in Philosophy</li>
              <li>
                🙌 Previously:{" "}
                <a className="link gitlab" href="https://about.gitlab.com">
                  GitLab
                </a>
                ,{" "}
                <a
                  className="link digitalsurgeons"
                  href="https://digitalsurgeons.com"
                >
                  Digital Surgeons
                </a>
                , and{" "}
                <a className="link qscend" href="https://qscend.com">
                  QScend
                </a>
              </li>
              <li>🌎 Working Remotely</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist: ['[data-ui-component="issue"] pre > code'],
    whitelistPatterns: [
      /^hljs/,
      /language-*/,
      /shell/,
      /sh/,
      /js/,
      /jsx/,
      /rust/,
      /bash/
    ]
  }
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};

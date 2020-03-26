const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist: [".sh", ".js", ".jsx", ".rust", ".bash", ".shell"],
    whitelistPatterns: [/^hljs/, /language-*/],
    whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
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

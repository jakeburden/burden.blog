const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist: [".sh", ".js", ".jsx", ".rust", ".bash", ".shell", ".joypixels"],
    whitelistPatterns: [/^hljs/, /language-*/],
    whitelistPatternsChildren: [/^token/, /^pre/, /^code/, /^blockquote/]
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

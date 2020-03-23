const { Gitlab } = require("gitlab");

const token = process.env.access_token;
const host = "https://brdn.dev";

const api = new Gitlab({
  token,
  host
});

module.exports = api;

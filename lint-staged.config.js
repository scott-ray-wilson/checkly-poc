module.exports = {
  "*.{js,ts}": ["eslint --fix", "prettier --write", () => "tsc --noEmit"]
};

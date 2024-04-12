module.exports = {
  "**/*.(js|jsx)": (filename) => [
    `eslint --fix ${filename.join(" ")}`,
    `prettier --write ${filename.join(" ")}`,
  ],

  "**/*.(js|jsx)": () => "jsx --noEmail",

  "**/*.(md|json)": (filename) => `prettier --write ${filename.join(" ")}`,
};

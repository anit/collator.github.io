// Changes on every build. Appended to the stylesheet URL so browsers fetch the new CSS
// after a deploy, instead of pairing fresh HTML with a cached old stylesheet
// (GitHub Pages lets browsers reuse /css/style.css for 10 minutes).
module.exports = {
  version: Date.now().toString(36),
};

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, 'node_modules/lucide-static/icons');

module.exports = function (eleventyConfig) {
  // Icon shortcode: reads the raw SVG straight from the lucide-static package
  // so every icon comes from a real source, never hand-typed.
  eleventyConfig.addShortcode('icon', function (name, classes) {
    const filePath = path.join(ICONS_DIR, `${name}.svg`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Icon "${name}" not found in lucide-static.`);
    }
    let svg = fs.readFileSync(filePath, 'utf8');
    svg = svg.replace(/<!--[\s\S]*?-->\s*/, ''); // strip the license comment
    svg = svg.replace(/\s(width|height)="\d+"/g, ''); // let Tailwind size it
    svg = svg.replace(/\sclass="[^"]*"/, ''); // drop lucide's own class
    svg = svg.replace('<svg', `<svg class="${classes || ''}"`);
    svg = svg.replace(/\n\s*\n/g, '\n'); // tidy blank lines left behind
    return svg;
  });

  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('favicon.svg');
  eleventyConfig.addPassthroughCopy('apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('icon-192.png');
  eleventyConfig.addPassthroughCopy('icon-512.png');
  eleventyConfig.addPassthroughCopy('icon-maskable-512.png');
  eleventyConfig.addPassthroughCopy('site.webmanifest');
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addPassthroughCopy('.nojekyll');
  eleventyConfig.addPassthroughCopy('src/assets');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};

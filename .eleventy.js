const consoleDump = require('./src/filters/consoleDump');
const dateFormatted = require('./src/filters/dateFormatted');
const dateUnix = require('./src/filters/dateUnix');
const doesExist = require('./src/filters/doesExist');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addWatchTarget('./src/js/');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/js');
  
  // Filters
  eleventyConfig.addFilter('consoleDump', consoleDump);
  eleventyConfig.addFilter('dateFormatted', dateFormatted);
  eleventyConfig.addFilter('dateUnix', dateUnix);
  eleventyConfig.addFilter('doesExist', doesExist);

  // Breaking change fix
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false
  });
  
  return {
    dir: {
      input: 'src',
      output: '_site'
    },
    pathPrefix: "/newsroom-mockup/",
    urlPath: "${pathPrefix}"
  }
}
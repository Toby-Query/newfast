module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  //do images too
  eleventyConfig.addPassthroughCopy("./src/images/*.jpg");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"], // Asegura que .njk está incluido
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};

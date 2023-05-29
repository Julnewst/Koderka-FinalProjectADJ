module.exports = function(eleventyConfig) {
  // Výchozí výstupní složka je: _site

  // Zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
  
  
  // Zkopírovat js/ to _site/scripts/
  eleventyConfig.addPassthroughCopy("scripts");

  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");

  //favicon
  eleventyConfig.addPassthroughCopy({ "favicon" : "/"});

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // jako šablonovací jazyk zvolíme Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }


 };
 
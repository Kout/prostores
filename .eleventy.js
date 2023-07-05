// Filters
// const dateFilter = require('./src/filters/date-filter.js');
// const timeFilter = require('./src/filters/time-filter.js');
// const w3DateFilter = require('./src/filters/w3-date-filter.js');

const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = config => {
    // Add filters
    // config.addFilter('dateFilter', dateFilter);
    // config.addFilter('timeFilter', timeFilter);
    // config.addFilter('w3DateFilter', w3DateFilter);

    // config.addShortcode("year", () => `${new Date().getFullYear()}`);

    // config.addShortcode("now", () => `${Date.now()}`);

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

    // config.setLibrary('md', markdownLib)

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};
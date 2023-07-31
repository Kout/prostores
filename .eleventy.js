const i18n = require('eleventy-plugin-i18n');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

// Filters
// const dateFilter = require('./src/filters/date-filter.js');
// const timeFilter = require('./src/filters/time-filter.js');
// const w3DateFilter = require('./src/filters/w3-date-filter.js');

const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDeflist = require('markdown-it-deflist');
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItDeflist)

module.exports = config => {
    // Add filters
    // config.addFilter('dateFilter', dateFilter);
    // config.addFilter('timeFilter', timeFilter);
    // config.addFilter('w3DateFilter', w3DateFilter);

    config.addPassthroughCopy('./src/img/');
    config.addPassthroughCopy('./src/css/');
    config.addPassthroughCopy('./src/files/');

    // Returns subpages, sorted by display order
    config.addCollection('nav_cs', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/icebreaking/cs/*.md'));
    });

    // Returns subpages, sorted by display order
    config.addCollection('nav_en', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/icebreaking/en/*.md'));
    });

    // config.addShortcode("year", () => `${new Date().getFullYear()}`);

    // config.addShortcode("now", () => `${Date.now()}`);

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

    config.setLibrary('md', markdownLib)

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
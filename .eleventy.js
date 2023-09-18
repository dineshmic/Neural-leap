const { DateTime } = require('luxon'); 

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/previews');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/js');

    eleventyConfig.addCollection("blog", function(collection) {
        return collection.getFilteredByTag("blog");
    });

    eleventyConfig.addCollection("work", function(collection) {
        return collection.getFilteredByTag("work");
    });
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        // Parse the date string directly using Luxon's DateTime
        const parsedDate = DateTime.fromISO(dateObj); 
        
        // Format the parsed date as a localized date string
        return parsedDate.toLocaleString(DateTime.DATE_MED);
    });
    	
	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
}

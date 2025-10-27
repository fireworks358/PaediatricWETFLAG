import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: {
      service: {
        text: 'Portsmouth Hospitals University NHS Trust'
      }
    },
    footer: {
      copyright: {
        text: '© PHU 2025'
      }
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: "/PaediatricWETFLAG/"
    dir: {
      input: 'docs'
    }
  }
};
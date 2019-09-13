# nextein-plugin-title-chicago-style
A Nextein plugin that applies Chicago Style to Titles (via title)

## Usage

Edit your `next.config.js` file and add it to the plugins list:

```js
// next.config.js
const { withNextein } = require('nextein/config')


module.exports = withNextein({
  nextein: function(config) {
   
    config.plugins.push({
      {
        name: '@geut/nextein-plugin-title-chicago-style',
        options: {
          special: [
            /* List your special words here */
            'GEUT'
          ]
        }
      }
    })

   return config
 },
  // ...
}))

```

## Configuration

The `options` object can define the following properties:

- special: `{Array}. Default: []` A set of words to be capitalized in a special way.
- excludeFrontMatter: `{Boolean}. Default: false`. Set to true if you don't want to process `title` in front-matter.
- maxDepht: `{Nukber}. Default: 6`. The maximum depht for heading elements. `6` means `h6`.


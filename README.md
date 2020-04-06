# nextein-plugin-title-chicago-style
A Nextein plugin that applies Chicago Style to Titles (via title)


## Install

```
npm i @geut/nextein-plugin-title-chicago-style
```

## Usage

Edit your `next.config.js` file and add it to the plugins list:

```js
// next.config.js
const { withNextein } = require('nextein/config')


module.exports = withNextein({
  nextein: function(config) {
   
    config.plugins.push({
      name: '@geut/nextein-plugin-title-chicago-style',
      options: {
        special: [
          /* List your special words here */
          'GEUT'
        ]
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
- frontMatter: `{Array}. Default: ['title']`. Fields from front matter that will be processed.
- maxDepht: `{Number}. Default: 6`. The maximum depht for heading elements. `6` means `h6`.


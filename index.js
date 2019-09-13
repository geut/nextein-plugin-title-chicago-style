const title = require('title')
const visit = require('unist-util-visit')

const headingsByLevel = level => {
  return Array.from(Array(level), (h, idx) => `h${idx+1}`)
}

module.exports.transform = ({ special, maxDepth = 6, excludeFrontMatter = false } = {}, posts) => {
  const headings = headingsByLevel(maxDepth) 
  const titleOpts = { special }
  
  return posts.map(post => {

    if (!excludeFrontMatter) {
      post.data.title = title(post.data.title, titleOpts);
    }

    visit(post.content, 'element', (node) => {
      if(headings.includes(node.tagName)) {
        visit(node, 'text', (textNode, textIndex, textParent) => {
          textParent.children.splice(textIndex, 1, {...textNode, value: title(textNode.value, titleOpts)})
          return textIndex + 1
        })
      }
    })
    return post
  });
}

const title = require('title')
const visit = require('unist-util-visit')

const headingsByLevel = level => {
  return Array.from(Array(level), (h, idx) => `h${idx+1}`)
}

module.exports.transform = ({ special, maxDepth = 6, frontMatter = ['title'] } = {}, posts) => {
  const excludeFrontMatter = !frontMatter || !frontMatter.length
  const headings = headingsByLevel(maxDepth)
  const opts = { special }
  
  return posts.map(post => {

    if (!excludeFrontMatter) {
      for (const field of frontMatter ) {
        if (post.data[field]) {
          post.data[field] = title(post.data[field], opts)
        }
      }
    }

    visit(post.content, 'element', (node) => {
      if(headings.includes(node.tagName)) {
        visit(node, 'text', (textNode, textIndex, textParent) => {
          textParent.children.splice(textIndex, 1, {...textNode, value: title(textNode.value, opts)})
          return textIndex + 1
        })
      }
    })
    return post
  });
}

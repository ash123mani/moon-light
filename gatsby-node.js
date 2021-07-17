/* eslint-disable no-undef */
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post/index.js`)

  return graphql(`
    query {
      allContentfulBlogPages {
        edges {
          node {
            url
            title
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allContentfulBlogPages.edges
    posts.forEach(({ node }) => {
      createPage({
        path: node.url,
        component: blogPostTemplate,
        context: {
          url: node.url || '',
        },
      })
    })
  })
}

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);
  const guideTemplate = path.resolve(`src/templates/guideTemplate.js`);

  return graphql(`
    {
      guide: allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/guide/" } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
      blog: allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.blog.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });
    result.data.guide.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: guideTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};

exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type);
};

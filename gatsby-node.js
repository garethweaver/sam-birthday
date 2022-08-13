const path = require('path')

const getPageData = async (graphql) => {
  let query = await graphql(`
    {
      allQuestionsYaml {
        edges {
          node {
            q
            a {
              value
              correct
            }
          }
        }
      }
    }
  `)
  return query
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const component = path.resolve('src/templates/question.js')
  const result = await getPageData(graphql)
  for (const [idx, question] of result.data.allQuestionsYaml.edges.entries()) {
    createPage({
      path: `questions/${idx + 1}`,
      component,
      context: { data: question.node, idx },
      defer: true,
    })
  }
}
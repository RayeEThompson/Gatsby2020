/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs")
const dir = "./cache/caches/@prismicio/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true})
    }
}
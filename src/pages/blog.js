import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allMdx.nodes.map(({id, body, frontmatter}) => (
                    <article id={id}>
                        <h2>{frontmatter.title}</h2>
                        <p>Posted: {frontmatter.date}</p>
                        <MDXRenderer>{body}</MDXRenderer>
                    </article>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                body
            }
        }
    }
`

export default BlogPage
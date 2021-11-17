import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allMdx.nodes.map(({id, frontmatter, slug}) => (
                    <article key={id}>
                        <h2>
                            <Link to={`/blog/${slug}`}>
                                {frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {frontmatter.date}</p>
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
                slug
            }
        }
    }
`

export default BlogPage
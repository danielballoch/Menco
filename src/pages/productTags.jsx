import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TagsBlock from '../components/ProductTagsBlock';
import { Link } from 'gatsby';
import ProductListing from "../components/product-link"

import SEO from "../components/seo"
import "../pages/products.css"

const Tags = ({ pageContext, data }) => {
  const { products, tags } = pageContext;
//  console.log(products);
const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
        

        <div className="wrapper">
            <SEO />
            <div className="sort-bar">Shop/ *items found* <button>sort by: popularity</button></div>
            <div className="content">
                
                <div className="filter-bar">
                <h2>Clothing:</h2>
                <div className="catalog-menu">
                    
                    <p>Catagory</p>
                    <TagsBlock list={tags} />
                    <p>Refine</p><br/>

                </div>
                </div>

                <ProductListing postEdges={postEdges} />
            </div>
            {/* {products.map((product, index) => (
                <Link key={index} to={product.frontmatter.path}>
                <h3>{product.frontmatter.name}</h3>
                </Link>
            ))} */}
          </div>

    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};

export const pageQuery = graphql`
    query($tagName: String) {
        allMarkdownRemark(sort: {
             order: DESC, fields: [frontmatter___date] }
             filter: {fields: {collection: {eq: "products"}},frontmatter: {tags: {eq: $tagName }}}
             ) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                path
                name
                price
                weight
                templateKey
                tags
                image {
                    childImageSharp {
                        fluid(maxWidth: 980) {
                            ...GatsbyImageSharpFluid
                            src
                        }
                    }
                }
              }
    
            }
          }
        }
      }
    `
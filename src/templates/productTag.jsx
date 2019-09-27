import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from "../components/seo"

import "../pages/products.css"

import ProductListing from "../components/product-link"
import TagsBlock from '../components/ProductTagsBlock';

// import config from '../../config/site';

// const postEdges = this.props.data.allMarkdownRemark.edges;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.neutral.black};
  padding: 5px 10px;
  border: solid 1px #fff;
  border-radius: 20px;
  &:hover {
    color: ${props => props.theme.colors.neutral.black};
    background: ${props => props.theme.colors.background.white};
  }
`;

const Information = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

const Tag = ({ pageContext, data}) => {
  const { tags, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  const postEdges = data.allMarkdownRemark.edges;
  console.log(postEdges.length)
  return (
    <Layout>
      {/* <Helmet title={`${tagName} | ${config.siteTitle}`} /> */}

      <div className="top-margin">
            <SEO />
            <div className="sort-bar">Shop/{tagName}'s <a>{postEdges.length} items found</a><button className="sort-button">sort by: popularity</button></div>
            <div className="content">
            
                <div className="filter-bar">
                <h2>Clothing:</h2>
                    <div className="catalog-menu">
                        
                        <p>Catagory</p><br/>
                        <StyledLink to="/product-catagories">Shop All</StyledLink>
                        <TagsBlock list={tags} />
                        <p>Refine</p>
                        <p>Color</p>
                        <p>Fabric</p>
                        

                    </div>
                </div> 
                <ProductListing postEdges={postEdges} wrap={"wrapper-left"}/>
              
            </div>
          </div>
     
        
      
    
        
            
        
       



      
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    products: PropTypes.array,
    tagname: PropTypes.string,
  }),
};

//tagName var passed in from node pageContext
export const pageQuery = graphql`
    query($tagName: String) {
        allMarkdownRemark(sort: {
             order: DESC, fields: [frontmatter___price] }
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
import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Header from '../components/Header';

import ProductListing from "../components/product-link"

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
  const { products, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  const postEdges = data.allMarkdownRemark.edges;
  console.log(postEdges)
  return (
    <Layout>
      {/* <Helmet title={`${tagName} | ${config.siteTitle}`} /> */}
      <Header title={upperTag}/>
     
        <StyledLink to="/product-catagories">All Tags</StyledLink>
      
    
        <ProductListing postEdges={postEdges} />
        
            
        
       



      
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
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/Header';

// import config from '../../config/site';

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

const Tag = ({ pageContext }) => {
  const { products, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  return (
    <Layout>
      {/* <Helmet title={`${tagName} | ${config.siteTitle}`} /> */}
      <Header title={upperTag}/>
     
        <StyledLink to="/tags">All Tags</StyledLink>
      
    
        <Information>
          {products.map((product, index) => (
            <Link key={index} to={product.frontmatter.path}>
              <h3>{product.frontmatter.name}</h3>
            </Link>
          ))}
        </Information>
      
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

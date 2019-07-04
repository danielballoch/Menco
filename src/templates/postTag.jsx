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
  border: solid 1px black;
  border-radius: 20px;
  &:hover {
    color: ${props => props.theme.colors.highlights.blue};
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
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  return (
    <Layout>
      {/* <Helmet title={`${tagName} | ${config.siteTitle}`} /> */}
      {/* <Header title={upperTag}/> */}
     
        
      
    
        <Information>
            <h1>Blog Posts Tagged: {upperTag}</h1>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
          <StyledLink to="/blog-tags">View all blog tags</StyledLink>
        </Information>
      
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagname: PropTypes.string,
  }),
};

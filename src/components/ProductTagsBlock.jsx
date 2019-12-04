import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TagsContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  a {
    padding: .5rem;
    border-radius: 10px;
    &:hover {
        color: ${props => props.theme.colors.highlights.blue};
    }
  }
  @media (max-width: 400px) {
    display: block;
    overflow-x: scroll hidden;
    white-space: nowrap;
  }
  @media (max-width: 720px) {
    flex-direction: row;
    justify-content: center;
  }
  
`;

const TagsBlock = ({ list }) => (
  <TagsContainer>
    <Link to="/products/frontmatter___date/ASC/all/all" className="shop-all-btn">All</Link>
    {list &&
      list.map(tag => {
        const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
        return (
          <Link key={tag} to={`/products/${tag}/frontmatter___date/ASC/all/all`}>
            {upperTag}'s
          </Link>
        );
      })}
  </TagsContainer>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};

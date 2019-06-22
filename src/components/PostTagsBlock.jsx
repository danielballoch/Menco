import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 0 1rem 1rem 0;
    
    padding: 0.3rem 0.6rem;
    
    border-radius: 10px;
    &:hover {

    }
  }
`;

const TagsBlock = ({ list }) => (
  <TagsContainer>
    {list &&
      list.map(tag => {
        const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
        return ( 
            <div>
            <Link key={tag} to={`/blog-tags/${tag}`}>
                <span>{upperTag}</span>
            </Link>
          </div>
        );
      })}
  </TagsContainer>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};

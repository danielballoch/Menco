import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TagsBlock from '../components/PostTagsBlock';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
         <h1>spacer</h1>
        <TagsBlock list={tags} />
      
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};

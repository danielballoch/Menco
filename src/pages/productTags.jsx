import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TagsBlock from '../components/ProductTagsBlock';
import { Link, graphql } from 'gatsby';
import ProductListing from "../components/product-link"

import SEO from "../components/seo"
import "../pages/products.css"

// const Tags = ({ pageContext, data }) => {
class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
      }
      
      componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      };
      
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      };

      state = {
        sortBtn: false,  
        sort: "price low-high"
    };
    // sort button is set to true when clicked, displaying sort options
    sortBtnToggleClickHandler = () => {
        this.setState((prevState)=> {
            return{sortBtn: !prevState.sortBtn};
        });
       };
    // sort set to button value when clicked
    sortToggleClickHandler = (option) => {
        console.log("option:" + option);
        this.setState(() => {
            return {sort: option}
        });
       };
       //set the sortBtn wrapper ref
       setWrapperRef(node) {
        this.wrapperRef = node;
      }
      // close sort bar
      handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState(() => {
                return {sortBtn: false}
            });
        }
      }





    render(){
        const { tags } = this.props.pageContext;
        //  console.log(products);
        const postEdges = this.props.data.allMarkdownRemark.edges;
        console.log(postEdges.length)
        console.log("Sort open: " + this.state.sortBtn)
        console.log("Sort by: " + this.state.sort)


return (
    <Layout>

{/* state = {
        activeSize: "M",
        modalOpen: false
    };
    
  
    setActiveSize(name) {
        this.setState({ activeSize: name })
        let selectedsize = name;
        console.log(selectedsize);
        return {selectedsize}
    }

    ToggleSizeguide(){
        this.setState((currentState) => ({
            modalOpen: !currentState.modalOpen, 
        }));
    } */}

        {/* className={this.state.activeSize === size ? 'sizeBtn active' : 'sizeBtn'}
            value={size}
            onClick={() => this.setActiveSize(size)}
            key={ size } */}
        

        <div className="top-margin">
            <SEO />
            <div className="sort-bar">
                Shop/All 
                <a>{postEdges.length} items found</a>
                <button onClick={() => this.sortBtnToggleClickHandler()} className={this.state.sortBtn ? 'sort-button open' : "sort-button"} ref={this.setWrapperRef}>
                    sort: {this.state.sort} 
                    <div>
                        <Link className="sortLink" to="/products/frontmatter___price/ASC" onClick={() => this.sortToggleClickHandler("price low-high")}>price low-high</Link>
                        <Link className="sortLink" to="/products/frontmatter___price/DESC" onClick={() => this.sortToggleClickHandler("price high-low")}>price high-low</Link>
                        <Link className="sortLink" to="/products/frontmatter___date/ASC" onClick={() => this.sortToggleClickHandler("new releases")}>new releases</Link>
                        <Link className="sortLink" to="/products/frontmatter___date/DESC" onClick={() => this.sortToggleClickHandler("old gold")}>
                            old gold
                        </Link>
                    </div>
                    </button></div>
            <div className="content">
            
                <div className="filter-bar">
                <h2>Clothing:</h2>
                <div className="catalog-menu">
                    
                    <p>Catagory</p>
                    <TagsBlock list={tags} />
                    <p>Refine</p><br/>
                    <p>Color</p>
                    <p>Price</p>
                    <p>Fabric</p>

                </div>
                </div>
                <ProductListing postEdges={postEdges} wrap={"wrapper-left"}/>
            </div>
          </div>

    </Layout>
  );
    }
};


export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};

export const pageQuery = graphql`
    query(
        $tagName: String, 
        $order: [SortOrderEnum], 
        $sortOption: [MarkdownRemarkFieldsEnum], 
        )  {
        allMarkdownRemark(sort: {
             order: $order, fields: $sortOption }
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
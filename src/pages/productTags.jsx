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
      state = {
        sortBtn: false,  
        sort: "price low-high",
        sortLinkPre: "/products/"
    };
      
       // sort set to button value when clicked
    sortToggleClickHandler = (option) => {
        console.log("option:" + option);
        this.setState(() => {
            return {sort: option}
        });
       };
      
      componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        //set state based on page context, this is done so state is not reset to defualt "price low-high" on page reload
        if (this.props.pageContext.order === "DESC" && this.props.pageContext.sortOption === "frontmatter___price"){this.sortToggleClickHandler("price high-low")}
         else if (this.props.pageContext.order === "ASC" && this.props.pageContext.sortOption === "frontmatter___price"){this.sortToggleClickHandler("price low-high")}
         else if (this.props.pageContext.order === "DESC" && this.props.pageContext.sortOption === "frontmatter___date"){this.sortToggleClickHandler("old gold")}
         else {this.sortToggleClickHandler("new releases")};
         
      };
      
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        
      };

     
    // sort button is set to true when clicked, displaying sort options
    sortBtnToggleClickHandler = () => {
        this.setState((prevState)=> {
            return{sortBtn: !prevState.sortBtn};
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
        const tagName = this.props.pageContext.tagName;
        //  console.log(products);
        const postEdges = this.props.data.allMarkdownRemark.edges;
        // console.log(postEdges.length)
        // console.log("Sort open: " + this.state.sortBtn)
        // console.log("Sort by: " + this.state.sort)
        console.log(this.props.pageContext)
        console.log(this.props.pageContext.order)

        
        //creating var sortLinkPre so sortBtns redirect to the proper url whether there is a tag selected or not. 
        // *neccacery since I now use productTags.jsx for both pages vs haveing productTag && productTags as templates;
        console.log("tagname:" + tagName);
        if (tagName !== undefined && this.state.sortLinkPre === "/products/"){
            this.setState(() => {
                let link = "/products/" + tagName;
                console.log("tagnameinyeah" + tagName)
                return {sortLinkPre : link }
            }); 
        } else if (this.state.sortLinkPre !== "/products/" && tagName === undefined){
             this.setState(() => { return {sortLinkPre: "/products/"}})
            }
        console.log("sortLinkPre:" + this.state.sortLinkPre);
        let sortLinkPre = this.state.sortLinkPre;
        
        

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
                Shop/{tagName}
                <a>{postEdges.length} items found</a>
                <button onClick={() => this.sortBtnToggleClickHandler()} className={this.state.sortBtn ? 'sort-button open' : "sort-button"} ref={this.setWrapperRef}>
                    sort: {this.state.sort} 
                    <div>
                        <Link className="sortLink" to={sortLinkPre + "/frontmatter___price/ASC"} onClick={() => this.sortToggleClickHandler("price low-high")}>price low-high</Link>
                        <Link className="sortLink" to={sortLinkPre + "/frontmatter___price/DESC"} onClick={() => this.sortToggleClickHandler("price high-low")}>price high-low</Link>
                        <Link className="sortLink" to={sortLinkPre + "/frontmatter___date/ASC"} onClick={() => this.sortToggleClickHandler("new releases")}>new releases</Link>
                        <Link className="sortLink" to={sortLinkPre + "/frontmatter___date/DESC"} onClick={() => this.sortToggleClickHandler("old gold")}> old gold</Link>
                    </div>
                    </button></div>
            <div className="content">
            {/* "/products/{{this.props.tagName}}/frontmatter___price/ASC" */}
            
                <div className="filter-bar">
                <h2>Clothing:</h2>
                <div className="catalog-menu">
                    
                    <p>Catagory</p>
                    <TagsBlock list={tags} />
                    <Link to="/products">Shop All</Link>
                    <p>Refine</p><br/>
                    <p>Color</p>
                    <p>Price</p>
                    

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
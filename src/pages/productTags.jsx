import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TagsBlock from '../components/ProductTagsBlock';
import { Link, graphql } from 'gatsby';
import ProductListing from "../components/product-link";
// import DropdownBtn from "../components/dropdownBtn";
import DropdownBtn from "../components/dropdownButton";
import RefineButton from "../components/refineMenu/refineButton"
import RefineMenu from "../components/refineMenu/refineMenu"
import Backdrop from '../components/Backdrop/Backdrop'

import SEO from "../components/seo"
import "../pages/products.css"


// const Tags = ({ pageContext, data }) => {
class Tags extends React.Component {
    constructor(props) {
        super(props);
        // this.setWrapperRef = this.setWrapperRef.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);
      }
      state = {
        sortBtn: false,  
        sortText:"price low-high",
        sortLinkPre: "/products",
        sortOption: "frontmatter___price",
        sortOrder: "ASC",
        sort: "/frontmatter___price/ASC/",
        sortLabel: "price low-high",
        colorOption: "all",
        priceRange: "all",
        tagName: "",
        pageProductColors: "",
        refineMenuOpen: false,
    };
      
       // sort (state) set to button value when clicked
    sortTextClickHandler = (option) => {
        this.setState(() => {
            return {sort: option}
        });
       };
      
      componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        //set state based on page context, this is done so state is not reset to defualt "price low-high" on page reload
        if (this.props.pageContext.sortOrder === "DESC" && this.props.pageContext.sortOption === "frontmatter___price"){this.sortTextClickHandler("price high-low")}
         else if (this.props.pageContext.sortOrder === "ASC" && this.props.pageContext.sortOption === "frontmatter___price"){this.sortTextClickHandler("price low-high")}
         else if (this.props.pageContext.sortOrder === "DESC" && this.props.pageContext.sortOption === "frontmatter___date"){this.sortTextClickHandler("old gold")}
         else {this.sortTextClickHandler("new releases")};
         //same for colorOption
        if (this.state.colorOption !== this.props.pageContext.colorOption){this.setState({colorOption: this.props.pageContext.colorOption})};
        // and priceRange 
        if (this.state.priceRange !== this.props.pageContext.priceRange){this.setState({priceRange: this.props.pageContext.priceRange})};
        // //set tagName to empty string 
        // if (this.props.pageContext.tagName === undefined){} 
        if (this.props.pageContext.tagName){this.setState({tagName: this.props.pageContext.tagName})};

        //set sort and sortLabel, keeping in check with pageContext so renders don't set state over top of pageContext.
        var pageSort = ("/" + this.props.pageContext.sortOption + "/" + this.props.pageContext.sortOrder + "/")
        if (pageSort !== ("/" + this.props.pageContext.sortOption + "/" + this.props.pageContext.sortOrder + "/")){pageSort = ("/" + this.props.pageContext.sortOption + "/" + this.props.pageContext.sortOrder + "/")}
        if (this.state.sort !== pageSort){this.setState({sort: pageSort}); console.log(this.state.sort);}

                if (pageSort === "/frontmatter___price/ASC/"){this.setState({sortLabel: "price low-high"})}
                else if (pageSort === "/frontmatter___price/DESC/"){this.setState({sortLabel: "price high-low"})}
                else if (pageSort === "/frontmatter___date/ASC/"){this.setState({sortLabel: "new releases"})}
                else if (pageSort === "/frontmatter___date/DESC/"){this.setState({sortLabel: "old gold"})}
                console.log("sort: " + this.state.sort)
                console.log("sortLabel: " + this.state.sortLabel)



         //creating var sortLinkPre so sortBtns redirect to the proper url whether there is a tag selected or not. 
        // *neccecery since I now use productTags.jsx for both pages vs haveing productTag && productTags as templates;
        const tagName = this.state.tagName;
        if (tagName !== "" && this.state.sortLinkPre === "/products/"){
            this.setState(() => {
                let link = "/products/" + tagName;
                return {sortLinkPre : link }
            }); 
        } else if (this.state.sortLinkPre !== "/products/" && tagName === ""){
             this.setState(() => { return {sortLinkPre: "/products/"}})
            }    



        //getting colors for dropdownButton
        const postEdges = this.props.data.allMarkdownRemark.edges;
        var colorOptions = this.props.pageContext.colors;
        if (colorOptions[0] !== "all")colorOptions.unshift("all")
        var pageProductColors = [];
        postEdges.forEach(({node}) => {
            if (node.frontmatter.color){
                node.frontmatter.color.forEach(color => {
                    if (!pageProductColors.includes(color)){
                        pageProductColors.push(color);
                    }
                    
                })
            }
        })
        if (!tagName){pageProductColors = colorOptions}  
        this.setState({pageProductColors: pageProductColors})          
      };

     
      componentDidUpdate(){
          console.log(this.state.sort)
          console.log(this.state.sortLabel)
      }


      
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        
      };

      

     

     
      // sort button is set to true when clicked, displaying sort options
      sortBtnToggleClickHandler = () => {
        this.setState((prevState)=> {
            return{sortBtn: !prevState.sortBtn};
        });
       };

      refineToggle = () => {
        this.setState((prevState) => {
            return{refineMenuOpen: !prevState.refineMenuOpen}
        })
        console.log("refine: " + this.state.refineMenuOpen)
      }   
   
      setDropdownState = (option, mainText) => {
        this.setState({[mainText + "Option"]: option})
      }


    //   setWrapperRef(node) {
    //     this.wrapperRef = node;
    // }

    //   handleClickOutside(event) {
    //     if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    //         this.setState({sortBtn: false});
    //         this.setState({refineMenuOpen: false});
    //       }
    //   }

      backdropClickHandler = () => {
        this.setState({refineMenuOpen: false});
    };


      





      



    render(){
        const { tags } = this.props.pageContext;
        var tagName = this.state.tagName;
        const postEdges = this.props.data.allMarkdownRemark.edges;
        const SortOptions = ["/frontmatter___price/ASC/","/frontmatter___price/DESC/","/frontmatter___date/ASC/","/frontmatter___date/DESC/"]
        

        //set vars for sort links
        var sortLinkPre = this.state.sortLinkPre;
        var colorOption = this.state.colorOption;
        var priceRange = this.state.priceRange;
        var refineMenuOpen = this.state.refineMenuOpen;

        if(this.state.refineMenuOpen){
            var backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
             
return (
    <div >
    <Layout >

        <SEO title="Products"/>
        <RefineMenu setWrapperRef={this.setWrapperRef} Open={refineMenuOpen} onChange={this.setDropdownState} sortLabel={this.state.sortLabel} SortOptions={SortOptions} ColorOptions={this.state.pageProductColors || ['']} PriceRangeOptions={['all','0-50','50-100', '100-200'] || ['']} sortlinkpre={sortLinkPre} priceRange={this.props.pageContext.priceRange || "all"} colorOption={this.props.pageContext.colorOption}/>
        {backdrop}


        <div className="top-margin">
            <div className="sort-bar">
                <span><Link className="shop" to="/products/frontmatter___date/ASC/all/all">Shop/</Link>{tagName}</span>
                <span className="itemsFound">{postEdges.length} items found</span>
        
                <button onClick={() => this.sortBtnToggleClickHandler()} className={this.state.sortBtn ? 'sort-button open' : "sort-button"}  >
                    sort: {this.state.sortLabel} 
                    <div>
                        <Link className="sortLink" to={sortLinkPre + tagName + "/frontmatter___price/ASC/" + colorOption +"/"+ priceRange} onClick={() => this.sortTextClickHandler("price low-high")}>price low-high</Link>
                        <Link className="sortLink" to={sortLinkPre + tagName + "/frontmatter___price/DESC/" + colorOption +"/"+ priceRange} onClick={() => this.sortTextClickHandler("price high-low")}>price high-low</Link>
                        <Link className="sortLink" to={sortLinkPre + tagName + "/frontmatter___date/ASC/" + colorOption +"/"+ priceRange} onClick={() => this.sortTextClickHandler("new releases")}>new releases</Link>
                        <Link className="sortLink" to={sortLinkPre + tagName + "/frontmatter___date/DESC/" + colorOption +"/"+ priceRange} onClick={() => this.sortTextClickHandler("old gold")}> old gold</Link>
                    </div>
                </button>
                {/* add refine button for mobile to bring up sort and refine options - this stops screen being too overloaded */}
                <RefineButton toggle={this.refineToggle} open={refineMenuOpen} />
                    
            </div>
            <div className="content" >
            {/* "/products/{{this.props.tagName}}/frontmatter___price/ASC" */}
            
                <div className="filter-bar">
                <h2>Clothing:</h2>
                <div className="catalog-menu">
                    <div>
                    <p>Catagory</p>
                    <TagsBlock list={tags} />
                    </div>
                    
                    <div className="dropdown-container">
                        <div className="refine-tag"><p>Refine:</p></div>
                    
                        <DropdownBtn onChange={this.setDropdownState} options={this.state.pageProductColors || ['']} mainText="Color" sortlinkpre={sortLinkPre} priceRange={this.props.pageContext.priceRange || "all"} colorOption={this.props.pageContext.colorOption}/>
                        <DropdownBtn onChange={this.setDropdownState} options={['all','0-50','50-100', '100-200'] || ['']} mainText="Price" sortlinkpre={sortLinkPre} colorOption={this.props.pageContext.colorOption} priceRange={this.props.pageContext.priceRange || "all"}/>
                    </div>
                    
                    
                    
                    

                </div>
                </div>
                <ProductListing postEdges={postEdges} wrap={"wrapper-left"}/>
            </div>
          </div>
          
    </Layout>
    </div>
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
        $sort: MarkdownRemarkSortInput,
        $tagName: String, 
        $colorOption: String,
        $priceUpper: Int,
        $priceLower: Int,
        )  {
        allMarkdownRemark(
            sort: $sort
            filter: {fields: {collection: {eq: "products"}},frontmatter: {tags: {eq: $tagName}, color: {eq : $colorOption}, price: {gte: $priceLower , lte: $priceUpper} }  }
             
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
                color
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

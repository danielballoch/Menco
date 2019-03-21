import React from "react"
import {Link} from "gatsby"

const ProductLink = ({ product }) => (
    <div>
        <Link to={product.frontmatter.path}>
        {product.frontmatter.title}
        </Link>
    </div>
)

export default ProductLink
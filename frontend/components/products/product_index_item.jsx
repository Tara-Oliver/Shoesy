import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { product } = this.props;

        return (
            <li key={product.id}>
                <Link to={`/products/${product.id}`} >
                    <img src={product.photoUrl} alt="" />
                    <p>{product.name}</p>
                     ${product.price}
                </Link>
            </li >
        )
        
    }
}



export default ProductIndexItem;
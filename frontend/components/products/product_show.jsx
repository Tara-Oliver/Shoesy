import React from 'react';
import { Link } from 'react-router-dom';



class ProductShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }
    
    render() {
        const { product } = this.props;
       
        if (!product) {
            return null;
        }
    
        
        // if (!product.username) {
        //     return null;
        // }
        

        return (

            
            <div className='product-show-container'>
                <img src={product.photoUrl} alt="" />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                {/* <p>Sold by: {product.seller.username}</p> */}

            </div>
        )
    }
}

export default ProductShow;
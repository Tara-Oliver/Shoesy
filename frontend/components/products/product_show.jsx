import React from 'react';
import { Link } from 'react-router-dom';



class ProductShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }
    
    render() {
        const { product } = this.props;
       
        if (!product) {
            return null
        }
        
        return (
            <div className='product-show-container'>
                <div className='main-image-container'>
                    <img src={product.photoUrl}
                         alt="" 
                         className='main-photo'
                    />
                </div>
                <div>
                    <form action="">
                        <p className='seller'>Sold by: {product.username}</p>
                        <h1 className='prod-name'>{product.name}</h1>
                        <p className='price'>${product.price}</p>
                        <label className='size-lbl'>Size</label>
                        <select classname="size-input">
                            <option value="selected">Select an option</option>
                            <option value="6">6</option>
                            <option value="6.5">6.5</option>
                            <option value="7">7</option>
                            <option value="7.5">7.5</option>
                            <option value="8">8</option>
                            <option value="8.5">8.5</option>
                            <option value="9">9</option>
                            <option value="9.5">9.5</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                        <button className='cart-btn'>Add to cart</button>
                       <span className='desc-label'>Description</span>
                        <p className='desc'>{product.description}</p>
                    </form>
                </div>
            </div>)
    }
}




       
    


export default ProductShow;
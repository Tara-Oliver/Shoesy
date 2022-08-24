import React from 'react';
import { withRouter, Link } from 'react-router-dom';



class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { product } = this.props;

        return (
            // <div className='prod-container'>
                // <li key={product.id} className='index-list-item'>
                    <Link to={`/products/${product.id}`} >
                        <img src={product.photoUrl} alt="" />
                <p className='price-badge-container'>
                        <span className='price-badge'> 
                            <span>$</span>
                            <span>{product.price}</span> 
                        </span>
                        </p>
                    </Link>
                // </li >
            // </div>
        )
        
    }
}



export default withRouter(ProductIndexItem);
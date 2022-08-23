import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
        this.props.fetchProducts()
    }

    render(){
        debugger
        return(
            <>
                <div className='index-container'>
                    <div className='inner'>
                        <div className='inner-header'>
                            <h2 className='index-title'>Popular gifts right now</h2>
                        </div>
                    </div>
                    <div className='recent'> 
                        <ul className='item-box'>
                            <li className='prod-pics'>
                                <a href="">
                                    <img className='pics' src={'/Pump4.jpg'} />
                                    <div className="listing-reviews">
                                        <p className='name'>Snakeskin High Heels</p>
                                    </div>
                                    $84.00
                                </a>
                            </li>
                            
                            <li className='prod-pics'>
                                <a href="">
                                    <img className='pics' src={'/Sandal3.jpg'} />
                                    <div className="listing-reviews">
                                        <p className='name'>Pom pom Sandals</p>
                                    </div>
                                    $188.26
                                </a>
                            </li>
                        </ul>
                    </div>




                </div>
            </>
        )
    }

}


export default ProductIndex;
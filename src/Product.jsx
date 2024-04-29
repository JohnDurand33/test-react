import React from 'react'
import Moment from 'react-moment'

const Product = ({ product, user, addToCart }) => {

    const handleClick = () => {
        addToCart(product)
        // if logged in then let Flask know about the addition
    }

    return (
        <div className="card mx-auto mb-5" style={{ width: '18rem' }}>
            <img
                src={product.img_url ?? 'https://placeholder.com/150'}
                className="card-img-top card"
                alt="..."
            />
            <div className="card-body p-0">
                <h5 className="card-title m-1">{product.product_name}</h5>
                <h6 className="card-subtitle m-1 text-body-secondary">{product.price}</h6>
                <p className="card-text m-1 rounded-4">{product.desrciption}</p>
                <button className='btn btn-primary' onClick={handleClick}>Add To Cart</button>
            </div>
            <div
                className="card-footer m-0 text-body-secondary rounded-5"
                style={{ display: 'flex', justifyContent: 'center' }}>
                <Moment id="a-footnote" fromNow>
                    {product.date_created}
                </Moment>
            </div>
        </div>
    )
}

export default Product;
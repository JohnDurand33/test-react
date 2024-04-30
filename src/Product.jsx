import React from 'react';
import Moment from 'react-moment';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const Product = ({ product, user, addToCart }) => {

    const addToCartAPI = async () => {
        const res = await fetch(BACKEND_URL + '/api/cart/add', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "product_id": product.id })
        });
        const data = await res.json();
        if (data.status === 'ok') {
            return {
                status: 'ok',
                "cart": data.cart
            }
        }
    }

    const handleClick = () => {
        addToCart(product)
        if (user.token) {
            addToCartAPI()
        }
    }



    return (
        <div className="card mx-auto mb-3" style={{ width: '18rem' }}>
            <img
                src={product.img_url ?? 'https://placeholder.com/150'}
                className="card-img-top card"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{product.price}</h6>
                <p className="card-text">{product.desrciption}</p>
                <button className='btn btn-primary' onClick={handleClick}>Add To Cart</button>
            </div>
            <div
                className="card-footer text-body-secondary rounded-5" >
                <Moment fromNow>
                    {product.date_created}
                </Moment>
            </div>
        </div>
    )
}

export default Product;
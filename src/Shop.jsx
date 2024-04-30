import React, { useEffect, useState } from 'react'
import Product from './Product'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

const Shop = ({ user, addToCart }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const res = await fetch(BACKEND_URL + '/api/products');
        const data = await res.json()

        console.log(data)
        if (data.status === 'ok') {
            setProducts(data.products)
        }
    };

    const showPosts = () => {
        return products.map(p => <Product key={p.id} product={p} user={user} addToCart={addToCart} />)
    };

    return (
        <div>
            <h1>The Shop</h1>
            <main className='container justify-content-center row'>
                {showPosts()}
            </main>
        </div>
    )
}

export default Shop
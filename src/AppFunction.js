import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import CreatePost from './CreatePost'
import Feed from './Feed'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import News from './News'
import NewsFunction from './NewsFunction'
import Shop from './Shop'
import SignUp from './SignUp'
import SinglePost from './SinglePost'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

// These functions allow you to add / remove dictionaries to loaclStorage
// localStorage.getItem()
// localStorage.setItem()
// localStorage.removeItem()

const AppFunction = () => {
    const getUserFromLS = () => {
        const foundUser = localStorage.getItem('user1')
        if (foundUser) {
            return JSON.parse(foundUser)
        } else return {}
    }
    const [user, setUser] = useState(getUserFromLS())
    const [cart, setCart] = useState([])

    const logMeIn = (user) => {
        setUser(user)
        localStorage.setItem('user1', JSON.stringify(user))
    }

    const logMeOut = () => {
        setUser({})
        localStorage.removeItem('user1')
    }

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    const removeFromCart = (product) => {
        const copy = [...cart]
        for (let i = cart.length - 1; i >= 0; i--) {
            if (product.id === cart[i].id) {
                copy.splice(i, 1)
                break
            }
        }
        setCart(copy)
    }

    const getTotal = () => {
        let total = 0
        for (let item of cart) {
            total += parseFloat(item.price)
        }
        return total.toFixed(2)
    }

    const getCartAPI = async (user) => {
        if (user.token) {
            const res = await fetch(BACKEND_URL + '/api/cart', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })
            const data = await res.json()
            if (data.status === 'ok') {
                console.log(data)
                setCart(data.cart)
            }
        } else {
            setCart([])
        }
    }

    useEffect(() => {
        getCartAPI(user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <BrowserRouter>
            <div className='AppFunction'>
                <Navbar
                    user={user}
                    cart={cart}
                    addToCart={addToCart}
                    getTotal={getTotal}
                    logMeOut={logMeOut}
                />
                <Routes>
                    <Route path='/' element={<Home user={user} />} />
                    <Route path='/posts' element={<Feed user={user} />} />
                    <Route
                        path='/posts/:postId'
                        element={<SinglePost user={user} />}
                    />
                    <Route path='/news' element={<News user={user} />} />
                    <Route
                        path='/news2'
                        element={<NewsFunction user={user} />}
                    />
                    <Route
                        path='/posts/create'
                        element={<CreatePost user={user} />}
                    />
                    <Route
                        path='/shop'
                        element={<Shop user={user} addToCart={addToCart} />}
                    />
                    <Route path='/signup' element={<SignUp />} />
                    <Route
                        path='/login'
                        element={<Login logMeIn={logMeIn} user={user} />}
                    />
                    <Route
                        path='cart'
                        element={
                            <Cart
                                user={user}
                                cart={cart}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                            />
                        }></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppFunction

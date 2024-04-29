import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

const AppFunction = () => {
    const [user, setUser] = useState({})
    const [cart, setCart] = useState([])

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

    const logMeIn = (user) => {
        setUser(user)
        console.log(user)
    }

    const logMeOut = () => {
        setUser({})
    }

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
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
                    {/* <Route
                        path='/logout'
                        element={<Logout logMeOut={logMeOut} user={user} />}
                    /> */}
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppFunction

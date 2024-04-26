import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePost from './CreatePost'
import Feed from './Feed'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Navbar from './Navbar'
import News from './News'
import NewsFunction from './NewsFunction'
import SignUp from './SignUp'
import SinglePost from './SinglePost'

const AppFunction = () => {
    const [user, setUser] = useState({})

    const logMeIn = (user) => {
        setUser(user)
        console.log(`User '${user.username}' was successfully logged in!`)
    }

    const logMeOut = () => {
        setUser({})
        console.log(`${user.username} was successfully logged out!`)
    }

    return (
        <BrowserRouter>
            <div className='AppFunction'>
                <Navbar user={user} />
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
                    <Route path='/signup' element={<SignUp />} />
                    <Route
                        path='/login'
                        element={<Login logMeIn={logMeIn} user={user} />}
                    />
                    <Route
                        path='/logout'
                        element={<Logout logMeOut={logMeOut} user={user} />}
                    />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppFunction

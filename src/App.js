import { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Feed from './Feed'
import News from './News'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './CreatePost'

//"Browser Router" is a wrapper that wraps all routes that need it in the App / main file (here)
// "Routes" similar to block content syntax

// rafc
//In function version below, WHAT IS RETURNED IS WHAT IS RENDERED (Check Home.jpx for difference)
// think of app as your base.html file
// Component class carries an object of 'props' that is all the information sent here by its parent
class App extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                username: 'John',
                email: 'john@ct.com',
            },
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Navbar user={this.state.user} x='hi' />
                    <Home user={this.state.user} />{' '}
                    {/* HOME IS UNIQUE:  NOTICE IT IS NOT WRAPPED BY THE "ROUTES" COMPONENT!!!! */}
                    <Routes>
                        <Route path='/posts' element={<Feed />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/posts/create' element={<CreatePost />} />
                    </Routes>
                    {/* <News /> */}
                    <Footer />
                    {/* <News user={this.state.user} x='hi'/> */}
                </div>
            </BrowserRouter>
        )
    }
}

export default App

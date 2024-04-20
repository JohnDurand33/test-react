import { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Feed from './Feed'
import News from './News'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './CreatePost'
import SignUp from './SignUp'
import Login from './Login'


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
            user: {}
        }
    };

    logMeIn = (user) => {
        this.setState({
            user:user
        })
        console.log(`current user id: ${user.id}`)
    };


    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Navbar user={this.state.user} />
                    <Home user={this.state.user} />
                    <Routes>
                        <Route path='/posts' element={<Feed user={this.state.user}/>} />
                        <Route path='/news' element={<News />} />
                        <Route path='/feed' element={<Feed user={this.state.user}/>} />
                        <Route path='/posts/create' element={<CreatePost user={this.state.user}/>} />
                        <Route path='/signup' element={<SignUp />}/>
                        <Route path='/login' element={<Login logMeIn={this.logMeIn} />}/>
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App

import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePost from './CreatePost'
import Feed from './Feed'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import News from './News'
import SignUp from './SignUp'

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
            user: {},
            users:[]
        }
    };

    logMeIn = (user) => {
        this.setState({
            user:user
        })
        console.log(`current user id: ${user.id}`)
    };

    componentDidMount = () => {
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
                        <Route path='/login' element={<Login logMeIn={this.logMeIn}/>}/>
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }}

export default App

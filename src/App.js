import { Component } from 'react'
import Home from "./Home";
import Navbar from "./Navbar";
import Feed from './Feed';
import Footer from './Footer';


// rafc
//In function version below, WHAT IS RETURNED IS WHAT IS RENDERED (Check Home.jpx for difference)
// think of app as your base.html file
// Component class carries an object of 'props' that is all the information sent here by its parent
class App extends Component {
    constructor(){
        super();
        this.state = {
            user: {
                username:"John",
                email:"john@ct.com"
            }
        }
    }

    render() {
        return (
        <div className="App">
            <Navbar user={this.state.user} x='hi'/>

            <Home user={this.state.user} x='hi' />
                
            <Feed />
                
            <Footer />

            {/* <News user={this.state.user} x='hi'/> */}

        </div>
        );
    }
}

export default App;
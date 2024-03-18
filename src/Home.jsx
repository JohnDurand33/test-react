import React, { Component } from "react";

//type rcc for below React-Classs-Component   -> Allows us to tap into a 
//STATE VARIABLE (attribute variable that holds a dictionary of variables).  When states change, you can modify the component.

// Components have methods that we will take advantage of

// Life Cycle of a Component
//__________________________________________________
// 1. Construct -> build itself

// 2. 1st Render -> renders - -> easiest

// 3. Mounted -> ONLY HAPPENS THE FIRST render, considered Mounted onto the DOM

//     If Component state Changes {
//         4. Re-render  ->  re-renders
// }

/* With rcc, when a Component Class is created, it has a render method, with has a return definition inside it.  A function will return whatever it has inside, a class has a method that does the same*/

export default class Home extends Component {
    constructor() { //SETS UP THE INITIAL STATE OF YOUR METHOD (LIKE THE INIT METHOD)
        super(); //  <- ALWAYS RUN PARENTS CONSTRUCTOR
        console.log('Constructing')
        this.state = { // STORES VARIABLES WE ARE KEEPING TRACK OF
            //EXAMPLE
            count: 0,
            name: "John"
        }
    }

    componentDidMount(){ // default does nothing, but we can use it to do additional things after first render (Look at life cycle for reference!)
        //
        console.log('Mounted')
    }

    handleClick=()=>{ //Use a Setterfunction, DO NOT TRY TO MUTATE ANY STATE DIRECTLY!!!!!!!!!!!!!  TREAT STATES AS IMMUTABLE!!!!!!
        this.setState({
            count: this.state.count + 1
        }) 

        console.log(this.state)
    }

	render() {

        console.log('Rendering')
		return ( 
        <div>
            <h1>
                This is the Home Page!</h1>
                { this.state.count }
                {this.props.user.username} 
                <button onClick={this.handleClick}> 
                    +
                </button> 
        </div> // handleClick is a HELPER FUNCTION.  you could have just put the function inside the div -> onClick variable
        )
	}
}

import React from "react"
import CardName from './components/CardName'
import ButtonChange from './components/ButtonChange'

class AppClass extends React.Component {
    constructor() {
      super()
      this.state = {
        name : "John Doe"
      }
  }
  
    changeName = () => {
      this.setState({
       name: "Jane Doe" 
      })
    }
  
  
    componentDidMount() {
      console.log("component did mount");
    }
  
    componentDidUpdate(_, prevState) {
      if(prevState.name !== this.state.name) {
      console.log("component did update")
    }
  }
  
    shouldComponentUpdate(_, nextState) {
      if (nextState.name === "Jane Doe") {
        console.log("component should update")
        return false 
      }
      return true
    }
  
    render() {
      return (
        <div>
          <p>ini Paragraf</p>
          <h1>Hello {this.state.name}!</h1>
          <CardName name={this.state.name}></CardName>
          <ButtonChange changeEventListener={this.changeName}></ButtonChange>
          {/* <button onClick={this.changeName}>Click Me!</button> */}
          
        </div>
      );
    }
  }
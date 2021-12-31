import React, { Component } from 'react'
import '../States.css'
export default class  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"mokshi",
             count:0
        }
    }
    
    render() {

        setTimeout(() =>{
            this.setState({
                name:"mokshi ram"
            })
        
        
        },5000)
        return (
            <div class="demo">
                <h1>Hi {this.state.name} {this.state.count}</h1>
                <button onClick={()=>{this.setState(
                    {count:this.state.count+1}
                    // {count:this.state.count-1}
                )}} >increment button</button>
                <br />
                <br/>
                <button onClick={()=>{this.setState(
                    {count:this.state.count-1}
                )}} >Decrementbutton</button>
                <br/>
                <br/>
                <button onClick={()=>{this.setState(
                    {count:0}
                )}} >Resetbutton</button>
        
            </div>
        )
    }
}

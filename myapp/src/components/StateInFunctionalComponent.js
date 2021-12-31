import React,{useState} from 'react'

export default function StateInFunctionalComponent() {
    let [name,updatename]=useState("mokshi");
    let [count,updatecount]=useState(0)
    return (
        <div>
            <h1 onMouseOver={()=>{updatename("mookshi ram P")}}>
               {name}{this.state.count}
            </h1>
            
            <button onClick={()=>{this.setState(
                    {count:this.state.count-1}
                )}} >Decrementbutton</button>
                <br/>

        </div>
    )
}

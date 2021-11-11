import React,{Component} from "react";
import ChildComponent from "./ChildComponent";

class Parent extends Component{
    constructor(props){
        super()
        this.state={
           parentName:'parent'
        }

        this.greetParent=this.greetParent.bind(this)
    }

  

    greetParent(childname){
        alert(`Hello,${this.state.parentName} from ${childname}`)
    }


    render(){
        return(
            <div>
                 <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Parent
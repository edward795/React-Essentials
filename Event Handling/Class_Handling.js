import React,{ Component } from "react" 

class Handler extends Component{
   clickHandler(){
      console.log("handler");
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default Handler
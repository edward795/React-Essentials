import React,{Component} from "react" 

class EventBinding extends Component{
    constructor(props){
        super(props)

        this.state={
            message:"Hello"
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

         

        // clickHandler(){
        //     this.setState({
        //         message:"GoodBye"
        //     })
        // }
    
          clickHandler=()=>{
              this.setState({
                  message:'GoodBye'
              })
          }  
        
    render(){
        return(
            <div>
                {this.state.message}
                <br></br>
                {/*<button onClick={this.clickHandler.bind(this)}>Submit</button>*/}
                {/* <button onClick={()=>this.clickHandler()}>Submit</button> */}
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default EventBinding
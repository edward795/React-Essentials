import React,{Component}  from "react";

class Conditional extends Component{

    constructor(props){
        super(props)

        this.state={
            isLoggedIn:true
        }
    }

    render(){

        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
        // return(
        // this.state.isLoggedIn? 
        //  <div>Welcome Vishwas</div>:<div>Welcome Guest</div>)

        // let message

        // if(this.state.isLoggedIn){
        //     message="Welcome Vishwas";
        // }else{
        //     message="Welcome Guest";
        // }
       
        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <h2>Welcome Vishwas</h2>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             <h2>Welcome Guest</h2>
        //         </div>
        //     )
        }
        // return (
        //     <div>
        //         <h2>Welcome Vishwas</h2>
        //         <h2>Welcome Guest</h2>
        //     </div>
        // )
    }


export default Conditional;

import React, { Component } from 'react';
import LifecycleB from './LifeCycleB';

class LifecycleA extends Component {


    constrcutor(){

        this.state={
            name:'Vishwas'
        }

        console.log("lifeCycle A Constructor!\n");
      }

   static getDerivedStateFromProps(props,state){
       console.log("lifeCycle A getDerivedStateFromProps\n");
       return null;
   }

   componentDidMount(){
       console.log("LifeCycle A Mounted!\n");
   }
    

   shouldComponentUpdate(){
       console.log("Lifecycle A Component update\n");
       return true
   }

   getSnapshotBeforeUpdate(prevProps,prevState){
       console.log("Lifecycle A before update snapshot\n");
       return null
   }

   componentDidUpdate(){
       console.log("Lifecycle A Component did update\n")
   }

   changeState=()=>{
      this.setState({
          name:"Ayyappa "
      })
   }

    render() {
       
    
        return (
            <div>
                <h2>lifecycleA</h2>
                <LifecycleB/>
                <button onClick={this.changeState}>changeState</button>
            </div>
        );
    }
}

export default LifecycleA;
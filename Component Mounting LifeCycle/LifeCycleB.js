import React, { Component } from 'react';

class LifecycleB extends Component {


    constrcutor(){

        this.state={
            name:'Vishwas'
        }

        console.log("lifeCycle B Constructor!\n");
      }

   static getDerivedStateFromProps(props,state){
       console.log("lifeCycle B getDerivedStateFromProps\n");
       return null;
   }

   componentDidMount(){
       console.log("LifeCycle B Mounted!");
   }
   
   shouldComponentUpdate(){
    console.log("Lifecycle b Component update\n");
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Lifecycle b before update snapshot\n");
    return null
}

componentDidUpdate(){
    console.log("Lifecycle b Component did update\n")
}

    render() {
       
    
        return (
            <div>
                <h2>lifecycleB</h2>
            </div>
        );
    }
}

export default LifecycleB;
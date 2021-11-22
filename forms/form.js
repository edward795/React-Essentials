import React, { Component } from 'react';

class Form extends Component {
   constructor(props){
       super(props)
       this.state={
           username:'',
           comments:'',
           topic:''
       }
   }

    handleUserNameChange=(event)=>{
       this.setState({
          username:event.target.value
       })
   }

   handleCommentsChange=(event)=>{
       this.setState({
           comments:event.target.value
       })
   }

   handleTopicChange=(event)=>{
       this.setState({
           topic:event.target.value
       })
   }

   handleForm=event=>{
       alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
       event.preventDefault()
   }

    render() {
          
        //Destructuring username,comments,topic variables from state 

        //const {username,comments,state}=this.state;
        //so u can replace this.state.user => username...

        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange}/>
                     </div>

                     <div>
                         <label>comments</label>
                         <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                     </div>

                     <div>
                         <label>Select Stack</label>
                         <select value={this.state.topic} onChange={this.handleTopicChange}>  
                             <option value="react">React</option>
                             <option value="angular">Angular</option>
                             <option value="vue">Vue</option>
                         </select>
                     </div>
                     <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
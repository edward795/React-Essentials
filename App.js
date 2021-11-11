
import './App.css';
import Greet from './Props,State,setState/properties'
import Welcome from './Props,State,setState/ClassProperties'
import Subscribe from './Props,State,setState/stateClass';
import Counter from './setState/counter';
import FunctionClick from './Event Handling/Functional_handling';
import Handler from './Event Handling/Class_Handling';
import EventBinding from './Event Binding/event_binding';
import Parent from './ChildToParentCall/ParentComponent';

function App() {
  return (
    <div className="App">
     
      <Parent/>

    {/* <EventBinding/> */}
      
    { /*
    <FunctionClick/>
      <Handler/>
     <Counter/>
    <Subscribe/>
    <Greet name="Edward" heroname="Fullmetal Alchemist">
       <p>This is children props</p>
       </Greet>
     <Greet name="Adam" heroname="lighnting">
       <button>Action</button>
       </Greet>
     <Greet name="Bruce" heroname="Batman"/>

     <Welcome name="Edward" heroname="Fullmetal Alchemist">
     <p>This is children props</p>
     </Welcome>
     
     <Welcome name="Adam" heroname="lighnting">
     <button>Action</button>
     </Welcome>
     
  <Welcome name="Bruce" heroname="Batman"/> */}
  
    </div> 
  );
}

export default App;

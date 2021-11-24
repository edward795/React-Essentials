
import './App.css';
import Greet from './Props,State,setState/properties'
import Welcome from './Props,State,setState/ClassProperties'
import Subscribe from './Props,State,setState/stateClass';
import Counter from './setState/counter';
import FunctionClick from './Event Handling/Functional_handling';
import Handler from './Event Handling/Class_Handling';
import EventBinding from './Event Binding/event_binding';
import Parent from './ChildToParentCall/ParentComponent';
import Conditional from './Conditional Rendering/UserGreeting';
import NameList from './List Rendering/List';
import List from './Lists & Keys/keyProps';
import Stylesheets from './CSS in React/stylesheets';
import InlineCss from './CSS in React/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './forms/form';
import LifecycleA from './Component Mounting LifeCycle/lifecycleA';

function App() {


  return (
    <div className="App">

      <LifecycleA/>
     
    {/* <Form/> */}

      {/* <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Succes</h2>

      <InlineCss/> */}

    {/* <EventBinding/> */}
      
    { /*
     
      <Stylesheets primary={true}/>
      <List/>
    <NameList/>
      <Conditional/>
     <Parent/>
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

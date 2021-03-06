import React from "react" 
import Person from "./Person"



function NameList(){
//   const names=['Bruce','Clark','Diana'];
//   const nameList=names.map(name=><h2>{name}</h2>)

//   return <div>{nameList}</div>

const persons=[{"id":1,"name":"Clarke","age":28,"skill":"React"},
{"id":2,"name":"Diana","age":26,"skill":"Angular"},
{"id":3,"name":"Clarke","age":24,"skill":"Vue"}]
const personList=persons.map(person =><Person key={person.id} person={person}/>);

return <div>{personList}</div>
}

export default NameList;
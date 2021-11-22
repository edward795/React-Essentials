import React from "react" 

function List(){
    let names=['Bruce','Diana','Clarke']
    const namesList=names.map((name,index)=><li key={index}>{index}->{name}</li>);
    return <div>{namesList}</div>

}

export default List;
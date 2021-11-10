import React from "react" 

const Greet=(props)=>{ 
    const {name,heroname}=props
    return(
    <div>
    <h1>Hello {name}! aka {heroname}</h1>
    </div>
    )
}

export default Greet;
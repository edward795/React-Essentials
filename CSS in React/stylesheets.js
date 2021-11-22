import React from 'react';
import './styles.css'

function Stylesheets(props){

    let classNm=props.primary ? 'primary':''
    return(
        <div>
            <h1 className={ `${classNm} font-xl`  }>Stylesheets</h1>
        </div>
    )
}

export default Stylesheets;
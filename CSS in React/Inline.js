import React from 'react';

function InlineCss(){

    const heading={
        fontSize:'72px',
        color:'blue'
      }

    return (
        <div style={heading}>
            Inline
        </div>
    )
}

export default InlineCss;
import React from 'react'

const InputAltura = (props) =>{
  
    return(
        <div>
            <label>Digite a sua altura:</label>
            <input type="number" value={props.a} onChange={(e)=>props.sa(e.target.value)} /><br/>
        </div>
    )
}
export default InputAltura;
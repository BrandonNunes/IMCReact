import React from 'react'

const InputPeso = (props) =>{
  
    return(
        <div>
            <label>Digite o seu Peso:</label>
            <input type="number" value={props.p} onChange={(e)=>props.sp(e.target.value)} /><br/>
        </div>
    )
}
export default InputPeso;
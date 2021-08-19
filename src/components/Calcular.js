import React from 'react'

const CalcIMC = (props) => {
    const calc = () => {
         props.sr( props.p / (props.a*props.a));
     }
     return(
       <button onClick={()=>calc()} >Calcular IMC</button>
     )
}

export default CalcIMC;
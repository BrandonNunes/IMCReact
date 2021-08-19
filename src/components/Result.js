import React from 'react';

const Result=(props)=>{
    let msg= '';
    if(props.r < 18.5 && props.r > 0){
       msg = 'Você está abaixo do peso'
    }else if(props.r >=18.5 && props.r < 24.9 ){
        msg = 'Você está com peso normal'
    }else if(props.r >=25 && props.r < 29.9 ){
        msg = 'Você está um pouco acima do peso'
    }else if(props.r >=30 && props.r < 34.9 ){
        msg = 'Você está com obesidade grau I'
    }else if(props.r >=35 && props.r < 39.9 ){
        msg = 'Você está com obesidade grau II'
    }else if(props.r>=40){
        msg = <span style={{color:"red"}}>Você está com obesidade grau III CUIDADO!!!</span>
    }
   
    return(
        <div>
            <p>Resultado: {parseFloat(props.r).toFixed(2)}</p>
            <p>{msg}</p>
        </div>
        
    );
}

export default Result;
import InputPeso from "./components/InputPeso";
import InputAltura from "./components/InputAltura";
import Result from "./components/Result";
import CalcIMC from "./components/Calcular";
import Table from "./components/Table";
import Style from './style.css'
import React, {useState} from 'react'

function App() {
    const [peso,setPeso]=useState();
    const [altura,setAltura]=useState();
    const [res, setRes]=useState(0);
  
    return(
        <main>
          <h3>Calule o seu IMC</h3>
          <InputPeso p={peso} sp={setPeso} />
          <InputAltura a={altura} sa={setAltura}/>
          <CalcIMC p={peso} a={altura} sr={setRes}/>
          <Result r={res}/>
          <Table/>
     
        </main>
  )
       
  
};

export default App;

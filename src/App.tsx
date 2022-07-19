import React, { useState } from 'react';
import {MainBC , TitleBC,InputBC ,DivBC}from './components/Main';

//Icone da lupa
import {BsSearch} from "react-icons/bs"


function App() {
  const [input, setInput] = useState("")
  return (

    <div className="App">
      
      <MainBC>

        <TitleBC>
          Address Finder
        </TitleBC>

    
        <DivBC>
  
          <InputBC
            placeholder="Digite um CEP"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          
          <BsSearch
          size={25}/>

        </DivBC>


      </MainBC>
    </div>
  )
} 

export default App;

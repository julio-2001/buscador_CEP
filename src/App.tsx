import React, { useState } from 'react';
import {MainBC , TitleBC, InputBC, DivBC, IconeArea, DetailBC, UlBC, LiBC }from './components/Main';

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
            onChange={(e) => 
            setInput(e.target.value)}
            minLength={8}
            maxLength={8}
            required
          />

          <IconeArea>
            <BsSearch
            size={25}/>
          </IconeArea>
        </DivBC>


        <DetailBC>

          <UlBC>

            <LiBC>
              CEP:06447320
            </LiBC>

            <LiBC>
              Localidade: São paulo
            </LiBC>

            <LiBC>
              UF:SP
            </LiBC>

            <LiBC>
              DDD:11
            </LiBC>

            <LiBC>
              Bairro: Jardim julio
            </LiBC>

            <LiBC>
              Logradouro:avenida mina
            </LiBC>

            <LiBC>
              Complemento: Sem complemento
            </LiBC>



          </UlBC>
        
        </DetailBC>

      </MainBC>
    </div>
  )
} 

export default App;

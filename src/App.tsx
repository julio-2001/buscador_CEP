import React, { useState } from 'react';
import {MainBC , TitleBC, InputBC, DivBC, DetailBC, UlBC, LiBC, IconeAreaButton }from './components/Main';
import CepInfo from './interfaces/Interface_API';
import Service_API from './services/apiViaCep';

//Icone da lupa
import {BsSearch} from "react-icons/bs"


function App() {
  const [input, setInput] = useState("")
  const [cep, cepState] =  useState<CepInfo>() 
  
  

  async function HandleSubimit(){
    
    if(input === ''){
      alert("Digite um CEP")
      return
    }

    try{
      const response = await Service_API(`${input}/json`)
      const object:CepInfo = response.data
      cepState(object)
      
      console.log(response.data)
      setInput("")

      


    }catch{
      alert("ALgo deu errado, Reveja os campos")
      setInput("")
    }
  }



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

          <IconeAreaButton
          onClick={HandleSubimit}>
            <BsSearch
            size={25}/>
          </IconeAreaButton>
        </DivBC>


        <DetailBC>

          <UlBC>

            <LiBC>
              CEP:{cep?.cep}
            </LiBC>

            <LiBC>
              Localidade:{cep?.localidade}
            </LiBC>

            <LiBC>
              UF:{cep?.uf}
            </LiBC>

            <LiBC>
              DDD:{cep?.ddd }
            </LiBC>

            <LiBC>
              Bairro: {cep?.bairro}
            </LiBC>

            <LiBC>
              Logradouro:{cep?.logradouro}
            </LiBC>

            <LiBC>
              Complemento: {cep?.complemento || "Sem complemento" }
            </LiBC>

          </UlBC>
        
        </DetailBC>

      </MainBC>
    </div>
  )
} 

export default App;

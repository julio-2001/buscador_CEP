import React, { useState } from 'react';
import {MainBC , TitleBC, InputBC, DivBC, DetailBC, UlBC, LiBC, IconeAreaButton, LetterBC }from './components/Main';
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
      const objectCep:CepInfo = response.data
      cepState(objectCep)
      setInput("")
      console.log(response.data)
      

      


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
              CEP: <LetterBC>{cep?.cep} </LetterBC> 
            </LiBC>

            <LiBC>
              Localidade: <LetterBC>{cep?.localidade} </LetterBC>
            </LiBC>

            <LiBC>
              UF: <LetterBC>{cep?.uf}  </LetterBC>
            </LiBC>

            <LiBC>
              DDD: <LetterBC>{cep?.ddd } </LetterBC>
            </LiBC>

            <LiBC>
              Bairro: <LetterBC>{cep?.bairro}</LetterBC>
            </LiBC>

            <LiBC>
              Logradouro:<LetterBC>{cep?.logradouro}</LetterBC>
            </LiBC>

            <LiBC>
              Complemento: <LetterBC>{cep?.complemento || "Sem complemento" }</LetterBC>
            </LiBC>
          </UlBC>
        
        </DetailBC>
        

      </MainBC>
    </div>
  )
} 

export default App;

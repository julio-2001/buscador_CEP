import Axios from "axios"

const Service_API = Axios.create({
    //Api da ViaCep

    baseURL:"https://viacep.com.br/ws/"
})
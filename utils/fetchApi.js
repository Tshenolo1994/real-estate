import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'


//fetchng data from api

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '240b3363d4msh03d81f62544c3b2p1015eajsn88d05cdb8a1e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        
    })
    return data
}
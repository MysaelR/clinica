import axios from "axios";



const baseURL = 'http://algumaurl.com.br:0000';


const api = axios.create({
    baseURL
})

api.interceptors.request.use(
    function (config) {
/*       //console.log(`Request at url: ${config.baseURL}${config.url}`);
      //console.log(`Method: ${String(config.method).toUpperCase()}`); */
      if (config.method === 'post') {
        //console.log(config.data); talvez remover comentario a fins de verificação dos dados
      }
      return config;
    },
    function (error) {
      //console.log(error.data.response); talvez remover comentario a fins de verificação dos dados
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    function (response) {
/*       //console.log(`Response Status: ${response.status}`);
      
      //console.log(response.data); */
      return response;
    },
    function (error) {
      //console.log(error);
     /*  //console.log(error.response.data); */
      // throw new Error(error.response.data)
      return Promise.reject(error);
    },
  );

  
// exporta a conexão
export default api;
var token = null;

const setToken = cifrado => {
    token = `Bearer ${cifrado}`
}

const enviarToken = () => {
  console.log(token)  
  const config = {
      headers: {
        Authorization: token
      }
    }
    return config;
}
const exportar={
    setToken, 
    enviarToken
}
export default exportar;
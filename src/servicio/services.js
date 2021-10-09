var token = null;

const setToken = cifrado => {
    token = `Bearer ${cifrado}`
}

const enviarToken = () => { 
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
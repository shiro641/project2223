import Axios from 'axios'

export const t = () => {
  return Axios(
    {
      method: 'get',
      url: 'http://localhost:8000/api/test',
    }
  )
}
export const postAndGetCode = (xml, pic) => {
  return Axios(
    {
      method: 'post',
      url: 'http://localhost:8000/api/get_code',
      data: {
        'xml': xml,
        'path':pic,
      },
    }
  )
}
export const getPic = () => {
  return Axios(
    {
      method: 'get',
      url: 'http://localhost:8000/api/get_picture',
      responseType: 'arraybuffer',
    }
  )
}

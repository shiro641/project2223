import Axios from 'axios'

export const t = () => {
  return Axios(
    {
      method: 'get',
      url: 'http://localhost:8000/api/test',
    }
  )
}
export const postAndGetCode = (xml, pic, id) => {
  return Axios(
    {
      method: 'post',
      url: 'http://localhost:8000/api/get_code',
      data: {
        'xml': xml,
        'path':pic,
        'page_id':id
      },
    }
  )
}
export const getAssets = (filename) => {
  return Axios(
    {
      method:'post',
      url: 'http://localhost:8000/api/get_assets',
      data:{
        'filename':filename
      },
      responseType: 'arraybuffer',
    }
  )
}

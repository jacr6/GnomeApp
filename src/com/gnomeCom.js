
import fetchPostService from "./fetchhandler"


export async function gnomeCom() {
  // debugger;
  let data = {}
  let url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  return await fetchPostService("get", url, data, false)
    .then(result => {

     
      let response =  { state: true, data: result }

      console.log("DATA:", response)
      return response 
    })
    .catch(error => error)
}

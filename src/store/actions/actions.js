import axios from 'axios'

export const NAME = 'NAME'
export const IMAGE = 'IMAGE'
export const AUDIO = 'AUDIO'


// export const saveResult = ( data ) => {
//     return {
//         type: STORE_RESULT,
//         result: data
//     };
// }
export const postResult = (e, name,image,audio) => {
e.preventDefault()
let data = new FormData()
data.append('name',name )
data.append('image',image )
data.append('audio',audio )
   return dispatch=>{
    axios.post('http://localhost:5004/admin/post-ex',data)
   }
  
};
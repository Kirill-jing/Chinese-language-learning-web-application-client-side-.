import * as actiontype from './actions/actions'
const initialState = {
    name:'',
    image:undefined,
    audio:undefined
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
   case actiontype.NAME:
       return{
           ...state,
           name:action.name
       }
    case actiontype.IMAGE:
        return{
            ...state,
            image:action.image
        }
    case actiontype.AUDIO:
        return{
            ...state,
            audio:action.audio
        }
    }
            return state
}

export default reducer
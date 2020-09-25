import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { styled } from '@material-ui/core/styles';
import style from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink}  from 'react-router-dom'
import * as actionCreators from '../store/actions/actions'
import Button from '@material-ui/core/Button';


class Join extends Component{

    fileSelectedHandler=event=>{
        let file=event.target.files[0]
        this.setState({image:file})
      }

    render (){
    
        return(
 
<div>
 <form onSubmit={(event)=>this.props.onPostResult(event,this.props.name,this.props.image,this.props.audio)}>
   <input type='text' value ={this.props.name} onChange={event=>this.props.nameHandler(event.target.value)} ></input>
   <input type='file' name='image' onChange={event=>this.props.imageHandler(event.target.files[0])}></input>
   <input type='file' name='audio' onChange={event=>this.props.audioHandler(event.target.files[0])}></input>
   <button type='submit' ></button>
 </form>

</div>
       )

}
}
const mapStateToProps=state=>{
    console.log(state.ctr.name)
    console.log(state.ctr.image)
    console.log(state.ctr.audio)
    return{
        name:state.ctr.name,
        image:state.ctr.image,
        audio:state.ctr.audio
    }
}
const mapDispatchToProps=dispatch=>{
    return{

    onPostResult: (e,name,image,audio) => dispatch(actionCreators.postResult(e,name,image,audio)),
    nameHandler:(res)=>dispatch({type:'NAME',name:res}),
    imageHandler:(res)=>dispatch({type:'IMAGE',image:res}),
    audioHandler:(res)=>dispatch({type:'AUDIO',audio:res})
        
}}
export default connect(mapStateToProps,mapDispatchToProps)(Join)
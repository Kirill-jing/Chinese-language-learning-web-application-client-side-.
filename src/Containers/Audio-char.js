import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style,{keyframes,css} from "styled-components";
import { NavLink,BrowserRouter, Route, } from "react-router-dom";
import CharWord from './Char-word'
import HelpIcon from '@material-ui/icons/Help';
import ForwardIcon from '@material-ui/icons/Forward';
import Button from "@material-ui/core/Button";

class AudioChar extends Component {
    componentDidMount() {
        let tok = localStorage.getItem('token')
        this.props.onStoreCart(tok);
    }
  render() {
    let audio= this.props.cart.length>0 ? new Audio("http://localhost:5004/" + this.props.audio) :' '
    return (
        <div>
            <Button onClick={() => audio.play()}>play</Button>
            <input value={this.props.inputVal} onChange={e=>this.props.checkChar(e.target.value)} type='text'></input>
            <Button onClick={this.props.audCheck ? this.props.nextAudio:this.props.giveAnswer}>{this.props.audCheck ? <ForwardIcon/>:<HelpIcon/>}</Button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   cart:state.cart.cartData,
   count:state.train.audcount,
   inputVal:state.train.inputVal,
   audCheck:state.train.audCheck,
   audio:state.train.audio
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, cart) =>
    dispatch(actionCreators.saveCart(token, cart)),
    nextAudio:()=>dispatch({type:"NEXT_AUDIO"}),
    checkChar:val=>dispatch({type:'CHECK_CHAR' , val:val}),
    giveAnswer:()=>dispatch({type:"GIVE_ANSWER"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AudioChar);
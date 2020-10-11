import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style,{keyframes,css} from "styled-components";;
const moonHov = keyframes`
0% {
  opacity: 1;
}
50%{
  opacity:0
}
100% {
  opacity: 1
}
`

const animation = props =>
  css`
    ${moonHov};
  `

const AnimateDiv=style.div`
opacity:1;

  animation-name:${animation};
  animation-duration:1s;
  animation-fill-mode:forwards;



`

class Train extends Component {
  componentDidMount() {
    let tok = localStorage.getItem('token')
    this.props.onStoreCart(tok);
    }
    componentDidUpdate(){
      console.log('update')
    }
    
    
  render() {
    
    return (
        <AnimateDiv>
          <div>{this.props.cart.length>0 ?this.props.cart[this.props.count].name:' '}</div>
        {this.props.arr.map((el,i)=>{
          let check=el=='0.66'&&this.props.cart.length> 0  ? this.props.cart[this.props.count].name:' '
          return(
          <input value={this.props.cart.length> 0 && el!== '0.66'  ? 
            this.props.cart[Math.floor(Math.random() *
            this.props.cart.length)].name : check }  type='button'
              onClick={e=>this.props.checkAnswer(e.target.value)}>
          </input>
          )})}
          <button onClick={e=>{
            e.persist()
            window.setTimeout(()=>this.props.nextQuestion(),1000)}}>
          </button>
        </AnimateDiv>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state.train.answer)
  return {
   cart:state.cart.cartData,
   btn:state.train.btn,
   count:state.train.count,
   arr:state.train.arr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, cart) =>
    dispatch(actionCreators.saveCart(token, cart)),
    onStoreWord: (words) => dispatch(actionCreators.saveWords(words)),
    checkAnswer:(checkingWord)=>dispatch({type:"CHECK_ANSWER",check:checkingWord}),
    nextQuestion:()=>dispatch({type:"NEXT_QUESTION"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Train);
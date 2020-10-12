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
  margin:200px auto;
  width:500px;
  height:500px;
  display:flex;
  background-color:blue;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  opacity:1;
  animation-name:${props=>props.animate ? animation : ' ' };
  animation-duration:.8s;
  animation-fill-mode:forwards;
`
const Ques = style.div`

`
const Inputs = style.div`
  width:100px;
`
const CustomInp=style.input`

`
class Train extends Component {
  componentDidMount() {
    let tok = localStorage.getItem('token')
    this.props.onStoreCart(tok);
    }
  render() {
    return (
      <div>
        <AnimateDiv  animate={this.props.anim} >
          <Ques>{this.props.cart.length>0 ?this.props.cart[this.props.count].name:' '}
          </Ques>
          <Inputs>
          {this.props.arr.map((el,i)=>{
          let check=el==this.props.br&&this.props.cart.length> 0  ? this.props.cart[this.props.count].name:' '
          return(
          <CustomInp value={this.props.cart.length> 0 && el!== this.props.br  ? 
            this.props.cart[Math.floor(this.props.arr[i])].name : check }  type='button'
              onClick={e=>this.props.checkAnswer(e.target.value)}>
          </CustomInp>
          )})}
          </Inputs>
          <button onClick={e=>{
            this.props.toggleAnim()
            e.persist()
            window.setTimeout(()=>this.props.nextQuestion(),400) 
            }
            }>
          </button>
        </AnimateDiv>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
console.log(state.train.arr)
  return {
   cart:state.cart.cartData,
   btn:state.train.btn,
   count:state.train.count,
   arr:state.train.arr,
   anim:state.train.anim,
   answer:state.train.answer,
   br:state.train.br
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, cart) =>
    dispatch(actionCreators.saveCart(token, cart)),
    toggleAnim:()=>dispatch({type:"ANIM_FALSE"}),
    onStoreWord: (words) => dispatch(actionCreators.saveWords(words)),
    checkAnswer:(checkingWord)=>dispatch({type:"CHECK_ANSWER",check:checkingWord}),
    nextQuestion:()=>dispatch({type:"NEXT_QUESTION"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Train);
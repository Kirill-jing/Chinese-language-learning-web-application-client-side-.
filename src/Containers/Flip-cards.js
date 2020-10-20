import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style,{keyframes,css} from "styled-components";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from "@material-ui/core/Button";

const flip = keyframes`
  0% {
    transform:rotateY(0deg)
  }
  100% {
    transform:rotateY(180deg)
  }
`

const animation = props =>
  css`
    ${flip};
  `
  const opacity = keyframes`
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

const animOpacity = props =>
  css`
    ${opacity};
  `
const CustomBtn=style.button`
transform:${props=>props.rotate?`rotateY(180deg)`:''}
`
const MainDiv=style.div`
opacity:1;
animation-duration:.8s;
animation-fill-mode:forwards;
animation-name:${props=>props.opac ? animOpacity : ' '}
`
const CustomDiv=style.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:blue;
width:100px;
height:100px;
opacity:1;
animation-duration:.8s;
animation-fill-mode:forwards;
animation-name:${props=>props.animate ? animation : ' '}
`

class FlipCards extends Component {
  componentDidMount() {
    let history =this.props.history
    let tok = localStorage.getItem('token')
    this.props.onStoreCart(tok,history);
    }
     
  render() {
    return (
      <MainDiv opac={this.props.opac}>
        <CustomDiv animate={this.props.flipBtn}>
          <p>
            {this.props.inner ?
              (this.props.tranOrChar ?
              this.props.cart[this.props.count].nameTr :
              this.props.cart[this.props.count].name ) :
              (this.props.tranOrChar ? 
              this.props.cart[this.props.count].name :
              this.props.cart[this.props.count].nameTr) 
            }
          </p>
          <Button onClick={()=> this.props.changeDirection()}>
            <ImportExportIcon/>
          </Button>
          {this.props.inner ?
            <CustomBtn 
                rotate={this.props.inner}
                onClick={e=>{
                  this.props.animOpac()
                  e.persist()
                  window.setTimeout(()=>this.props.nextFlip(),400) 
               }}
            >next
            </CustomBtn> :
            <CustomBtn 
              onClick={e=>{
                this.props.flipCard()
                e.persist()
                window.setTimeout(()=>this.props.changeInner(),250)
            }}>
            check
            </CustomBtn>
          }
        </CustomDiv>
      </MainDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart:state.flip.cartData,
    btn:state.train.btn,
    count:state.flip.count,
    flipBtn:state.flip.flipBtn,
    inner:state.flip.inner,
    opac:state.flip.opac,
    tranOrChar:state.flip.tranOrChar
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, history) =>
    dispatch(actionCreators.saveCart(token, history)),
    onStoreWord: (words) => dispatch(actionCreators.saveWords(words)),
    animOpac:()=>dispatch({type:"ANIM_OPAC"}),
    flipCard:()=>dispatch({type:"FLIP_BTN"}),
    changeInner:()=>dispatch({type:'CHANGE_INNER'}),
    nextFlip:()=>dispatch({type:'NEXT_FLIP'}),
    changeDirection:()=>dispatch({type:"CHANGE_DIR"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FlipCards);
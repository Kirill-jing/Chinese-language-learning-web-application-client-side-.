import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style,{keyframes,css} from "styled-components";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

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
const CustomIcon = styled(VolumeUpIcon)({
  transform:props=>props.rotate?'rotateY(180deg)':'',
  color: 'FF0000 ',
  "&:hover": {
    color: "#B91A1A ",
  },
});
const CustomBtn=styled(Button)({
  transform:props=>props.rotate?'rotateY(180deg)':'',
})

const CustomP=style.p`
  font-size:26px;
  transform:${props=>props.rotate?'rotateY(180deg)':''}
`
const CustomImg=style.img`
width:17vw;
height:20vh;
border-radius:10px;
transform:${props=>props.rotate?'rotateY(180deg)':''}
`

const MainDiv=style.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  height:100%;
  margin-top:30vh;
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
  background-color:#7085C2 ;
  width:30vw;
  height:40vh;
  border-radius:15px;
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
    let audio = new Audio('http://localhost:5004/'+this.props.cart[this.props.count].audio);
    return (
      <MainDiv opac={this.props.opac}>
        <CustomDiv animate={this.props.flipBtn}>
          <CustomP rotate={this.props.inner}>
            {this.props.inner ?
              (this.props.tranOrChar ?
                this.props.cart[this.props.count].nameTr :
                this.props.cart[this.props.count].name ) :
              (this.props.tranOrChar ? 
                this.props.cart[this.props.count].name :
                this.props.cart[this.props.count].nameTr) 
            }
          </CustomP>
          <Button  onClick={() => audio.play()}>
            <CustomIcon rotate={this.props.inner} />
          </Button>
          <CustomImg rotate={this.props.inner} src={'http://localhost:5004/'+this.props.cart[this.props.count].image}></CustomImg>
          <Button onClick={()=> this.props.changeDirection()}>
            <ImportExportIcon/>
          </Button>
          {this.props.inner ?
            <CustomBtn
              variant='contained'
              color='secondary'
              rotate={this.props.inner}
              onClick={e=>{
                this.props.animOpac()
                e.persist()
                window.setTimeout(()=>this.props.nextFlip(),400) 
              }}
            >next
            </CustomBtn> :
            <CustomBtn 
              variant='contained'
              color='secondary'
              onClick={e=>{
                this.props.flipCard()
                e.persist()
                window.setTimeout(()=>this.props.changeInner(),250)
            }}>
            перевернуть
            </CustomBtn>
          }
        </CustomDiv>
      </MainDiv>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.flip.count)
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
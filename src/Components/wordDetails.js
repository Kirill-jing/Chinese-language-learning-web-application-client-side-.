import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Button from "@material-ui/core/Button";
import style from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import { styled } from "@material-ui/core/styles";

const Frame = style.div`
display:flex;
flex-direction:column;
width:600px;
height:600px;
background-color:white;
margin:100px auto 0 auto;
border-radius:10px;
align-items:center;
`;
const Type = style.div`
padding:10px 0 0 10px;
display:flex;
justify-content:flex-start;
width:100%;
font-size:24px;
color:red;
`;
const FootDiv = style.div`
text-align:center;
`;

const HigherDiv = style.div`
position:relative;
margin-top:50px;
text-align:center
`;
const CustomIcon = styled(VolumeUpIcon)({
  position: "absolute",
  display: "block",
  top: "0px",
  cursor: "pointer",
  color: "#8987A0",
  "&:hover": {
    width: "27px",
    height: "27px",
    color: "#2412D4 ",
  },
});
const Add = styled(AddCircleIcon)({
  color: "#8987A0",
  "&:hover": {
    color: "#2412D4 ",
  },
});
const Image = style.img`
width:190px;
height:130px;
border-radius:5px;
margin-left:30px;
`;
let wordDetails = (props) => {
  let audio = new Audio(props.audio);
  return (
    <Frame>
      <Type>
        <div>{props.type}</div>
      </Type>
      <Image src={props.image}></Image>
      <HigherDiv>
        <CustomIcon onClick={() => audio.play()} />
        <div>{props.name}</div>
        <div>{props.pinin}</div>
      </HigherDiv>
      <div>
        {props.nameTr}({props.nameType})
      </div>

      <FootDiv>
        <div>{props.example}</div>
        <div>{props.exampleTr}</div>
        <div>{props.examplePinin}</div>
      </FootDiv>
      <Button>
        <Add fontSize="large" />
      </Button>
    </Frame>
  );
};

export default wordDetails;

import React, { useState } from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Button from "@material-ui/core/Button";
import style from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import { styled } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

const DetailsHov = style.div`
cursor:pointer;
border-radius:10px;
&:hover {
  background-color:#EFEEF6 
};
display:flex;
flex-direction:row;
align-items:center;
`;

const Translation = style.div`
margin-right:120px
`;
const CustFlex = style.div`
display:flex;
flex-direction:row;
align-items:center;
font-size:22px;
justify-content:center;
`;
const WordPin = style.div`
dispaly:flex;
flex-direction:column;
margin:0 150px 0 10px;
`;
const CustomIcon = styled(VolumeUpIcon)({
  color: "#8987A0",
  "&:hover": {
    color: "#2412D4 ",
  },
});
const CustomDel = styled(DeleteIcon)({
  color: "#8987A0",
  "&:hover": {
    color: "red ",
  },
});
const Add = styled(AddCircleIcon)({
  color: "#8987A0",
  "&:hover": {
    color: "#2412D4 ",
  },
});
const Image = style.img`
width:100px;
height:70px;
border-radius:5px;
margin-left:30px
`;
let word = (props) => {
  let audio = new Audio(props.audio);
  return (
    <CustFlex>
      <Checkbox
        value={props.id}
        onChange={(e) => props.addCheck(e.target.value, e.target.checked)}
      ></Checkbox>
      <Button onClick={() => audio.play()}>
        {" "}
        <CustomIcon />
      </Button>
      <DetailsHov onClick={(id) => props.openModal(id)}>
        <WordPin>
          <div>{props.name}</div>
          <div>{props.pinin}</div>
        </WordPin>
        <Translation>{props.nameTr}</Translation>
      </DetailsHov>
      <div>{props.type}</div>
      <Image src={props.image}></Image>
      <Button onClick={props.addToLearn}>
        <Add fontSize="large" />
      </Button>
      {props.showDelete ? (
        <Button onClick={() => { 
          props.instDelete()
         return props.delete()}}>
          <CustomDel />
        </Button>
      ) : null}
    </CustFlex>
  );
};

export default word;

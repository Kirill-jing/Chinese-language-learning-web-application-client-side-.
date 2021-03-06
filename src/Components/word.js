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
width:400px;
white-space:nowrap;
text-align:center;
`;
const CustFlex = style.div`
margin-top:10px;
display:flex;
flex-direction:row;
align-items:center;
font-size:22px;
justify-content:space-between;
`;
const WordPin = style.div`
width:100px;
text-align:center;
dispaly:flex;
flex-direction:column;

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
const ButtonDel = styled(Button)({
  marginLeft: "2vw",
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
      {!props.showDelete ? (
        <Button onClick={props.addToLearn}>
          <Add fontSize="large" />
        </Button>
      ) : null}
      {props.showDelete ? (
        <ButtonDel
          onClick={() => {
            // props.instDelete()
            return props.delete();
          }}
        >
          <CustomDel />
        </ButtonDel>
      ) : null}
    </CustFlex>
  );
};

export default word;

import React, { Component } from "react";
import { connect } from "react-redux";
import { styled } from "@material-ui/core/styles";
import style from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import * as actionCreators from "../store/actions/actions";
import Button from "@material-ui/core/Button";

const CustomDiv = style.div`
  display:flex;
  flex-direction:column;
  width:200px;
  justify-content:center;
  margin:auto;
`;

class Admin extends Component {
  render() {
    return (
      <form
        onSubmit={(event) =>
          this.props.onPostResult(
            event,
            this.props.name,
            this.props.nameType,
            this.props.nameTr,
            this.props.pinin,
            this.props.example,
            this.props.exampleTr,
            this.props.examplePinin,
            this.props.type,
            this.props.image,
            this.props.audio
          )
        }
      >
        <CustomDiv>
          <label>Иероглиф</label>
          <input
            type="text"
            value={this.props.name}
            onChange={(event) => this.props.nameHandler(event.target.value)}
          ></input>
          <label>Часть речи</label>
          <input
            type="text"
            value={this.props.nameType}
            onChange={(event) => this.props.nameTypeHandler(event.target.value)}
          ></input>
          <label>Перевод</label>
          <input
            type="text"
            value={this.props.nameTr}
            onChange={(event) => this.props.nameTrHandler(event.target.value)}
          ></input>
          <label>пиньинь</label>
          <input
            type="text"
            value={this.props.pinin}
            onChange={(event) => this.props.pininHandler(event.target.value)}
          ></input>
          <label>Пример</label>
          <input
            type="text"
            value={this.props.example}
            onChange={(event) => this.props.exampleHandler(event.target.value)}
          ></input>
          <label>Перевод примера</label>
          <input
            type="text"
            value={this.props.exampleTr}
            onChange={(event) =>
              this.props.exampleTrHandler(event.target.value)
            }
          ></input>
          <label>Пинь инь примера</label>
          <input
            type="text"
            value={this.props.examplePinin}
            onChange={(event) =>
              this.props.examplePininHandler(event.target.value)
            }
          ></input>
          <label>HSK</label>
          <input
            type="text"
            value={this.props.type}
            onChange={(event) => this.props.typeHandler(event.target.value)}
          ></input>
          <input
            type="file"
            name="image"
            onChange={(event) => this.props.imageHandler(event.target.files[0])}
          ></input>
          <input
            type="file"
            name="audio"
            onChange={(event) => this.props.audioHandler(event.target.files[0])}
          ></input>
          <button type="submit"></button>
        </CustomDiv>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.ctr.name,
    nameType: state.ctr.nameType,
    nameTr: state.ctr.nameTr,
    pinin: state.ctr.pinin,
    example: state.ctr.example,
    exampleTr: state.ctr.exampleTr,
    examplePinin: state.ctr.examplePinin,
    type: state.ctr.type,
    image: state.ctr.image,
    audio: state.ctr.audio,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostResult: (
      e,
      name,
      nameType,
      nameTr,
      pinin,
      example,
      exampleTr,
      examplePinin,
      type,
      image,
      audio
    ) =>
      dispatch(
        actionCreators.postResult(
          e,
          name,
          nameType,
          nameTr,
          pinin,
          example,
          exampleTr,
          examplePinin,
          type,
          image,
          audio
        )
      ),
    nameHandler: (res) => dispatch({ type: "NAME", name: res }),
    nameTypeHandler: (res) => dispatch({ type: "NAME_TYPE", nameType: res }),
    nameTrHandler: (res) => dispatch({ type: "NAME_TR", nameTr: res }),
    pininHandler: (res) => dispatch({ type: "PININ", pinin: res }),
    exampleHandler: (res) => dispatch({ type: "EXAMPLE", example: res }),
    exampleTrHandler: (res) => dispatch({ type: "EXAMPLE_TR", exampleTr: res }),
    examplePininHandler: (res) =>
      dispatch({ type: "EXAMPLE_PININ", examplePinin: res }),
    typeHandler: (res) => dispatch({ type: "TYPE", hskType: res }),
    imageHandler: (res) => dispatch({ type: "IMAGE", image: res }),
    audioHandler: (res) => dispatch({ type: "AUDIO", audio: res }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);

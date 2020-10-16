import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style,{keyframes,css} from "styled-components";
import { NavLink,BrowserRouter, Route, } from "react-router-dom";
import CharWord from './Char-word'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { styled } from "@material-ui/core/styles";

const CustomSlider = styled(Slider)({
  width: "200px",
});

class Train extends Component {
  componentDidMount() {
    let tok = localStorage.getItem('token')
    this.props.onStoreCart(tok);
    }
  render() {
    return (
          <div>
              <NavLink to='/char-word'>rtgt4g</NavLink>
              <NavLink to='/audio-char'>rtgt4g</NavLink>
            <div>
              <Typography id="range-slider" gutterBottom>
                Temperature range
              </Typography>
              <CustomSlider
                value={this.props.sliderVal}
                min={0}
                step={1}
                onChange={this.props.handleChange}
                max={this.props.length}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
              />
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.train.arr)
  return {
   cart:state.cart.cartData,
   count:state.train.count,
   length:state.cart.length,
   sliderVal:state.train.sliderVal
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token
      , cart) =>
    dispatch(actionCreators.saveCart(token, cart)),
    handleChange:(val,e)=>dispatch({type:"HANDLE_SLIDER",e:e})
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Train);
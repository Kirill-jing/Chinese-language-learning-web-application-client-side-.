// import React ,{Component} from 'react'
// import {connect} from 'react-redux'
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import InputLabel from '@material-ui/core/InputLabel';
// import * as actionCreators from '../store/actions/actions'
// class Chat extends Component{
//   componentDidMount(){
//     this.props.onStoreResult();
//   }

// render (){
//   return(
//   <div>
//     <FormControl>
//       <InputLabel htmlFor="currency">Currency</InputLabel>
//       <NativeSelect
//           onChange={event=>this.props.cur1(event.target.value)}
//           inputProps={{
//           name: 'currency',
//           id: 'currency',
//         }}>
//         <option aria-label="None" value="" />
//         <option value='AUD'>Австралийский доллор</option>
//         <option value='AZN'>Азербайжанский </option>
//         <option value="BYN" >Белорусский рубль</option>
//         <option value="EUR" >Евро</option>
//         <option value="USD" >Американский доллар</option>
//       </NativeSelect>
//         <FormHelperText>Convert from </FormHelperText>
//     </FormControl>
//       <TextField
//         id="standard-number"
//         label="Number"
//         type="number"
//         onChange={event=>this.props.setyourVal(event.target.value)}
//         InputLabelProps={{
//           shrink: true,
//         }}/>
//     <FormControl>
//       <InputLabel htmlFor="currency">Currency</InputLabel>
//         <NativeSelect
//         onChange={event=>this.props.cur2(event.target.value)}
//         inputProps={{
//         name: 'currency',
//         id: 'currency',
//         }}>
//           <option aria-label="None" value="" />
//           <option value='AUD'>Австралийский доллор</option>
//           <option value='AZN'>Азербайжанский </option>
//           <option value="BYN" >Белорусский рубль</option>
//           <option value="EUR" >Евро</option>
//           <option value="USD" >Американский доллар</option>
//         </NativeSelect>
//         <FormHelperText>Convert to</FormHelperText>
//      </FormControl>
//         <Button variant="contained" color='secondary' onClick={()=>this.props.change()}>Convert</Button>
//         <div> RESULT = {this.props.final}</div>
//         </div>
//         )
//     }
// }
// const mapStateToProps=state=>{
//       return{
//           valute:state.res.valute,
//           valute2:state.res.valute2,
//           yourval:state.res.yourval,
//           final:state.res.final,
//           stored:state.res.data,
//       }
//   }
//   const mapDispatchToProps=dispatch=>{
//       return{
//       cur1:(cur1)=>dispatch({type:'CUR_1',val1:cur1}),
//       cur2:(cur2)=>dispatch({type:'CUR_2',val2:cur2}),
//       setyourVal:(your)=>dispatch({type:'YOURVAL',yourval:your}),
//       change:()=>dispatch({type:'CHANGE'}),
//       onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
//       }
//   }
// export default connect(mapStateToProps,mapDispatchToProps)(Chat)
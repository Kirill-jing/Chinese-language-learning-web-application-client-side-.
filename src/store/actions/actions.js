import axios from "axios";
export const PININ = "PININ";
export const NAME = "NAME";
export const NAME_TYPE = "NAME_TYPE";
export const IMAGE = "IMAGE";
export const AUDIO = "AUDIO";
export const STORE = "STORE";
export const EXAMPLE = "EXAMPLE";
export const EXAMPLE_TR = "EXAMPLE_TR";
export const EXAMPLE_PININ = "EXAMPLE_PININ";
export const NAME_TR = "NAME_TR";
export const TYPE = "TYPE";
export const OPEN = "OPEN";
export const CLOSE = "CLOSE";
export const HSK_4 = "HSK_4";
export const HSK_3 = "HSK_3";
export const USER_NAME = "USER_NAME";
export const EMAIL = "EMAIL";
export const PASSWORD = "PASSWORD";
export const AUTH = "AUTH";
export const CHECK_AUTH = "CHECK_AUTH";
export const LOG_NAME = "LOG_NAME";
export const LOG_PASSWORD = "LOG_PASSWORD";
export const STORE_CART = "STORE_CART";
export const ADD_CHECK = "ADD_CHECK";
export const REMOVE_CHECK = "REMOVE_CHECK";
export const CHANGE_THEME = "CHANGE_THEME";
export const DELETE_CART = "DELETE_CART";
export const ADD_DEFAULT = "ADD_DEFAULT";
export const INST_DELETE="INST_DELETE"
export const FIND_WORDS="FIND_WORDS"
export const FIND_CHAR = "FIND_CHAR"
export const CHECK_ANSWER="CHECK_ANSWER"
export const NEXT_QUESTION="NEXT_QUESTION"
export const ANIM_FALSE = "ANIM_FALSE"
export const ADD_CART_CHECK="ADD_CART_CHECK"

export const SET_PARAMS="SET_PARAMS"
export const postResult = (
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
) => {
  e.preventDefault();
  let data = new FormData();
  data.append("name", name);
  data.append("nameType", nameType);
  data.append("nameTr", nameTr);
  data.append("pinin", pinin);
  data.append("example", example);
  data.append("exampleTr", exampleTr);
  data.append("examplePinin", examplePinin);
  data.append("type", type);
  data.append("image", image);
  data.append("audio", audio);
  return (dispatch) => {
    axios.post("http://localhost:5004/admin/post-ex", data);
  };
};

export const save = (words) => {
  return {
    type: STORE,
    words: words,
  };
};

export const saveAuth = (token, userId) => {
  return {
    type: AUTH,
    isAuth: true,
    token: token,
    userId: userId,
  };
};

export const saveMyWords = (cart) => {
  return {
    type: STORE_CART,
    cart: cart,
  };
};

export const filterWord = (cartData) => {
  return {
    type: DELETE_CART,
    cartData: cartData,
  };
};

export const saveWords = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5004/admin/get-word")
      .then((words) => dispatch(save(words.data.words)));
  };
};

export const addToLearn = (id, token) => {
  let data = null;
  console.log(id);
  return (dispatch) => {
    console.log(token);
    axios.post(`http://localhost:5004/admin/add-cart/${id}`, data, {
      headers: {
        Authorization: "bearer " + token,
      },
    });
  };
};

export const signup = (e, username, email, password) => {
  e.preventDefault();
  let data = {
    username: username,
    email: email,
    password: password,
  };
  return (dispatch) => {
    axios.put("http://localhost:5004/user/signup", data).then((res) => {
      dispatch(saveAuth(res.data.token, res.data.userId));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      localStorage.setItem("expiryDate", expiryDate.toISOString());
    });
  };
};

export const login = (e, logName, logPassword) => {
  e.preventDefault();
  let data = {
    username: logName,
    password: logPassword,
  };
  return (dispatch) => {
    axios.post("http://localhost:5004/user/login", data).then((res) => {
      dispatch(saveAuth(res.data.token, res.data.id));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.id);
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      localStorage.setItem("expiryDate", expiryDate.toISOString());
    });
  };
};

export const saveCart = (token) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5004/admin/get-cart", {
        headers: {
          Authorization: "bearer " + token,
        },
      })
      .then((cart) => dispatch(saveMyWords(cart.data.cart)));
  };
};

export const addToCart = (checkedArr, token) => {
  let data = {
    checkedArr: checkedArr,
  };
  return (dispatch) => {
    axios.post("http://localhost:5004/admin//multiple-words", data, {
      headers: {
        Authorization: "bearer " + token,
      },
    });
  };
};

export const deleteCart = (cartData, token, id) => {
   let newData=cartData.filter(el=>el._id!=id)
  let data = null;
  return (dispatch) => {
    axios
      .post("http://localhost:5004/admin/delete-word/" + id, data, {
        headers: {
          Authorization: "bearer " + token,
        },
      }).then(res=>dispatch(filterWord(newData)))
  };
};

export const removeMultiple=(cartData,removeArr,token)=>{

  let data = {removeArr:removeArr}
  return dispatch=>{
    axios.post('http://localhost:5004/admin/delete-multwords',data,{
      headers: {
        Authorization: "bearer " + token,
      },
    })
  }
}
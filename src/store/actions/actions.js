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

export const saveWords = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5004/admin/get-word")
      .then((words) => dispatch(save(words.data.words)));
  };
};
export const addToLearn = (id) => {
  return (dispatch) => {
    axios.post(`http://localhost:5004/admin/add-cart/${id}`);
  };
};

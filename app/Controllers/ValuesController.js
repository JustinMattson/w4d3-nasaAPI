import ValuesService from "../Services/ValuesService.js";
import store from "../store.js";

//Private
function _draw() {
  let value = store.State.values;
  document.getElementById("drawStuff").innerHTML = value.Template;
}

//Public
console.log("hello from controller");
export default class ValuesController {
  constructor() {
    store.subscribe("values", _draw);
  }

  getPhoto() {
    console.log("request photos from controller");

    ValuesService.getPhoto();
  }
}

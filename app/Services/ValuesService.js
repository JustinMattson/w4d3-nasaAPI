import store from "../store.js";
import Value from "../Models/Value.js";

let apiKey = "apod?api_key=np7AWlK1hbNJWnarcDxVZ2l09BYzvQhariZhs87a";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  timeout: 8000,
});
console.log("hello from service");
class ValuesService {
  constructor() {
    this.getPhoto();
  }
  getPhoto() {
    _api
      .get(`${apiKey}`)
      .then((res) => {
        console.log(res.data);
        let results = new Value(res.data);
        store.commit("values", results);
      })
      .catch((e) => console.error(e));
  }
}

const service = new ValuesService();
export default service;

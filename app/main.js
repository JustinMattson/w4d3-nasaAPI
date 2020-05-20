import ValuesController from "./Controllers/ValuesController.js";

console.log("hello from main");
class App {
  valuesController = new ValuesController();
}

window["app"] = new App();

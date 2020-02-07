import { Component, OnInit } from "@angular/core";
import { Data } from "../helpers/data";
import { ENUMS } from "../helpers/enums";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  data = Data.page_test;
  ENUMS = ENUMS;
  form = {};

  ngOnInit() {
    this.getInputs();
  }

  isForm(type) {
    return ['input', 'select'].includes(type);
  }

  getInputs() {
    const { render } = this.data.body;
    render.filter(item => this.isForm(item.type))
      .map(item =>  this.form[item.value.name] = item.value.value);
  }


  isRender(render, type) {
    return render.type === type;
  }

  runFuncByString(functionNameString) {
    const namespaces = functionNameString.split(".");
    const functionName = namespaces.pop();
    let context = this.ENUMS;
    for (let line in namespaces) {
      context = context[namespaces[line]];
    }
    return context[functionName](this);
  }
}

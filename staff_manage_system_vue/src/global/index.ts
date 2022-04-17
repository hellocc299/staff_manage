import {App} from "vue"
import registerElement from "./register-element";
import registerSvg from "./register-svg"
import registerProperties from "./register-properties";

export function registerGlobel(app: App): void {
  app.use(registerElement)
  app.use(registerSvg)
  app.use(registerProperties)
}

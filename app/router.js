import { AboutController } from "./controllers/AboutController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { MoneyController } from "./controllers/MoneyController.js";
import { SnackController } from "./controllers/SnackController.js";

export const router = [
  {
    path: '',
    controller: [MoneyController, SnackController],
    view: null
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]
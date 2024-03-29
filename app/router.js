import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { VendingController } from "./controllers/VendingController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: VendingController,
    view: null
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]
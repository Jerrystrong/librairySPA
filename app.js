import { changeState, syncLib } from "./function/Dom.js";
import { Librairie } from "./function/librairie.js";

changeState()

const libFromPage=document.getElementById("lib")
const templateLib=libFromPage.content.cloneNode(true)
// syncLib(templateLib)
// lib=new Librairie(templateLib)
// lib.Append()
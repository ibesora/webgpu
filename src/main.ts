import { LightInputs, VertexLight } from "./light";
import { GridData } from "./vertex-data";
import $ from "jquery";
import "./site.css";

const cells = 100;
const data = GridData(cells, cells);
let li: LightInputs = {};
let isAnimation = true;
VertexLight(data.positions, li, isAnimation);

$("#id-radio input:radio").on("click", function () {
  let val = $('input[name="options"]:checked').val();
  if (val === "animation") isAnimation = true;
  else isAnimation = false;
  VertexLight(data.positions, li, isAnimation);
});

$("#btn-redraw").on("click", function () {
  li.color = $("#id-color").val()?.toString()?.split(",").map(Number) as any;
  li.ambientIntensity = parseFloat($("#id-ambient").val()?.toString()!);
  li.diffuseIntensity = parseFloat($("#id-diffuse").val()?.toString()!);
  li.specularIntensity = parseFloat($("#id-specular").val()?.toString()!);
  li.shininess = parseFloat($("#id-shininess").val()?.toString()!);
  li.specularColor = $("#id-scolor")
    .val()
    ?.toString()
    ?.split(",")
    .map(Number) as any;
  VertexLight(data.positions, li, isAnimation);
});

window.addEventListener("resize", function () {
  VertexLight(data.positions, li, isAnimation);
});

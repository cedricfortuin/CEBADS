import Scans from "./scripts/Scans.js";
import Model from "./scripts/Model.js";
import * as tf from '@tensorflow/tfjs';


// get the MRI images
const scans = new Scans();
const mri_scans = await scans.getMRIScans().then((value) => {
  return value;
});

console.dir(mri_scans);

const model = new Model();
const network = await model.setNetwork().then((value) => {
  return value;
});

console.log(network);
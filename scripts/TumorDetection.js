import Scans from "./Scans.js";

const scans = new Scans();
const mri_scans = await scans.getMRIScans().then(value => value);

console.dir(mri_scans);
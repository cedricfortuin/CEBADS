import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Scans {
  #data_folders;
  constructor() {
    const DATA_FOLDER = path.join(__dirname, '.', 'data');
    this.#data_folders = [
      path.join(DATA_FOLDER, 'Testing'),
      path.join(DATA_FOLDER, 'Training')
    ];
  }

  getMRIScans = async () => {
    let array = [];
    for (const folder of this.#data_folders) {
      const tumor_types = fs.readdirSync(folder);
      for (const value of tumor_types) {
        const mri_scans = fs.readdirSync(path.join(folder, value));
        array = array.concat(mri_scans);
      }
    }
    return array;
  }
}

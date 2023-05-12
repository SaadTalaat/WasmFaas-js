const path = require("path");

class FileSystemStore {
  baseDirectory = "faas_assets";
  fs = require("fs").promises;
  constructor() {
    const fsSync = require("fs");
    let baseDirExists = fsSync.existsSync(this.baseDirectory);
    if(!baseDirExists) {
      fsSync.mkdirSync(this.baseDirectory);
    }
  }

  async getItem(key) {
    let filename = path.basename(key);
    let uri = path.join(this.baseDirectory, filename);
    try {
      return await this.fs.readFile(uri);
    } catch(e) {
      return null;
    }
  }

  async setItem(key, bytes) {
    let filename = path.basename(key);
    let uri = path.join(this.baseDirectory, filename);
    return await this.fs.writeFile(uri, bytes);
  }
}

class BrowserStore {
  baseKey = "faas_assets";

  constructor() {}

  async getItem(key) {
    let filename = path.basename(key);
    let uri = path.join(this.baseKey, filename);
    return localStorage.getItem(uri);
  }

  async setItem(key, bytes) {
    let filename = path.basename(key);
    let uri = path.join(this.baseKey, filename);
    return localStorage.setItem(uri, bytes);
  }

}

module.exports.FileSystemStore = FileSystemStore;
module.exports.BrowserStore = BrowserStore;

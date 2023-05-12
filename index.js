const WasmFaasClient = require("./lib/client");
const {FileSystemStore, BrowserStore} = require("./lib/store");

module.exports.WasmFaasClient = WasmFaasClient;
module.exports.FileSystemStore = FileSystemStore;
module.exports.BrowserStore = BrowserStore;

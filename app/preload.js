const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderer", {
  on: (event, data) => ipcRenderer.on(event, data),
});

contextBridge.exposeInMainWorld("actions", {
  fullscreen: () => ipcRenderer.send("buttons", "full"),
  close: () => ipcRenderer.send("buttons", "close"),
  minimize: () => ipcRenderer.send("buttons", "minimize"),
  maximize: () => ipcRenderer.send("buttons", "maximize"),
  top: () => ipcRenderer.send("buttons", "top"),
  topmac: () => ipcRenderer.send("buttons", "topmac"),
  search: (args) => ipcRenderer.send("search", args)
});

contextBridge.exposeInMainWorld("controls", {
  togglePlay: () => ipcRenderer.send("toggle-play", ""),
  toggleShuffle: () => ipcRenderer.send("toggle-shuffle", ""),
  cycleRepeat: (status) => ipcRenderer.send("cycle-repeat", status)
});

contextBridge.exposeInMainWorld("check", {
  type: (type) => ipcRenderer.send("control", type),
});

contextBridge.exposeInMainWorld("doesSong", {
  haveVideo: (arg) => ipcRenderer.send("isvideo", arg),
});

contextBridge.exposeInMainWorld("playing", {
  init: () => ipcRenderer.send("init-playing", ""),
  update: () => ipcRenderer.send("update-playing"),
});

contextBridge.exposeInMainWorld("turnOff", {
  video: () => ipcRenderer.send("webdown", ""),
});

contextBridge.exposeInMainWorld("reset", {
  signin: () => ipcRenderer.send("auth-server", "sign-in"),
});

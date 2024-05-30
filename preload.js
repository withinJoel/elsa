const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getCPUInfo: () => ipcRenderer.invoke('get-cpu-info'),
  shutdown: () => ipcRenderer.invoke('shutdown-system'),
  restart: () => ipcRenderer.invoke('restart-system'),
  signout: () => ipcRenderer.invoke('sign-out-system'),
  sleep: () => ipcRenderer.invoke('sleep-system'),
  envvariables: () => ipcRenderer.invoke('open-env-variables'),
  openterminal: () => ipcRenderer.invoke('open-cmd'),
  opensetting: () => ipcRenderer.invoke('open-settings'),
  checksystemupdate: () => ipcRenderer.invoke('check-system-update'),
});
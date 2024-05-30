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
  installedapplications: () => ipcRenderer.invoke('get-installed-programs'),
  screenkeyboard: () => ipcRenderer.invoke('open-screen-keyboard'),
  systemmute: () => ipcRenderer.invoke('mute-audio'),
  systemunmute: () => ipcRenderer.invoke('unmute-audio'),
  systemlighttheme: () => ipcRenderer.invoke('switch-to-light-theme'),
  systemdarktheme: () => ipcRenderer.invoke('switch-to-dark-theme'),
  reportbug: () => ipcRenderer.invoke('report-bug'),
  systemscreenshot: () => ipcRenderer.invoke('take-screenshot'),
  opennotepad: () => ipcRenderer.invoke('open-notepad'),
  openbrowser: () => ipcRenderer.invoke('open-browser'),
  opentaskmanager: () => ipcRenderer.invoke('open-taskmanager'),
});
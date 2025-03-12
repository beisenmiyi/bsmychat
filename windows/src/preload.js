const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("electronAPI", {
    send: (channel, data) => {
        const validChannels = ["closeWindow", "maximizeWindow", "minimizeWindow"];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    }
})
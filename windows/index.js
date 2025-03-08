import { BrowserWindow, app } from "electron";

let window;
function createWindow() {
    window = new BrowserWindow({
        width: 600,
        height: 400,
        frame: false
    });
    window.loadURL('http://localhost:5173/pages/Login/index.html');
}

app.whenReady().then(() => {
    createWindow();
});
const {app,BrowserWindow} = require('electron')

app.on('ready',() => {
    let mainOption = {
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntergration: true,
            webSecurity: false
        }
    }
    let mainWindow = new BrowserWindow(mainOption)
    mainWindow.loadFile('../build/index.html')
})
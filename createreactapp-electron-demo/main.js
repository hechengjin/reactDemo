// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const pkg = require('./package.json')

// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  
  //加载应用----- electron-quick-start中默认的加载入口
    // mainWindow.loadURL(url.format({
    // pathname: path.join(__dirname, 'index.html'),
    // protocol: 'file:',
    // slashes: true
    // }))

    if(pkg.DEV) {
        mainWindow.loadURL('http://localhost:3000/');
    }
    else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, './build/index.html'), 
            protocol: 'file:', 
            slashes: true }))
    }

    
 
 // 加载应用----适用于 react 项目
 //

  // Open the DevTools.
   mainWindow.webContents.openDevTools()

  // 关闭window时触发下列事件.
 mainWindow.on('closed', function () {
    mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

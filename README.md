# 工程初始化方法

## createReactApp --创建的端口在3000的Web应用
使用create-react-app是因为
React技术依赖于一个很庞大的技术栈，比如，转译JavaScript代码需要用到Babel，模块打包工具又要用到Webpack，定制build过程需要grunt或者gulp……这些技术栈都需要各自的配置文件，还没有开始写一行React相关代码，开发人员就已经被各种技术名词淹没。

React的创建者Facebook提供了一个快速开发React应用的工具，名叫create-react-app，这个工具的目的是将开发人员从配置工作中解脱出来，无需过早关注这些技术栈细节，通过创建一个已经完成基本配置的应用，让开发者快速开始React应用的开发，并且提供了热调试环境。

create-react-app是一个通过npm发布的安装包，在确认Node.js和npm安装好之后，命令行中执行下面的命令安装create-react-app:
npm install --global create-react-app

或使用官方创建一个新项目，如下：
创建一个新的单页应用程序
```
npx create-react-app createreactappdemo
cd createreactappdemo
npm start
```

要求：
Node> = 10.16和npm> = 5.6
npx is package runner tool that comes with npm 5.2+

### 相关问题

1.工程名称不能含有大写字母 createreactappdemo
2.node不兼容
@typescript-eslint/eslint-plugin@4.15.2: The engine "node" is incompatible with this module. Expected version "^10.12.0 || >=12.0.0". Got "11.11.0"

查看create-react-app版本
```
npx create-react-app -V
4.0.3
npx create-react-app --help
```

执行下面命令

```
yarn config set ignore-engines true
```

虽然项目创建成功了，但依然会提示
```
You are running Node v11.11.0.
Create React App requires Node ^10.12.0 || >=12.0.0 or higher.
Please update your version of Node.
```
升级一下node版本
查看可安装的版本
```
nvm list available
|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|   15.11.0    |   14.16.0    |   0.12.18    |   0.11.16    |
|   15.10.0    |   14.15.5    |   0.12.17    |   0.11.15    |
|    15.9.0    |   14.15.4    |   0.12.16    |   0.11.14    |
|    15.8.0    |   14.15.3    |   0.12.15    |   0.11.13    |
|    15.7.0    |   14.15.2    |   0.12.14    |   0.11.12    |
|    15.6.0    |   14.15.1    |   0.12.13    |   0.11.11    |
|    15.5.1    |   14.15.0    |   0.12.12    |   0.11.10    |
|    15.5.0    |   12.21.0    |   0.12.11    |    0.11.9    |
|    15.4.0    |   12.20.2    |   0.12.10    |    0.11.8    |
|    15.3.0    |   12.20.1    |    0.12.9    |    0.11.7    |
|    15.2.1    |   12.20.0    |    0.12.8    |    0.11.6    |
|    15.2.0    |   12.19.1    |    0.12.7    |    0.11.5    |
|    15.1.0    |   12.19.0    |    0.12.6    |    0.11.4    |
|    15.0.1    |   12.18.4    |    0.12.5    |    0.11.3    |
|    15.0.0    |   12.18.3    |    0.12.4    |    0.11.2    |
|   14.14.0    |   12.18.2    |    0.12.3    |    0.11.1    |
|   14.13.1    |   12.18.1    |    0.12.2    |    0.11.0    |
|   14.13.0    |   12.18.0    |    0.12.1    |    0.9.12    |
|   14.12.0    |   12.17.0    |    0.12.0    |    0.9.11    |
|   14.11.0    |   12.16.3    |   0.10.48    |    0.9.10    |
```
这里安装一下14.16.0
```
nvm install 14.16.0
```
查看本地版本和使用情况
```
nvm list
    14.16.0
  * 11.11.0 (Currently using 64-bit executable)
```
然后切换到14.16.0
```
nvm use 14.16.0
```
然后删除原来创建的项目，再重新执行一次
```
npx create-react-app createreactappdemo
cd createreactappdemo
npm start
```
提示
```
'npx' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```
找到nvm管理的node安装目录
```
%appdata%\nvm\v14.16.0
```
发现下面没有npm npx命令，应该是下载失败了
删除上面目录后，重新安装
```
nvm install 14.16.0
```
果然还是下载失败
```
Downloading npm version 6.14.11... Error while downloading https://github.com/npm/cli/archive/v6.14.11.zip - Get https://github.com/npm/cli/archive/v6.14.11.zip: net/http: TLS handshake timeout
```
设置nvm源
```
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```
安装成功
```
λ nvm install 14.16.0
Downloading node.js version 14.16.0 (64-bit)...
Complete
Downloading npm version 6.14.11... Complete
Installing npm v6.14.11...

Installation complete. If you want to use this version, type

nvm use 14.16.0
```

然后删除原来创建的项目，再重新执行一次
```
npx create-react-app createreactappdemo
cd createreactappdemo
npm start
```
终于成功了
```
λ npx create-react-app createreactappdemo
npx: 67 安装成功，用时 2.738 秒

Creating a new React app in E:\github\hechengjin\reactDemo\createreactappdemo.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


> core-js@2.6.12 postinstall E:\github\hechengjin\reactDemo\createreactappdemo\node_modules\babel-runtime\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js@3.9.1 postinstall E:\github\hechengjin\reactDemo\createreactappdemo\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.9.1 postinstall E:\github\hechengjin\reactDemo\createreactappdemo\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"


> ejs@2.7.4 postinstall E:\github\hechengjin\reactDemo\createreactappdemo\node_modules\ejs
> node ./postinstall.js

+ react-scripts@4.0.3
+ react-dom@17.0.1
+ cra-template@1.1.2
+ react@17.0.1
added 1918 packages from 731 contributors in 101.81s

130 packages are looking for funding
  run `npm fund` for details


Installing template dependencies using npm...
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @testing-library/react@11.2.5
+ @testing-library/jest-dom@5.11.9
+ @testing-library/user-event@12.8.1
+ web-vitals@1.1.0
added 29 packages from 78 contributors in 21.247s

130 packages are looking for funding
  run `npm fund` for details

Removing template package using npm...

npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

removed 1 package in 7.029s

130 packages are looking for funding
  run `npm fund` for details


Success! Created createreactappdemo at E:\github\hechengjin\reactDemo\createreactappdemo
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd createreactappdemo
  npm start

Happy hacking!
```
启动Web应用
```
cd createreactappdemo
npm start

Compiled successfully!

You can now view createreactappdemo in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.40.105:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

更多参考：
https://reactjs.org/docs/create-a-new-react-app.html

## createreactapp-electron --纯前端项目整合Electron
### 1.创建Web项目
```
npx create-react-app createreactapp-electron-demo
cd createreactapp-electron-demo
npm start
```
### 2.Web项目转Elect项目
安装electron
```
npm install -save electron
```
安装失败
```
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! electron@12.0.0 postinstall: `node install.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the electron@12.0.0 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2021-03-09T06_10_16_738Z-debug.log
```
查看下npm源
```
 npm config list
; cli configs
metrics-registry = "https://registry.npm.taobao.org/"
scope = ""
user-agent = "npm/6.14.11 node/v14.16.0 win32 x64"

; userconfig C:\Users\Administrator\.npmrc
home = "https://npm.taobao.org"
registry = "https://registry.npm.taobao.org/"

; node bin location = C:\Program Files\nodejs\node.exe
; cwd = E:\github\hechengjin\reactDemo\createreactapp-electron-demo
; HOME = C:\Users\Administrator
; "npm config ls -l" to show all defaults.
```
已经是taobao源了
再修改下electron_mirror,方法如下：
1.修改npm配置
```
npm config edit
```
2.在打开的文件中增加下面一行配置，然后保存关闭
```
electron_mirror=https://npm.taobao.org/mirrors/electron/
```
3.重新下载包（建议先把node_modules中的electron文件夹删除再重新下载）
```
npm install
```
这样下载速度就快了
```
Downloading electron-v12.0.0-win32-x64.zip: [=========================] 100% ETA: 0.0 seconds
added 87 packages from 96 contributors in 96.274s
```

淘宝镜像地址下载如下：
https://npm.taobao.org/mirrors/electron/12.0.0/electron-v12.0.0-win32-x64.zip

官方下载地址如下：
https://github.com/electron/electron/releases/download/v12.0.0/electron-v12.0.0-win32-x64.zip

在package.json文件中增加启动命令
```
 "scripts": {
   ....,
    "electron-start": "electron ."
  },
```

在createreactapp-electron-demo项目的根目录（不是src目录）创建Electron的启动文件main.js（main.js文件可以直接拷贝electron-quick-start仓库里的main.js）
在createreactapp-electron-demo项目中的package.json文件中增加main字段，值为"main.js"
```
{
  "name": "createreactapp-electron-demo",
  ...
  "main": "main.js",
}
```

对代码进行相应修改，注意url的加载方法变化

# 启动react项目
```
npm start
```
# 启动electron
```
npm run electron-start
```
支持热调试，当你修改代码后，桌面应用也将会重新更新。

如果加载页面方法是这样的
```
 mainWindow.loadURL('http://localhost:3000/');
```
那么不启动react项目,启动electron则是空白

所以加载路径改为
```
mainWindow.loadURL(url.format({
pathname: path.join(__dirname, './build/index.html'), protocol: 'file:', slashes: true }))
```
然后运行如下两个命令
```
npm run build
npm run electron-start
```
发现还是空白
在文件package.json中添加字段homepage，如下：
```
{
 ...
  "main": "main.js",
  "homepage": ".",
  ...
}
```

原因：默认情况下，homepage是http://localhost:3000，build后，所有资源文件路径都是/static，而Electron调用的入口是file:协议，/static就会定位到根目录去，所以找不到静态文件。在package.json文件中添加homepage字段并设置为"."后，静态文件的路径就变成了相对路径，就能正确地找到了。

这样要看修改效果每次都要 build,如果开发环境可以直接加载 localhost:3000 这个地址，就是要启动两个终端

但这两种环境切换比较麻烦，直接在package.json中添加DEV字段做标志，代码中动态加载即可
```
{
  ...
  "homepage":".",
  "DEV":false,
  ...
}
```

打包
安装electron-packager
```
npm install electron-packager --save-dev
```

electron-packager命令
```
electron-packager <location of project> <name of project> <platform> <architecture> <electron version> <optional options>
```
location of project: 项目的本地地址，此处我这边是 ~/createreactapp-electron-demo
name of project: 项目名称，此处是 createreactapp-electron-demo
platform: 打包成的平台 --all
architecture: 使用 x86 还是 x64 还是两个架构都用
electron version: electron 的版本

在 package.json 文件的在 scripts 中加上如下代码：
```
"package": "electron-packager ./build createreactapp-electron-demo --all --out ~/ --electron-version 12.0.0"
```

开始打包
npm run package
# 工程初始化方法
## createReactApp --创建的端口在3000的Web应用
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


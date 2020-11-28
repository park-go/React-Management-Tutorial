[유튜브]
<npm 설치>

npm install -g create-react-app

create-react-app management

<처음 git 주소 커밋할 때>
git remote add origin https://github.com/park-go/React-Management-Tutorial.git

git push --set-upstream origin master

<Material UI>
npm install @material-ui/core

<node.js express 서버 설치>
npm install nodemon
npm install -g nodemon
npm install express
npm install -g express

...터미널에서 node server.js가 진행 안 될 때:
npm uninstall nodemon
npm uninstall -g nodemon
npm install
node server.js

yarn dev -> client와 server 동시 연결하는 명령어 dev는 package.json에서 정의함

<5000번(server)의 데이터를 포트(client) 3000로 옮겨 오길 위해서는 프록시 설정해야 한다 >

1.  npm install http-proxy-middleware --save 설치
2.  src/setupProxy.js 파일 생성 및 수정(신 버전이 아닌 구 버전으로 적용해야 함, 아래 소스!)
    const proxy = require('http-proxy-middleware');

    module.exports = function(app) {
    app.use(
    '/api',
    proxy({
    target: 'http://localhost:5000',
    changeOrigin: true,
    })
    );
    };

3.  App.js에서 class App내에 state와 componentDidMount를 설정.
    state는 변할 수 있는 값이기 때문에 쓰고, componentDidMount는 서버에서 데이터를 가져오기 위해서 써야함

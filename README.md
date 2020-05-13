# stream-client
Client of Video Stream React Redux App

[DEMO](https://tom2kota.github.io/stream-client/)


--------
Status of [ACTION](https://github.com/tom2kota/stream-client/actions) script (Deployment):

![React_App_Deploy_to_gh-pages_CI](https://github.com/tom2kota/stream-client/workflows/React_App_Deploy_to_gh-pages_CI/badge.svg)

--------

## Node.js & npm install


```
npm install npm -g
npm update
npm i axios react-redux redux redux-form redux-thunk react-router-dom 
npm audit fix
```

[How To Install Node.js on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

```
cd ~
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
nano nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
node -v
curl -L https://www.npmjs.com/install.sh | sh
npm_config_prefix=/some/path sh install.sh
npm -v
```

node -v && npm -v
```
v14.2.0
6.14.4
```



## Auth:

1) [new Google APIs project](https://console.developers.google.com/projectcreate)

2) [setup OAuth client](https://console.developers.google.com/apis/credentials/oauthclient)

3) import Google API library (public/index.html): <script src="https://apis.google.com/js/api.js" ></script>

4) initialize Google API library (components/GoogleAuth.js):

```
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                        clientId: '***********-*****************************.apps.googleusercontent.com',
                        scope: 'email'
                    }
                )
            }
        )
    }
 ```
--------

## Redux DevTools

1) [documentation](http://extension.remotedev.io/) & [repo](https://github.com/zalmoxisus/redux-devtools-extension)

2) [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) & [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

3) src/index.js

```
import {createStore, applyMiddleware, compose} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);
```

3) Live demos to use the extension with:

    - https://tom2kota.github.io/stream-client/
    - http://zalmoxisus.github.io/examples/counter/
    - https://github.com/zalmoxisus/redux-devtools-extension/tree/master/examples
    - http://redux-form.com/6.5.0/examples/simple/
    - https://chvin.github.io/react-tetris/
    
4) Create debug session & refresh the page:
    
    - https://tom2kota.github.io/stream-client/?debug_session=xxx
    - https://tom2kota.github.io/stream-client/?debug_session=another-session


------------

#### references:

[Samples / Authorizing and Making Authorized Requests](https://github.com/google/google-api-javascript-client/blob/master/docs/samples.md#authorizing-and-making-authorized-requests) 

[Methods and Classes / Google API Client LIbrary for Javascript](https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md)

[React Router Training](https://reacttraining.com/react-router/core/guides/quick-start)

[Redux Form Synchronous Validation Example](https://redux-form.com/8.3.0/examples/syncvalidation/)

[Deep Space House](https://youtu.be/P15NtXKEM-w?t=4427)

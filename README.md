# stream-client
Client of Video Stream React Redux App

[DEMO](https://tom2kota.github.io/stream-client/)


--------
Status of [ACTION](https://github.com/tom2kota/stream-client/actions) script (Deployment):

![React_App_Deploy_to_gh-pages_CI](https://github.com/tom2kota/stream-client/workflows/React_App_Deploy_to_gh-pages_CI/badge.svg)

--------

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

2) 

#### references:

[Samples / Authorizing and Making Authorized Requests](https://github.com/google/google-api-javascript-client/blob/master/docs/samples.md#authorizing-and-making-authorized-requests) 

[Methods and Classes / Google API Client LIbrary for Javascript](https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md)

---------

[Deep Space House](https://youtu.be/P15NtXKEM-w?t=4427)

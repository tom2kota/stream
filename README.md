# stream
Video Stream React Redux App

--------

1) [new Google APIs project](https://console.developers.google.com/projectcreate)

2) [setup OAuth client](https://console.developers.google.com/apis/credentials/oauthclient)

3) import Google API library (public/index.html): <script src="https://apis.google.com/js/api.js" ></script>

4) initialize Google API library (components/GoogleAuth.js):

```
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                        clientId: '***********-***********************************.apps.googleusercontent.com',
                        scope: 'email'
                    }
                )
            }
        )
    }
 ```
--------

[Deep Space House](https://youtu.be/P15NtXKEM-w?t=4427)

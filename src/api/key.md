Create project & OAuth web-client:
https://console.developers.google.com/apis/credentials/oauthclient/

OAuth 2.0. web-client ID: 
'696355598576-sl92vso0q6frq5s5q1aq1q8hkrb760nn.apps.googleusercontent.com'

import & init Google API library: 
<script src="https://apis.google.com/js/api.js"></script>

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                        clientId: '696355598576-sl92vso0q6frq5s5q1aq1q8hkrb760nn.apps.googleusercontent.com',
                        scope: 'email'
                    }
                )
            }
        )
    }
    
Authorizing and Making Authorized Requests:
https://github.com/google/google-api-javascript-client/blob/master/docs/samples.md#authorizing-and-making-authorized-requests


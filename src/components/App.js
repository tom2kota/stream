import React from "react";
// import {HashRouter, Link, Route} from "react-router-dom";
import {BrowserRouter, Link, Route} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header"

const App = () => (
    <div className="ui container">
        {/*<HashRouter basename="/">*/}
        {/*    <div>*/}
        {/*        <Header/>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <Route path="/" exact component={StreamList}/>*/}
        {/*        <Route path="/streams/new" component={StreamCreate}/>*/}
        {/*        <Route path="/streams/edit" component={StreamEdit}/>*/}
        {/*        <Route path="/streams/delete" component={StreamDelete}/>*/}
        {/*        <Route path="/streams/show" component={StreamShow}/>*/}
        {/*        <hr/>*/}
        {/*        <ul>*/}
        {/*            <li><Link to="/">List of Streams</Link></li>*/}
        {/*            <li><Link to="/streams/new">Create New Stream</Link></li>*/}
        {/*            <li><Link to="/streams/edit">Edit Stream</Link></li>*/}
        {/*            <li><Link to="/streams/delete">Delete Stream</Link></li>*/}
        {/*            <li><Link to="/streams/show">Show Stream</Link></li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*</HashRouter>*/}

        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Header/>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" component={StreamCreate}/>
                <Route path="/streams/edit" component={StreamEdit}/>
                <Route path="/streams/delete" component={StreamDelete}/>
                <Route path="/streams/show" component={StreamShow}/>
            </div>

            <div>
                <hr/>
                <ul>
                    <li><Link to="/">List of Streams</Link></li>
                    <li><Link to="/streams/new">Create New Stream</Link></li>
                    <li><Link to="/streams/edit">Edit Stream</Link></li>
                    <li><Link to="/streams/delete">Delete Stream</Link></li>
                    <li><Link to="/streams/show">Show Stream</Link></li>
                </ul>
            </div>
        </BrowserRouter>
    </div>
)

export default App

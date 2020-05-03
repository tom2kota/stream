import React, {Component} from "react";
import {reduxForm} from "redux-form";

class StreamDelete extends Component {

    render() {
        return (
            <div>StreamDelete</div>
        )
    }
}


export default reduxForm({
    form: 'StreamDelete'
})(StreamDelete)

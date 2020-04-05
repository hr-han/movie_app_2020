import React from "react";
import { readdir } from "fs";


class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        console.log(this.props);
        if (location.state === undefined) {
            history.push("/");

        }
        
    }
    render() {
        const { location:{state} } = this.props;
        if (state) {
            return <span>{state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail
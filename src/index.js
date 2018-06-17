import React from "react";
import ReactDOM from "react-dom";

/* const Index = () => {
    return <div>is it still running </div>;
};
 */
class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};
// change code below this line
const Camper = (props) => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}
Camper.defaultProps = { name: 'CamperBot' };
//Camper.propTypes = {
//    name: PropTypes.string.isRequired
//};
/* ReactDOM.render(<Index />, document.getElementById("index")); */
ReactDOM.render(<CampSite />, document.getElementById("index"));


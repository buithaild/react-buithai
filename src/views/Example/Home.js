import React from "react";
import { withRouter } from "react-router";
import color from "../HOC/color";
import logo from '../../assets/images/logo-mu.png';

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000);
    }
    render() {
        console.log('>>> check props: ', this.props)
        return (
            <>
                <div>
                    Hello world from Homepage with Bui Thai
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
            </>
        )
    }

}

// export default withRouter(Home);
export default color(Home);

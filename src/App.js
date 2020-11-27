import React from 'react'
import VpnList from "./components/vpnList/VpnList";
import Vpn from "./components/vpn/Vpn";
import {Route, Switch, withRouter, Redirect} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/vpn-services' component={VpnList}/>
                <Route exact path='/vpn-services/:id' component={Vpn}/>
                <Redirect from="/" to="/vpn-services"></Redirect>
            </Switch>
        </div>
    );
}

export default withRouter(App);

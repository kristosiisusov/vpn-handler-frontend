import React from 'react'
import {Link} from "react-router-dom";

class VpnList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: []
        }
    }

    componentDidMount() {
        fetch(`/vpn-services`)
            .then(response => response.json())
            .then((response) => {
                this.setState({items: response});
            })
            .then((error) => {
                this.setState({false: true});
                this.setState({error});
            })
    }

    render() {
        const {error, items} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.vpnServiceId}>
                            <Link to={`/vpn-services/${item.vpnServiceId}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default VpnList;

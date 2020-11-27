import React from 'react'


class Vpn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            item: []
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params
        fetch(`/vpn-services/${id}`)
            .then(response => response.json())
            .then((response) => {
                this.setState({item: response});
            })
            .then((error) => {
                this.setState({false: true});
                this.setState({error});
            })
    }

    render() {
        const {error, item} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else {
            return (
                <ul>
                    <li> {item.title}</li>
                    <li> {item.expirationDate}</li>
                    <li> {item.password}</li>
                </ul>
            );
        }
    }
}

export default Vpn;

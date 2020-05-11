import React from 'react';

class CardsWithData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(
                result =>
                    this.setState({
                        error: null,
                        isLoaded: true,
                        items: result
                }))
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log(this.state);
        if (error) {
            return <div>Error : {error.message}</div>;
        } else {
            return (
                !isLoaded ? <div>I'm totally loading right now</div> :
                <div>
                    <p style={{ background: 'gray', color: 'white' }}>cardswithdata.js</p>
                    <ul>
                        {items.map(items => (
                            <li key = {items.id}>
                                {items.name} {items.email}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default CardsWithData;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Conatainer from 'react-bootstrap/Container';
import { CardDeck } from 'react-bootstrap';

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
        if (error) {
            return <div>Error : {error.message}</div>;
        } else {
            return (
                !isLoaded ? <div>I'm totally loading right now</div> :
                <div>
                    <p style={{ background: 'gray', color: 'white' }}>cardswithdata.js</p>
                    <Conatainer>
                        <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                            {items.map(items => (
                                <Card key = {items.id} style={{ flex: 1}}>
                                    <Card.Header>{items.name}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Email: {items.email}</Card.Title>
                                                <Card.Text>
                                                    Text will be here
                                                </Card.Text>
                                        </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Phone: {items.phone}</small>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </CardDeck>
                    </Conatainer>
                </div>
            );
        }
    }
}

export default CardsWithData;
import React, {Component} from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

class thisCardDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return(
            <React.Fragment>
                <h2 style={{ background: 'gray', color: 'white' }}>This is a CardDeck</h2>
                <br></br>
                <CardDeck>
                    <Card>
                        <Card.Header>Card Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        <li>Header</li>
                                        <li>Title</li>
                                        <li>No top image</li>
                                        <li>This content is a little bit longer to see what 
                                            a longer card description would look like</li>
                                    </Card.Text>
                            </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" data-src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Text>
                                <li>NO Header</li>
                                <li>100x160 placeholder image</li>
                                <li>NO Title</li>
                                <li>This content has a short description</li>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card border="danger">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                        <li>'Danger' border</li>
                                        <li>NO Header</li>
                                        <li>Title</li>
                                        <li>This content has a short description</li>
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card bg="Light">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                        <li>'Light' background</li>
                                        <li>NO Header</li>
                                        <li>Title</li>
                                        <li>This content has a short description</li>
                                        <li>NO footer</li>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>   
            </React.Fragment>
        )
    }
}

export default thisCardDeck;
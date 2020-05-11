import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class thisCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return(
            <React.Fragment>
                <p style={{ background: 'gray', color: 'white' }}>card.js</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" data-src="holder.js/100px160" />
                    <Card.Body>
                        Chris Eichhorn
                        <br></br>
                        <small className="text-muted">Joined in 2020</small>
                        <br></br><br></br>
                        <Card.Text>
                            Chris is a people manager struggling
                            to learn how to code in React, so he
                            can feel somewhat useful
                        </Card.Text> 
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">0 friends</small>
                    </Card.Footer>
                </Card>
            </React.Fragment>
        )
    }
}

export default thisCard;
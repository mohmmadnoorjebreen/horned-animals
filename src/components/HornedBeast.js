import React from 'react';

import Card from 'react-bootstrap/Card'




class HornedBeast extends React.Component {

    constructor(props) {

        super(props)


        this.state = {
            star: 0,
            show: false
        }
    }

    save = () => {
        this.props.selectedFunction(this.props.title);
    }

    click = () => {

        this.props.opens();
        this.setState({
            star: this.state.star + 1
        })

    }

    both = () => {
        this.click();
        this.save();

    }


    render() {

        return (

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" onClick={this.both} src={this.props.image} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            <div>
                                {this.props.description}
                            </div>
                            <div>
                                &hearts;  {this.state.star}
                            </div>

                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>



        )
    }
}

export default HornedBeast;

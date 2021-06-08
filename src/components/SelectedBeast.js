import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
export class SelectedBeast extends Component {



    close = () => {
        this.props.closes();
    }

    render() {
        return (
            <div>
                 <Modal show={this.props.show} >
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                               <img src={this.props.image} alt={this.props.title} />
                            </div>

                            <div>
                            {this.props.description}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary"  onClick={this.close}>
                                Close
                </Button>
                            
                        </Modal.Footer>
                    </Modal>
            </div>
        )
    }
}

export default SelectedBeast

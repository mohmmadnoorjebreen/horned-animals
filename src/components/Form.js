import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

export class UseForm extends React.Component {


    hornedFilter = (e) => {
        
        this.props.renderImg(e.target.value);

    }


    render() {
        return (
            <div>
                <Form>
                <Form.Label>Filter by Numbers of Horns</Form.Label>
                    <Form.Control onChange={(e) => this.hornedFilter(e)} as="select"  >
                    <option value="all">all</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">more</option>
                    </Form.Control>

                </Form>
            </div>
        )
    }
}

export default UseForm

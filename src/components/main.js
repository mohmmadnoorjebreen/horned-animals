import React from 'react';

import HornedBeast from './HornedBeast';


import UseForm from './Form'
import { getAllByAltText } from '@testing-library/dom';



class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allData: this.props.Data,
        }
    }

    renderImg = (x) => {
    
        alert(x);
       
        let all = [];
        this.props.Data.map(values => {

            if (values.horns == `${x}`) {
                all.push(values)
            } 
            return ;
        })
        if (x === 'all') {
                all = this.props.Data;
        }
        this.setState({
            allData: all,

        })

    }

    open = () => {
        this.props.clicks();

    }





    render() {

        return (

            <div>
                {
                    <UseForm
                        renderImg={this.renderImg}
                    />
                }
                {
                    this.state.allData.map((value) => {
                        return (
                            <HornedBeast

                                title={value.title}
                                image={value.image_url}
                                description={value.description}
                                selectedFunction={this.props.selectedFunction}
                                opens={this.open}


                            />

                        )
                    })

                }





            </div>

        )


    }

}


export default Main;


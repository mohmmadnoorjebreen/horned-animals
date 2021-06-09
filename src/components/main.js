import React from 'react';

import HornedBeast from './HornedBeast';


import UseForm from './Form'




class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allData: this.props.Data,
        }
    }

    renderImg = (hornedNumber) => {
    
        
       
        let all = [];
        this.props.Data.map(values => {

            if (values.horns == `${hornedNumber}`) {
                all.push(values)
            } 
            return  ;
        })
        if (hornedNumber === 'all') {
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


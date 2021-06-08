import React from 'react';

import HornedBeast from './HornedBeast';




class Main extends React.Component {


    open = () => {
        this.props.clicks();
        
    }




    render() {

        return (

            <div>
                {
                    this.props.Data.map((value) => {
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


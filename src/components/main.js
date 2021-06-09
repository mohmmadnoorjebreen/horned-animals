import React from 'react';

import HornedBeast from './HornedBeast';




class Main extends React.Component {


  


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
                                click={this.props.click}


                            />

                        )
                    })

                }


            </div>

        )


    }

}


export default Main;


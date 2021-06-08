import React from 'react';

import HornedBeast from './HornedBeast';

import DataHorned from './Data.json' ;

class Main extends React.Component {

   


    render() {
        return (
            <div>
                {
                    DataHorned.map(value =>
                        <HornedBeast

                            title={value.title}
                            image={value.image_url}
                            description={value.description}


                        />
                    )
                }
            </div>
        )
    }



}

export default Main;


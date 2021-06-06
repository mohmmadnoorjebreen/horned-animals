import React from 'react';

class Main extends React.Component {

    render() {
        const imgUniWhal = 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg';
        const imgRhino = 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80';
        return (
            <main>
                <div>
                <h2>UniWhal</h2>
                <img src={imgUniWhal} alt="UniWhal" />
                <p>A unicorn and a narwhal nuzzling their horns</p>
                </div>
                <div>
                <h2>Rhino Family</h2>
                <img src={imgRhino} alt="Rhino Family" />
                <p>Mother (or father) rhino with two babies</p>
                </div>
            </main>
        )
    }
}

export default Main;
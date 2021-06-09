import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

import SelectedBeast from './components/SelectedBeast'

import DataHorned from './components/Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {


  constructor(props) {

    super(props)


    this.state = {
      star: 0,
      show: false,
      selected: "",
    }
  }

  click = () => {
    this.setState({
      show: true,
    })
  }

  close = () => {
    this.setState({
      show: false
    })
  }

  selectedFunction = (name) => {
    let selected = 0;
    DataHorned.map(value => {
      if (value.title === name) {
        selected = value;
      }
      return selected;
    })
    this.setState({
      selected: selected,
    })
  }




  render() {
    return (
      <div>
        <Header />
        <Main
          Data={DataHorned}
          selectedFunction = {this.selectedFunction}
          click={this.click}

        />



        <SelectedBeast
          close={this.close}
          show={this.state.show}
          title = {this.state.selected.title}
          image = {this.state.selected.image_url}
          description = {this.state.selected.description}
        />







        <Footer />
      </div >
    )
  }
}



export default App;





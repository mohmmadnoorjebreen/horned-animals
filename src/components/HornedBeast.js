import React from 'react';


class HornedBeast extends React.Component {

    constructor(props) {
       
        super(props)

      
        this.state = {
            title: this.props.title,
            image: this.props.image,
            description: this.props.description,
            star : 0
        }
    }

  
    click = () => {
        
        this.setState({
            star: this.state.star += 1
        })
    }  
    

    render() {

        return (
        <div>
            <h1>
            {this.state.title}
            </h1>
            <img onClick={this.click} src={this.state.image} alt={this.state.title} />
            
            <p>
                {this.state.description}
            </p>
           <span>
           &hearts; {this.state.star} 
           </span>

        </div>
        )
    }
}

export default HornedBeast;

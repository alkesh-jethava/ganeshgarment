import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

class Buttons extends React.Component{
    render(){
        return(
            <div style={{width: this.props.width}}>
                <Button style={{color: '#fff',
                                fontWeight: 'bold',
                                backgroundColor: '#00A86B'}} 
                                fullWidth 
                                onClick={this.props.onClick}
                                type={this.props.type}
                                name="submit"
                                >
                                {this.props.title}
                </Button>  
            </div>             
        )
    }
}

export default Buttons;
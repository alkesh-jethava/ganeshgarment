import React from 'react';
import '../CSS/TextInput.css'

class TextInput extends React.Component{
    render(){
        return(
            <div className="boxinput">   
                <input type={this.props.type}
                       value={this.props.value}
                       name={this.props.name}
                       maxLength={this.props.maxLength}
                       onChange={this.props.onChange}
                       required
                    //    autoComplete="off"
                    />
                       <label >{this.props.lbl}</label>
            </div>
        )
    }
}

export default TextInput;
import React from 'react';
import FizzBuzz from './FizzBuzz';
import Validate from './validate';

class InputField extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        // Initially Set the values
         limit: ' '
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({limit: e.target.value});
   }

    render() {
        return (
        <div>
     
            <input 
                type = "number" 
                value = {this.state.limit} 
                onChange = {this.updateState} />

            <Validate total={this.state.limit} />
            <FizzBuzz total={this.state.limit} />
          
        </div>
        );
    }
}

export default InputField;

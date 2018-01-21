import React from 'react';

class Validate extends React.Component{
  
 hasLength({myvalue, min, max}) {
  if (min != null && myvalue.length < min) {
    return {code: 'too short', args: {min}, msg: `Length should be at least ${min}.`}
  }
  if (max != null && myvalue.length > max) {
    return {code: 'too long', args: {max}, msg: `Length should be at most ${max}.`}
  }
  return null
}
  
  render(){   

    var myvalue = this.props.total;
    var min = 0;
    var max = 1000;  

    var finalresult = this.hasLength(myvalue, min, max);    

      return (
        <div>
            <h1>{finalresult}</h1>
        </div>  
        
      );
    
    
	}
  
}

export default Validate;

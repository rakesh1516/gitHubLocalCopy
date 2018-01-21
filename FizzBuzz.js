import React from 'react';

class FizzBuzz extends React.Component{

  
  fizzbuzz(n){
      
    var limit = n;
    var fizzBuzzes = [];  

	for (var i = 1; i <= limit; i++) {
	
      `${i % 3 === 0 ? fizzBuzzes.push('Fizz') : ''}${i % 5 === 0 ? fizzBuzzes.push('Buzz') : ''}` || fizzBuzzes.push(i);
			           
    }      
    return fizzBuzzes;
	}
  
  render(){
      
    var liItems = this.fizzbuzz(this.props.total).map(function(elem) {
        
      return (
        <div>
            <li className={elem}>{elem}</li>
        </div>  
        
      );
    })
  	return (
        <div>
            <ul>
                {liItems}
            </ul>
        </div>
        
    );
    
	}
  
}

export default FizzBuzz;

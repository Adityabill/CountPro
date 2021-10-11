import React from 'react';

export default class CounterComponents extends React.Component{
    constructor(){
        super();
        this.state={
            count: 0
        }
        }

        incrementCount(){ //Function to increment count by 1
            this.setState({count: this.state.count + 1})
        }

        decrementCount(){ //Function to decrement count by 1
            if(this.state.count <= 0){
                this.setState({count: 0})
            }

            else{
                this.setState({count: this.state.count - 1})
            } 
        }

    render(){
        return(
            <div>
                <div>
                 <h1>
                     Counter Pro
                 </h1>
                 </div>


                 <div>
                      {this.state.count}

                      <div>
                      <button onClick={()=>{this.incrementCount()}}>+</button> {/* Button to increment */}

                      <button onClick={()=>{this.decrementCount()}}>-</button> {/* Button to decrement */}
                      </div>
                 </div>


            </div>
        );
        
    }
}
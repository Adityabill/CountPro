import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import ResetIcon from './Images/Reset_Icon.png';
import MainCss from './Css/Main.module.css'
import GitHubIcon from './Images/GitHub_Icon.png'
import LinkdinIcon from './Images/Linkdin_Icon.png'

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

        resetCount(){  //Function to reset count to 0
            this.setState({count: 0})
        }

    render(){
        return(
            <div>
                <div>
                 <header> {/* Header */}
                   <h1>
                     Counter Pro
                   </h1>
                 </header>
                 </div>


                 <div className={MainCss.count_div}>
                     <div className={MainCss.intercount_div}>
                      <strong>Current Count: {this.state.count}</strong> 

                      <div>
                      <Button variant="danger" onClick={()=>{this.decrementCount()}}> - </Button> {/* Button to decrement */}

                      <Button variant="primary" onClick={()=>{this.resetCount()}}><img src={ResetIcon} height="10px" width="10px" /></Button> {/* Button to reset count */}

                      <Button variant="success" onClick={()=>{this.incrementCount()}}> + </Button> {/* Button to increment */}

                      </div>
                    </div>
                 </div>

                 <div> {/* Footer */}
                     <footer>
                         Developed by: Aditya Bikram Arandhara <br />
                         Connect me through:
                         <a href="https://github.com/Adityabill" target="blank"> <img src={GitHubIcon} height="3%" width="3%" /> </a>
                         <a href="https://www.linkedin.com/in/aditya-bikram-arandhara/" target="blank"> <img src={LinkdinIcon} height="3%" width="3%" /> </a>

                     </footer>
                 </div>


            </div>
        );
        
    }
}
import React,{Component} from "react";

export class Counter extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);


    }

    plus(){
        this.setState(prev => ({
            counter: prev.counter + 1,
          }));
    }
    minus(){
        this.setState(prev => ({
            counter: prev.counter - 1,
          }));
    }

    render(){
        return(
            <div style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'50vh'}}>
                <button onClick={this.plus}  style={{marginRight:'10px',backgroundColor:'black',fontSize:'40px',color:'white'}}>+</button>
                <span><h2>Count : {this.state.counter}</h2></span>
                <button style={{marginLeft:'10px', backgroundColor:'black',fontSize:'40px',color:'white'}} onClick={this.minus}>-</button>
            </div>
        )
    }
}
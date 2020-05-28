import React, { Component } from 'react'
import './Inputs.css'

export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             NewItem:"",
             list:[]
        }
    }
    change=(event)=>{
        this.setState({
            NewItem: event.target.value
        })
        console.log(this.state.NewItem)
    }
    set=()=>{
        const NewItem={
            id:1+Math.random(),
            value:this.state.NewItem
        }
        const list=[...this.state.list]
        list.push(NewItem)

        
        this.setState({
            NewItem:"",
            list:list
        })
    }
    delete=(e)=>{
        const list=[...this.state.list]
        const ulist=list.filter(i=>i.id!==e)
        this.setState({
            list:ulist,
        })
    }
    
    render() {
        return (
            <div className="full">
                <div className="ip1">
                <input 
                
                placeholder="write here..."
                value={this.state.NewItem}
                onChange={this.change}
                />
                <button onClick={this.set}>Add</button>
                </div>
                <div>
                    <ul>
                       {
                           this.state.list.map(item=>{
                               return(
                                  <div className="output-area">
                                       <li key={item.id}>
                                   <input type="checkbox" />
                                   {item.value}
                                   
                                    </li>
                                    <button 
                                   onClick={()=>this.delete(item.id)}
                                   >delete</button>
                                  </div>
                               )
                           })
                       }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Input

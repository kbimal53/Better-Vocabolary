import React, { Component } from 'react'
import {Vocab} from './VocabList'
import './Vocab.css'
class VocabMain extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            randomNum : Math.floor(Math.random()*Math.floor(Vocab.length))
        }
    }
    
    
    clickHandler= () =>{
        this.setState({
            randomNum : Math.floor(Math.random()*Math.floor(Vocab.length))
        })
    }
    render() {
        return (
            <div>
                <h1 id="title">Word of the day!</h1>
                <h1>{Vocab[this.state.randomNum].FIELD1}</h1>
                <h3>{Vocab[this.state.randomNum].FIELD2}</h3>
                <button type="submit" className="btn" onClick={this.clickHandler}>Another Word</button>
            </div>
        )
    }
}

export default VocabMain

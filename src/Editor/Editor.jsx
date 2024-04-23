import React, { PureComponent } from 'react'
import './Editor.css'
class Editor extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            fontSize: 52,
            color: 'white',
            bold: '',
            italic: '',
            underline: '',
            teletype: '',
           
        }
    }

    selectedSizeFont = (e) => {
        this.setState({[e.target.name]: e.target.value})

    }

    
    render() {
        return (
            <>
                
                {
                    this.state.bold === 'bold' ? 
                    <button name='bold' value={''} onClick={this.selectedSizeFont}>B</button>
                    :
                    <button name='bold' value={'bold'} onClick={this.selectedSizeFont}>B</button>
                } 
                {
                    this.state.italic === 'italic' ? 
                    <button name='italic' value={''} onClick={this.selectedSizeFont}>I</button>
                    :
                    <button name='italic' value={'italic'} onClick={this.selectedSizeFont}>I</button>
                } 
                {
                    this.state.underline === 'underline' ? 
                    <button name='underline' value={''} onClick={this.selectedSizeFont}>U</button>
                    :
                    <button name='underline' value={'underline'} onClick={this.selectedSizeFont}>U</button>
                } 
                {
                    this.state.teletype === 'teletype' ? 
                    <button name='teletype' value={''} onClick={this.selectedSizeFont}>Tt</button>
                    :
                    <button name='teletype' value={'fantasy'} onClick={this.selectedSizeFont}>Tt</button>
                } 
                    
                    
                    
                
              
                <select name='fontSize' onChange={this.selectedSizeFont} >
                    <option value={18}>18</option>
                    <option value={24}>24</option>
                    <option value={32}>32</option>
                    <option value={42}>42</option>
                </select>
                <input name='color' type="color" onInput={this.selectedSizeFont}/>
                <br />
                <textarea style={{
                    fontSize: this.state.fontSize + 'px',
                    color: this.state.color,
                    fontWeight: this.state.bold,
                    fontFamily: this.state.italic,
                    textDecoration: this.state.underline,
                    
                }}>
                    Hello world Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, excepturi.
                </textarea>
            </>
        )
    }
}

export default Editor
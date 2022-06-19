import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // это нужно будет поднимать до App
            term: ''
        }
    }
    // создание события и забор ввода пользователя
    onUpdateSearch2 = (e) => {
        const term = e.target.value
        this.setState({term})
        // Проброс состояния вверх
        this.props.onUpdateSearch(term)
    }
    
    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input" //это классы из бутстрепа
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch2}/> 
        )
    }
}

export default SearchPanel
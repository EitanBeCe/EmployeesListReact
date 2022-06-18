import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form'

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'John C.', salary: '$' + 800, increase: false, rise: true, id: 1},
                {name: 'Alex A.', salary: '$' + 900, increase: true, rise: false, id: 2},
                {name: 'Carl B.', salary: '$' + 1000, increase: false, rise: false, id: 3},
            ]
        }
        this.maxId = 4 
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return { data: data.filter(item => item.id !== id) }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // onToggleIncrease = (id) => {
    //     // создание нового списка при изменении данных о повышении на кнопку печеньки
    //     // this.setState(({data}) => {    
    //         // const index = data.findIndex(elem => elem.id === id)
    //         // const old = data[index]
    //         // const newItem = {...old, increase: !old.increase} // создаем объект на базе старого
    //         // const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
    //         // return {
    //         //     data: newArr
    //         // }

            
    //     // })
        
    //     // второй вариант кода. получаем массив объектов, в котором только нужный изменился
    //     this.setState(({data}) => ({   
    //         // если id совпали то вернуть новый объект с затогленым increse
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item // вернуть все остальные элементы тоже в список
    //         })
    //     })) 
    // }
    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({   
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item 
    //         })
    //     }));
    // }

    // заменить 2 метода выше на один
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({   
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item 
            })
        }));
    }

    render() {
        const emploees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        return (
            <div className="app">
                <AppInfo emploees={emploees}
                        increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmploeesList data={this.state.data}
                            onDelete={this.deleteItem} 
                            onToggleProp={this.onToggleProp}/>
                <EmploeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;
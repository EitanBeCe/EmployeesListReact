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
            ],
            //под поиск
            term: '',
            filter: 'all'
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
        })
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
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }));
    }

    //Функ поиска. аргументы - массив данных для фильтрации и строка которую ввели в поиске.
    searchEmp = (items, term) => { 
        // проверка на пустую строку
        if(items.length === 0) {
            return items
        }
        //отфильтровать на совпадение строк
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
        // сейчас если в term наверху написать то поиск работает
    }

    // устанавливать состояние поиска (для подъема состояния term в  app)
    onUpdateSearch = (term) => {
        //вместо term: term можно просто term, это сокращен запись объектов
        this.setState({term: term})
    }

    // создаение 3х вариантов поиска
    filterPost = (items, filter) => {
        switch(filter) {
            // реакт автоматом ставит break
            // вернуть только соответствующий список где по заданному параметру стоит true
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    // изменение класса активности при нажатии на конпки фильтров
    // все что может сделать сам пользователь назначает через on...
    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const emploees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo emploees={emploees}
                        increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmploeesList data={visibleData}
                            onDelete={this.deleteItem} 
                            onToggleProp={this.onToggleProp}/>
                <EmploeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;
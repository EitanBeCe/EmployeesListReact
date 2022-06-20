//import {Component} from 'react';
import './emploees-list-item.css';

const EmployeesListItem = (props) => {
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         increase: false,
    //         rise: false
    //     }
    // }
    // onIncrease = () => {
    //     this.setState(({increase}) => ({ // () после => чтобы не прописывать ретерн
    //         increase: !increase
    //     }))
    // }
    // onRise = () => {
    //     this.setState(({rise}) => ({
    //         rise: !rise
    //     }))
    // }

    
    const {name, salary, onDelete, onToggleProp, increase, rise} = props
    //const {increase, rise} = this.state

    let classNames = 'list-group-item d-flex justify-content-between'
    if (increase) {
        classNames += ' increase'
    }
    if (rise) {
        classNames += ' like'
    }
    
    
    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                onClick={onToggleProp} 
                data-toggle="rise"
                >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={'$'+salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp} data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem
import './app-filter.css'

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThan1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label, onFilterSelect}) => {
        const active = props.filter === name; // это как if, возвращает булин
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                type="button"
                className={`btn ${clazz}`}
                key={name}
                // стрелочную функцию тут юзают когда надо передать аргумент
                onClick={() => onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group"> 
            {buttons}
            {/* <button 
                className="btn btn-light"
                type="button">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter
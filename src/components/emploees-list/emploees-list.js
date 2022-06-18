import EmploeesListItem from '../emploees-list-item/emploees-list-item'
import './emploees-list.css'

const EmploeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmploeesListItem key={id} {...itemProps} // ===   name={item.name} salary={item.salary}
                    onDelete={()=> onDelete(id)} 
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> 
        )
    })

    return (
        <ul className="app-list app-group">
            {elements}
        </ul>
    )
}

export default EmploeesList
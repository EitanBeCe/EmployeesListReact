import './app-info.css'

const AppInfo = ({emploees, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании N</h1>
            <h2>Общее число сотрудников: {emploees}</h2>
            <h2>Получат премию: {increased}</h2>
        </div>
    )
}

export default AppInfo
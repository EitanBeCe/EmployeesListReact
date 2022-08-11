import "./app-info.css";

const AppInfo = ({ emploees, increased }) => {
    return (
        <div className="app-info">
            <h1>Employees of our company</h1>
            <h2>Amount of employees: {emploees}</h2>
            <h2>Will receive a raise: {increased}</h2>
        </div>
    );
};

export default AppInfo;

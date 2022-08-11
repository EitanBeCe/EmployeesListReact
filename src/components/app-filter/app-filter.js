import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        { name: "all", label: "All employees" },
        { name: "rise", label: "On raise" },
        { name: "moreThan1000", label: "Salary more than 1000$" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        const { onFilterSelect } = props;
        return (
            <button
                type="button"
                className={`btn ${clazz}`}
                key={name}
                // => to lift an arg
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        );
    });

    return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;

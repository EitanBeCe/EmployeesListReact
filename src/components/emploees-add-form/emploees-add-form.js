import { Component } from "react";
import "./emploees-add-form.css";

class EmploeesAddForm extends Component {
    state = {
        name: "",
        salary: "",
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // static onLog = () => {}
    static logged = "on";

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length < 3 || !this.state.salary) return;

        this.props.onAdd(this.state.name, `${this.state.salary}`);
        // Clean the form
        this.setState({
            name: "",
            salary: "",
        });
    };

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        // required
                        className="form-control new-post-label"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        // required
                        className="form-control new-post-label"
                        placeholder="Salary"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmploeesAddForm;

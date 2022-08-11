import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Will be lifted to App
            term: "",
        };
    }
    // Event, lifting of input
    onUpdateSearch2 = (e) => {
        const term = e.target.value;
        this.setState({ term });
        // Lifting up
        this.props.onUpdateSearch(term);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input" // Bootstrap classes
                placeholder="Employee search"
                value={this.state.term}
                onChange={this.onUpdateSearch2}
            />
        );
    }
}

export default SearchPanel;

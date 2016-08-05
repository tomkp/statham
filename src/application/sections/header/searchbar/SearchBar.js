import React from 'react';
import './searchbar.scss';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    render() {
        return (
            <div className="searchbar">
                <input onChange={this.handleInputChange} />
            </div>
        );
    }
}

export default SearchBar;
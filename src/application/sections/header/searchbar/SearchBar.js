import React from 'react';
import './searchbar.scss';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            console.log(`search for ${this.state.searchTerm}`);
        }
    }

    render() {
        return (
            <div className="searchbar">
                <input onChange={this.handleInputChange}
                       onKeyPress={this.handleKeyPress}
                />
            </div>
        );
    }
}

export default SearchBar;
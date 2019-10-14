import React from 'react';
import '../css/NavBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Icon</p>
                <input className="search-input"/>
            </div>
        );
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

export default NavBar;

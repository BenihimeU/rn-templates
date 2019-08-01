import React from 'react';

class SearchBar extends React.Component {
    state = { keyword: '' };

    OnFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.keyword);
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.OnFormSubmit} className="ui form">
                    <div className="field">
                        <input
                            placeholder={this.props.placeholder}
                            onChange={(e) => this.setState({ keyword: e.target.value })}
                            value={this.state.value}
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

SearchBar.ProType = {

}
SearchBar.defaultProps = {
    placeholder: "Enter Search keyword"
}

export default SearchBar;
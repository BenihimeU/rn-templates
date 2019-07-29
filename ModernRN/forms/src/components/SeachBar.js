import React, { Component } from 'react';

class SearchBar extends Component {

    state = { keyword: "" };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.keyword);
    }

    render() {
        return <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <input
                        placeholder="Search here ..."
                        value={this.state.keyword}
                        onChange={(e) => {
                            this.setState({ keyword: e.target.value.toLowerCase() })
                        }}
                    />
                </div>

            </form>
        </div>
    }
}
export default SearchBar;
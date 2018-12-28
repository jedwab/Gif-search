Search = React.createClass({
    getInitialState: function () {
        return {
            searchingText: ''
        }
    },

    handleChange: function (event) {
        var searchingText = event.target.value;
        this.setState({ searchingText: searchingText });

        if (searchingText.length > 2) {
            this.props.onSearch(searchingText);
        }
    },

    handleKeyUp: function (event) {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchingText);
        }
    },

    render: function () {

        return <input
            type="text"
            className='appinput'
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder="Enter the phrase"
            value={this.state.searchTerm}
        />
    }

})

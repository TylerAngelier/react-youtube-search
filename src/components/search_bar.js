// import React from 'react';

// const SearchBar = () => {
//     return <input / > ;
// };

// class SearchBar extends React.Component {
//     onInputChange(event) {
//         console.log(event.target.value);
//     }

//     render() {
//         // When using any React variable/expression inside JSX, wrap it with { and }
//         return <input onChange = {
//             this.onInputChange
//         }
//         />
//     }
// }

import React, { Component } from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}
	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermSearch({ term });
	}
	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>{' '}
			</div>
		);
	}
}

export default SearchBar;

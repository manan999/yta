import React from 'react' ;

const initState = {
	input : '' ,
}

class Bar extends React.Component
{	constructor(props)
	{	super(props) ;
		this.state = initState ;
	}

	onFormSubmit = (event) => {
		event.preventDefault() ;
		this.props.formSubmit(this.state.input) ;
		this.setState({input : ''}) ;
	}

	onInputChange = (event) => {
		this.setState({input : event.target.value}) ;
	}

	render()
	{
		return (
			<div className="ui segment sBar">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field" >
						<input type="text" value={this.state.input} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
			); 
	}
}

export default Bar ;
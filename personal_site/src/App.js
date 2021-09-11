import Header from './Frame_Components/Header';
import Footer from './Frame_Components/Footer';
import Content from './Frame_Components/Content';
import React from 'react';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pageLinks:["contact", "projects", "about"],
			logo :"https://avatars.githubusercontent.com/u/9051629?v=4",
			currentIndex: 0
		}
		this.whatElementToDisplayHere = this.whatElementToDisplayHere.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	whatElementToDisplayHere(option){
		return (<h1>{option}</h1>);	
	}

	handleClick(event) {
		let targetString = event.target.hash.replace("#","");
		let index = this.state.pageLinks.indexOf(targetString);

		this.setState({
			currentIndex: index 
		})
	}

  render(){
	return (
    	<div>
      		<Header logoUrl={this.state.logo} quickLinks={this.state.pageLinks} onClick={this.handleClick}/>
      		<Content elementToDisplay={this.whatElementToDisplayHere(this.state.pageLinks[this.state.currentIndex])}  />
			<Footer/>
		</div>
	);
}}

export default App;

// import './App.css';
// import React, { Component } from 'react'
// import axios from 'axios'

// class App extends Component {
//     constructor(props){
// 	super(props);
// 	this.state = {
// 	    preset: [],
// 	    grid: 
// 	};
//     }
    
//     componentDidMount(){
// 	this.getPreset();
//     }

//     getPreset() {
// 	axios
// 	    .get('http://127.0.0.1:8000/api/worlds/1/')
// 	    .then(res => {
// 		this.setState(() => ({
// 		    preset: res.data.preset
// 		}));
// 	    }).catch(err => {
// 		console.log(err);
// 	    });
//     }

//     generateGrid(){
	
//     }
//     render() {
// 	console.log(this.state.preset)
// 	return (
// 	    <h1>working</h1>
// 	)
//     }
// }

// export default App;

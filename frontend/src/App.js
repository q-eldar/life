import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import produce from 'immer'


const COLS = 50;
const ROWS = 50;

function to_2d_grid(preset){
    const rows = [];
    let offset = 0;
    for(let i =0; i < ROWS; i++){
	rows.push(preset.slice(offset, offset + COLS))
	offset += COLS;
    }

    return rows;
}

function App() {
    const [grid, setGrid] = useState([]);
    useEffect(() => {
	axios
	    .get('http://127.0.0.1:8000/api/worlds/1/')
	    .then(({data}) => {
		setGrid(to_2d_grid(Array.from(data.preset.slice(1,-1).split(',')).map((s) => parseInt(s.trim()))))
	    })
    }, []);

    function clickme() {
	const payload = {
	    preset: JSON.stringify(grid.flat())
	}

	axios
	    .put('http://127.0.0.1:8000/api/worlds/1/', {preset: grid.flat().toString()})
	    .then(res => {
		console.log(res.data);
	    })
    };
    
    // console.log(grid);
    return (
	console.log("here"),
	console.log(grid.flat().toString()),
	console.log("end"),
	<div>
	    <div>
		<button onClick={clickme}>Save</button>
	    </div>
	    <div
		style={{
		    display: 'grid',
		    gridTemplateColumns: `repeat(${COLS}, 20px)`
		}}
	    >
		{grid.map((rows, i) =>
		    rows.map((col, k) =>
			<div
			    key={ `${i}-${k}` }
			    onClick={() => {
				const newGrid = produce(grid, gridCopy => {
				    gridCopy[i][k] = grid[i][k] ? 0 : 1;
				});
				setGrid(newGrid);
			    }}
			    style={{
				width: 20,
				height: 20,
				backgroundColor: grid[i][k] == 1 ? "green" : "white",
				border: 'solid 1px black'
			    }}
			/>
		    ))}
	    </div>
	</div>
    )
}
export default App;
// class App extends Component {
//     constructor(props){
// 	super(props);
// 	this.state = {
// 	    preset: [],
// 	    size: [50, 50],
// 	    interval: 100
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
// 		    preset: to_2d_grid(Array.from(res.data.preset.slice(1,-1).split(',')))
// 		}));
// 	    }).catch(err => {
// 		console.log(err);
// 	    });
//     }

//     renderWorld() {
// 	console.log(this.state.preset)
//     }
    
//     render() {
// 	return (
// 	    <div style={{
// 		     display: 'grid',
// 		     gridTemplateColumns: `repeat(${COLS}, 20px)`
// 		 }}>
// 		{this.state.preset.map((rows, i) =>
// 		    rows.map((col, k) => <div
// 					     key={`${i}-${k}`}
// 					     onClick={() => {

// 					     }}
// 					     style={{
// 						 width: 20,
// 						 height: 20,
// 						 backgroundColor: (this.state.preset[i][k] == " 1") ? 'green' : undefined,
// 						 border: 'solid 1px black'
// 					     }}
// 					 />))}
// 	    </div>
// 	)
//     }
// }



// import './App.css';
// import React, { Component, useState, useEffect } from 'react'
// import axios from 'axios'

// const ROWS = 50;
// const COLS = 50;
// function App() {
//     const [preset, setPreset] = useState([]);
//     const [grid, setGrid] = useState(() => {
// 	const rows = [];
// 	let offset = 0;
// 	for(let i =0; i < ROWS; i++){
// 	    rows.push(preset.slice(offset, offset + COLS))
// 	    offset += COLS;
// 	}

// 	return rows;
//     });

    
//     useEffect(async () => {
// 	const result = await axios(
// 	    'http://127.0.0.1:8000/api/worlds/1/'
// 	);
// 	setPreset(result);
// 	// console.log(result)
//     });
//     console.log(grid)
//     return <div>hello</div>
// }

// export default App;

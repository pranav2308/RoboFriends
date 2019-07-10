import React from 'react';


//Adds scrolling capability for wrapped components.
const Scroll = (props) => {
	return(
		<div style = {{overflowY : 'scroll', border: '1px solid blue', height : '1000px'}}>
			{props.children}
		</div>
	);
}


export default Scroll;
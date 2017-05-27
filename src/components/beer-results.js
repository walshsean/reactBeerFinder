import React from "react"; 

function BeerResults(props) {
	return (
		<div>{props.heading} 
			<div id="beer-results">
		  	<span className="beer-modal-close">X</span>
	    </div>
	  </div>	
	);
}

export default BeerResults;
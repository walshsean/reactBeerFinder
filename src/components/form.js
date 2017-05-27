import React from "react"; 

function BeerForm() {
	return (
		<div className="beer-form">
		    <h1>Where is Beer?</h1>
				<p>Here is the Beer.</p>
			<div className="beer-inputs">
				<label>Find By Beer Name</label>
				<input type="text" placeholder="Beer Name" data="beerName" />
			</div>
			<div className="beer-inputs">
				<label>Find By Brewery</label>
				<input type="text" placeholder="Brewery" data="brewery" />
			</div>
			<button id="beer-search-button">Search</button>
		</div>
		);
}

export default BeerForm
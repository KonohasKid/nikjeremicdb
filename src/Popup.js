import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating"><strong><span className="clr">Rating:</span> {selected.imdbRating}</strong></p>
				<div className="plot">
					<img src={selected.Poster}/>
    <p ><strong><span className="clr">Type:</span> {selected.Type} <br/><span className="clr">Genre:</span> {selected.Genre} <br/><span className="clr">Runtime:</span> {selected.Runtime} <br/><span className="clr">Production:</span> <br/>{selected.Production}</strong>
    <br/><strong><span className="clr">Story:</span></strong> {selected.Plot}<br/><strong><span className="clr">Actors:</span> {selected.Actors}
    <br/><span className="clr">Language:</span> {selected.Language} <br/><span className="clr">Country:</span> {selected.Country} <br/> <span className="clr">Awards:</span> {selected.Awards}</strong> </p>
    
    
    
    
    <p className="italic"><strong><span className="clr">Director:</span> </strong> {selected.Director}
    <br/><strong><span className="clr">Writer:</span> </strong>{selected.Writer} </p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup

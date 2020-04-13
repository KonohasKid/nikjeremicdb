import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt={result.Title} />
			<h3 className="text-center">{result.Title}</h3>
		</div>
	)
}

export default Result
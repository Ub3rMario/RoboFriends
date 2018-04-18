import React from 'react';

const Card = ({ name, email, id }) => {
	return(
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img src={`https://robohash.org/${id + name}?200x200`} alt='robots'/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;
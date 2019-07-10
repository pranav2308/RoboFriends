import React from 'react';
import Card from './Card'

const returnCardElement = (user) => {
	let element = <Card key = {user.id} id = {user.id} name = {user.name} email = {user.email}/>
	return element;
}

//Returns the list of cards.
const CardList = ({ robots }) => {
	const produceCardList = robots.map(returnCardElement);
	return (
		<div>
			{produceCardList}
		</div>
	);
}



export default CardList;


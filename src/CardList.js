import React from 'react';
import Card from './Card'

const returnCardElement = (user) => {
	let element = <Card key = {user.id} id = {user.id} name = {user.name} email = {user.email}/>
	return element;
}

const CardList = ({ robots }) => {
	const produceCardList = robots.map(returnCardElement);
	return (
		<div>
			{produceCardList}
		</div>
	);
}



export default CardList;


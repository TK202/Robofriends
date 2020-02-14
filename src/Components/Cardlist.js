import React from "react";
import Card from "./Card";
// import {robots} from "./robots";

const Cardlist = ({robots}) => {
	// if(true){
	// 	throw new Error('Nooooooooo!');
	// }

	return (
		<div>
			{
				robots.map((user, i) => {
		return (<Card 
			name={user.name}
		 	email={user.email}
		 	id={user.id}
		 	key={i}
		 	 />);
		 	}
	)
			};
		</div>
		);
};

export default Cardlist;
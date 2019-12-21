import React from 'react';
import Card from './Card';

const CradList = ({ robots }) =>{
	//when we loop thruogh an array or list we need to remember to add the 'key' so react will know how to differentiate the different objects once you change something
	
	return (
		<div>
		{ 	
			robots.map((user,i) => {
				return (
					<Card 
						key={user.id} 
						id={user.id} 
						name={user.name} 
						email={user.email}
					/>
				);
			})
		}
		</div>	
	);

}

export default CradList;
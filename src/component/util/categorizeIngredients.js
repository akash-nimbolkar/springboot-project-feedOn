
  import React from 'react';
  
  const CategorizeIngredients = (ingredients) =>  {
	return ingredients.reduce((acc,ingredient)=>{
        const{category}=ingredient;
        if(!acc[category.name]){
            acc[category.name]=[];
        }
        acc[category.name].push(ingredient);
        return acc;
    },{});
  };
  
  export default CategorizeIngredients;
  
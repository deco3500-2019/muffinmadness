function extractMealData([user, influencers, ingredients, mealPlans, recipes]) {
  let userMealplans = user.mealPlans;

  // finds the id's of all recipes in the meal plan
  let mealPlanRecipesIDs = null;
  for (let mealPlan of mealPlans) {
    if (mealPlan.id === userMealplans[0]) {
      mealPlanRecipesIDs = mealPlan.recipes[0];
    }
  }

  // finds the actual recipes
  let allRecipes = [];
  for (let recipe of recipes) {
    if (mealPlanRecipesIDs.includes(recipe.id)) {
      // extracts the recipe details needed for displaying
      let extractedRecipeDetails = {
        cardType: "Today's meal plan",
        image: recipe.image,
        header: {
          topline: {
            recipeType: recipe.type,
            isInMealPlan: true,
            isInCart: false
          },
          body: {
            name: recipe.name,
            infoSquares: recipe.infoSquares
          }
        },
        footer: {
          ingredients: recipe.ingredients
        }
      };
      allRecipes.push({ ...extractedRecipeDetails });
    }
  }

  // appends image of ingredients to the data.
  for (let recipe of allRecipes) {
    for (let recipeIngredient of recipe.footer.ingredients) {
      for (let ingredient of ingredients) {
        if (recipeIngredient[1] === ingredient.name) {
          recipeIngredient.push(ingredient.image);
        }
      }
    }
  }
  return allRecipes;
}

export { extractMealData };

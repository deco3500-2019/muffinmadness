function extractUserMealPlanRecipes([user, ingredients, mealPlans, recipes]) {
  let userMealplans = user.mealPlans;

  // finds the id's of the first three recipes in the meal plan
  let mealPlanRecipesIDs = extractRecipeIds('user meal plans', userMealplans, mealPlans);
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

function extractMealPlanRecipes([user, influencers, ingredients, mealPlans, recipes]) {
  let influencerMealPlans = [];

  for (let plan of mealPlans) {
    if (!user.mealPlans.includes(plan.id)) {
      let extractedMealPlan = {
        cardType: "Recommended meal plans",
        image: null,
        header: {
          topline: {
            recipeType: plan.name,
            isInMealPlan: false,
            isInCart: false
          },
          body: {
            name: plan.creator,
            infoSquares: plan.infoSquares
          }
        },
        footer: {
          ingredients: null
        }
      };

      for (let influencer of influencers) {
        if (plan.creator === influencer.name) {
          extractedMealPlan.image = influencer.image;
        }
      }
      
      let allRecipes = [];
      for (let day of plan.recipes) {
        for (let meal of day) {
          for (let recipe of recipes) {
            if (meal === recipe.id) {
              
              allRecipes.push([null, null, recipe.image]);
            }
          }
        }
      }
      extractedMealPlan.footer.ingredients = allRecipes;

      influencerMealPlans.push(extractedMealPlan);
    }
  }
  return influencerMealPlans;
}

function extractRecommendedDishes([user, influencers, ingredients, mealPlans, recipes]) {  
  // finds the actual recipes
  let userMealplans = user.mealPlans;
  let allRecipes = [];
  let mealPlanRecipesIDs = extractRecipeIds('recommended dishes', userMealplans, mealPlans);

  for (let recipe of recipes) {
    if (!mealPlanRecipesIDs.includes(recipe.id)) {
      // extracts the recipe details needed for displaying
      let extractedRecipeDetails = {
        cardType: "Recommended dishes",
        image: recipe.image,
        header: {
          topline: {
            recipeType: recipe.type,
            isInMealPlan: false,
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

function extractInfluencers([user, influencers, ingredients, mealPlans, recipes]) {
  let influencerData = [];
  for (let influencer of influencers) {
    let extractedInfluencerDetails = {
      cardType: "Trending users to follow",
      image: influencer.image,
      header: {
        topline: {
          recipeType: null,
          isInMealPlan: false,
          isInCart: false
        },
        body: {
          name: influencer.name,
          infoSquares: null,
          userSocialStatus: [influencer.followers, influencer.likes]
        }
      },
      footer: {
        ingredients: null
      }
    };
    influencerData.push(extractedInfluencerDetails);
  }
  return influencerData;
}

function extractRecipeIds(origin, userMealplans, mealPlans) {
  let mealPlanRecipesIDs = [];
  for (let mealPlan of mealPlans) {
    if (origin === 'user meal plans' || 'recommended dishes') {
      // userMealPlan[0] is the one and only mealplan the user currently follows
      if (mealPlan.id === userMealplans[0]) {
        // mealPlan.recipes[0] is the first day of recipes (breakfast, lunch, dinner)
        mealPlanRecipesIDs = mealPlan.recipes[0];
      }
    } else {
      // check if not in user meal plans
      if (mealPlan.id !== userMealplans[0]) {
        mealPlanRecipesIDs.push(mealPlan.recipes);
      }
    }
  }
  return mealPlanRecipesIDs;
}

export { extractUserMealPlanRecipes, extractMealPlanRecipes, extractRecommendedDishes, extractInfluencers };
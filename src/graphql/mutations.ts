// tslint:disable
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      title
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      title
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      title
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
    }
  }
`;
export const createMeal = /* GraphQL */ `
  mutation CreateMeal(
    $input: CreateMealInput!
    $condition: ModelMealConditionInput
  ) {
    createMeal(input: $input, condition: $condition) {
      id
      recipeId
      recipe {
        id
        title
      }
      userId
    }
  }
`;
export const updateMeal = /* GraphQL */ `
  mutation UpdateMeal(
    $input: UpdateMealInput!
    $condition: ModelMealConditionInput
  ) {
    updateMeal(input: $input, condition: $condition) {
      id
      recipeId
      recipe {
        id
        title
      }
      userId
    }
  }
`;
export const deleteMeal = /* GraphQL */ `
  mutation DeleteMeal(
    $input: DeleteMealInput!
    $condition: ModelMealConditionInput
  ) {
    deleteMeal(input: $input, condition: $condition) {
      id
      recipeId
      recipe {
        id
        title
      }
      userId
    }
  }
`;

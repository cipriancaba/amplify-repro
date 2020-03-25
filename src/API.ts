/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecipeInput = {
  id?: string | null,
  title?: string | null,
};

export type ModelRecipeConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateRecipeInput = {
  id: string,
  title?: string | null,
};

export type DeleteRecipeInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateMealInput = {
  id?: string | null,
  recipeId: string,
  userId?: string | null,
};

export type ModelMealConditionInput = {
  recipeId?: ModelIDInput | null,
  and?: Array< ModelMealConditionInput | null > | null,
  or?: Array< ModelMealConditionInput | null > | null,
  not?: ModelMealConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMealInput = {
  id: string,
  recipeId?: string | null,
  userId?: string | null,
};

export type DeleteMealInput = {
  id?: string | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelMealFilterInput = {
  id?: ModelIDInput | null,
  recipeId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelMealFilterInput | null > | null,
  or?: Array< ModelMealFilterInput | null > | null,
  not?: ModelMealFilterInput | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe:  {
    __typename: "Recipe",
    id: string,
    title: string | null,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe:  {
    __typename: "Recipe",
    id: string,
    title: string | null,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe:  {
    __typename: "Recipe",
    id: string,
    title: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    email: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    email: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    email: string,
  } | null,
};

export type CreateMealMutationVariables = {
  input: CreateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type CreateMealMutation = {
  createMeal:  {
    __typename: "Meal",
    id: string,
    recipeId: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      title: string | null,
    } | null,
    userId: string | null,
  } | null,
};

export type UpdateMealMutationVariables = {
  input: UpdateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type UpdateMealMutation = {
  updateMeal:  {
    __typename: "Meal",
    id: string,
    recipeId: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      title: string | null,
    } | null,
    userId: string | null,
  } | null,
};

export type DeleteMealMutationVariables = {
  input: DeleteMealInput,
  condition?: ModelMealConditionInput | null,
};

export type DeleteMealMutation = {
  deleteMeal:  {
    __typename: "Meal",
    id: string,
    recipeId: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      title: string | null,
    } | null,
    userId: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe:  {
    __typename: "Recipe",
    id: string,
    title: string | null,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      title: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    email: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMealQueryVariables = {
  id: string,
};

export type GetMealQuery = {
  getMeal:  {
    __typename: "Meal",
    id: string,
    recipeId: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      title: string | null,
    } | null,
    userId: string | null,
  } | null,
};

export type ListMealsQueryVariables = {
  filter?: ModelMealFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealsQuery = {
  listMeals:  {
    __typename: "ModelMealConnection",
    items:  Array< {
      __typename: "Meal",
      id: string,
      recipeId: string,
      recipe:  {
        __typename: "Recipe",
        id: string,
        title: string | null,
      } | null,
      userId: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

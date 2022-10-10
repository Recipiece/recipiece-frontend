import { IBaseUserOwnedModel } from "./base-model";


export interface IRecipeStep {
  content: string;
  time_ms?: number;
  ordinal: number;
}


export interface IRecipeIngredient {
  ordinal: number;
  content: string;
  name?: string;
  amount?: string;
  unit?: string;
  commonMatch?: string;
  converted?: string;
}


export interface IRecipeAdvancedOptions {
  highAltitude?: boolean;
  altitude?: number;
}


export interface IRecipeSection {
  name: string;
  steps: IRecipeStep[];
  ingredients: IRecipeIngredient[];
  ordinal: number;
}


export interface IRecipe extends IBaseUserOwnedModel {
  name: string;
  description: string;
  private: boolean;
  advanced?: IRecipeAdvancedOptions;
  sections: IRecipeSection[];
  tags: string[];
}


export interface IRecipeQuery {
  name?: string;
  tags?: string[];
  ingredients?: string[];
  page?: number;
}

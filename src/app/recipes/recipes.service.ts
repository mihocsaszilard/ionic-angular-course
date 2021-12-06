import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/m6/iA/wiener-schnitzel.jpeg?w=670&fit=crop&fm=webp&crop=421%2C289%2C%2C&h=460&mark=watermark.png&markpos=bottom-left&markpad=20&markw=&s=f2a58cd8f17df38ea0d573d2b86593d3',
      ingredients: ['French Fries', 'Salad', 'Pork Meat'],
    },
    {
      id: 'r2',
      title: 'Toltott Kaposzta',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/QT/A8/toltott-kaposzta.jpeg?w=670&fit=crop&fm=webp&crop=1046%2C719%2C%2C&h=460&mark=watermark.png&markpos=bottom-left&markpad=20&markw=&s=2aa37434792bd3fe155ea7484d70207e',
      ingredients: ['Kaposzta', 'Rizs', 'Daralthus'],
    },
    {
      id: 'r3',
      title: 'Bolognai',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/an/N0/bolognai-maskeppen.jpeg?w=565&fit=crop&fm=webp&crop=800%2C550%2C%2C99&h=370&s=4c4f5b68bfb80e891377478b7f09f14c',
      ingredients: ['Spagetti', 'Paradicsomle', 'Daralthus'],
    },
    {
      id: 'r4',
      title: 'Zoldsegleves',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/oE/cU/zoldsegleves.jpeg?w=565&fit=crop&fm=webp&crop=421%2C289%2C%2C&h=370&s=e5c1325c7c3cf8d8dc535eeca7f48994',
      ingredients: ['Repa', 'Petrezselyem', 'Csirkehus'],
    },
    {
      id: 'r5',
      title: 'Schnitzel',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/m6/iA/wiener-schnitzel.jpeg?w=670&fit=crop&fm=webp&crop=421%2C289%2C%2C&h=460&mark=watermark.png&markpos=bottom-left&markpad=20&markw=&s=f2a58cd8f17df38ea0d573d2b86593d3',
      ingredients: ['French Fries', 'Salad', 'Pork Meat'],
    },
    {
      id: 'r6',
      title: 'Toltott Kaposzta',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/QT/A8/toltott-kaposzta.jpeg?w=670&fit=crop&fm=webp&crop=1046%2C719%2C%2C&h=460&mark=watermark.png&markpos=bottom-left&markpad=20&markw=&s=2aa37434792bd3fe155ea7484d70207e',
      ingredients: ['Kaposzta', 'Rizs', 'Daralthus'],
    },
    {
      id: 'r7',
      title: 'Bolognai',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/an/N0/bolognai-maskeppen.jpeg?w=565&fit=crop&fm=webp&crop=800%2C550%2C%2C99&h=370&s=4c4f5b68bfb80e891377478b7f09f14c',
      ingredients: ['Spagetti', 'Paradicsomle', 'Daralthus'],
    },
    {
      id: 'r8',
      title: 'Zoldsegleves',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/oE/cU/zoldsegleves.jpeg?w=565&fit=crop&fm=webp&crop=421%2C289%2C%2C&h=370&s=e5c1325c7c3cf8d8dc535eeca7f48994',
      ingredients: ['Repa', 'Petrezselyem', 'Csirkehus'],
    },
    {
      id: 'r9',
      title: 'Schnitzel',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/m6/iA/wiener-schnitzel.jpeg?w=670&fit=crop&fm=webp&crop=421%2C289%2C%2C&h=460&mark=watermark.png&markpos=bottom-left&markpad=20&markw=&s=f2a58cd8f17df38ea0d573d2b86593d3',
      ingredients: ['French Fries', 'Salad', 'Pork Meat'],
    },
    {
      id: 'r10',
      title: 'Toltott Kaposzta',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/QT/A8/toltott-kaposzta.jpeg?w=670&fit=crop&fm=webp&crop=1046%2C719%2C%2C&h=460&mark=watermark.png&markpos=bottom-left&markpad=20&markw=&s=2aa37434792bd3fe155ea7484d70207e',
      ingredients: ['Kaposzta', 'Rizs', 'Daralthus'],
    },
    {
      id: 'r11',
      title: 'Bolognai',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/an/N0/bolognai-maskeppen.jpeg?w=565&fit=crop&fm=webp&crop=800%2C550%2C%2C99&h=370&s=4c4f5b68bfb80e891377478b7f09f14c',
      ingredients: ['Spagetti', 'Paradicsomle', 'Daralthus'],
    },
    {
      id: 'r12',
      title: 'Zoldsegleves',
      // eslint-disable-next-line max-len
      imageUrl: 'https://image-api.nosalty.hu/nosalty/images/recipes/oE/cU/zoldsegleves.jpeg?w=565&fit=crop&fm=webp&crop=421%2C289%2C%2C&h=370&s=e5c1325c7c3cf8d8dc535eeca7f48994',
      ingredients: ['Repa', 'Petrezselyem', 'Csirkehus'],
    },
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => (
        recipe.id === recipeId)
      )
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => (
      recipe.id !== recipeId)
    );
  };
}

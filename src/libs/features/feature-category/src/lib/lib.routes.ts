import { Route } from '@angular/router';
import { AllCategories } from './all-categories/all-categories';
import { CreateCategory } from './create-category/create-category';
import { UpdateCategory } from './update-category/update-category';

export const featureCategoryRoutes: Route[] = [
  { path: '', redirectTo: 'allCategories', pathMatch: 'full' },
  {
    path:'allCategories',
    component: AllCategories,
    title: 'pageTitle.allCategories'
  },
  {
    path:'createCategory',
    component: CreateCategory,
    title: 'pageTitle.createCategory'
  },
  {
    path:'updateCategory',
    component: UpdateCategory,
    title: 'pageTitle.updateCategory',
    data: { isReadonly: false },
  },
  {
    path:'categoryDetails',
    component: UpdateCategory,
    title: 'pageTitle.categoryDetails',
    data: { isReadonly: true },
  },
];

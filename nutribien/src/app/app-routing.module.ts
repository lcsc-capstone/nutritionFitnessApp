import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  {path: 'list',loadChildren: './list/list.module#ListPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'nutrition', loadChildren: './nutrition/nutrition.module#NutritionPageModule'},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'workout', loadChildren: './Workout/Workout.module#WorkoutPageModule' },
  { path: 'measurements', loadChildren: './Measurements/Measurements.module#MeasurementsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

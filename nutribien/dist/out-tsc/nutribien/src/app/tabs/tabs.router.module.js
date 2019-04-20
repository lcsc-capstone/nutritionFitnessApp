var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'Workout',
                children: [
                    {
                        path: '',
                        loadChildren: '../Workout/Workout.module#WorkoutPageModule'
                    }
                ]
            },
            {
                path: 'Measurements',
                children: [
                    {
                        path: '',
                        loadChildren: '../Measurements/Measurements.module#MeasurementsPageModule'
                    }
                ]
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: '../login/login.module#LoginPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: 'nutrition',
                children: [
                    {
                        path: '',
                        loadChildren: '../nutrition/nutrition.module#NutritionPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map
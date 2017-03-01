import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppSucess } from './app.success';

// import { LogIn } from './app.login';
// import { AboutComponent } from './about.component';
// import { HomeComponent } from './home.component';
// import { NotFoundComponent } from './not-found.component';
// import { MenuComponent } from './app.menu'

const appRouters: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'success',
        component: AppSucess
    },
    {
        path: '**',
        component: AppComponent
    }

    //     { path: 'global1', component: GlobalComponent, canActivate: [AboutGuard] },
]

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRouters)],
    // declarations: [AppComponent, LogIn], // HomeComponent, AboutComponent, NotFoundComponent],
    declarations: [AppComponent, AppSucess],
    // providers: [AboutGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
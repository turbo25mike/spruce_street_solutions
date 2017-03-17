import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ApproachComponent } from './components/approach/approach.component';
import { ServicesComponent } from './components/services/services.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        ApproachComponent,
        CareersComponent,
        ContactComponent,
        ServicesComponent,
        HomeComponent
    ],
    providers: [
        AUTH_PROVIDERS
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'approach', component: ApproachComponent },
            { path: 'careers', component: ApproachComponent },
            { path: 'contact', component: ApproachComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}

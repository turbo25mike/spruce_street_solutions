import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ApproachComponent } from './components/approach/approach.component';
import { ServicesComponent } from './components/services/services.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        ApproachComponent,
        CareersComponent,
        ContactComponent,
        ServicesComponent,
        HomeComponent
    ],
    imports: [
        BsDropdownModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
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
export class AppModule {}

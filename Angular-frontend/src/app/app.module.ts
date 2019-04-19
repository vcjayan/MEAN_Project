import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SitelistComponent } from './sitelist/sitelist.component';
import { SitecreateComponent } from './sitecreate/sitecreate.component';
import { SiteeditComponent } from './siteedit/siteedit.component';
import { DefaultComponent } from './default/default.component';
import { MyfilterPipe } from './myfilter.pipe';
import { PrimaryComponent } from './primary/primary.component';



const appRoutes:Routes=[
  { path:'main/view', component:SitelistComponent},
  { path:'main/create', component:SitecreateComponent},
  { path:'edit', component:SiteeditComponent},
  { path:'edit/:id', component:SiteeditComponent},
  { path:'', component:DefaultComponent},
  { path:'main', component:PrimaryComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    SitelistComponent,
    SitecreateComponent,
    SiteeditComponent,
    DefaultComponent,
    MyfilterPipe,
    PrimaryComponent,
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent,PrimaryComponent,DefaultComponent, SitelistComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SitecreateComponent } from './sitecreate/sitecreate.component';
import { SiteeditComponent } from './siteedit/siteedit.component';
import { DefaultComponent } from './default/default.component';
import { MyfilterPipe } from './myfilter.pipe';
import { PrimaryComponent } from './primary/primary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sitelist1Component } from './sitelist1/sitelist1.component';
import { MatToolbarModule, MatSelectModule } from '@angular/material';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatTableModule, MatOptionModule } from '@angular/material';
import { ExcelService } from './excel.service'
import { MatPaginatorModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule, MatDividerModule } from '@angular/material';
import { MatInputModule, MatSnackBarModule } from '@angular/material'
import { MatTableDataSource } from '@angular/material';
import { SiteloadingComponent } from './siteloading/siteloading.component';
import { LinkbudgetComponent } from './Linkbudget/Linkbudget.component';


const appRoutes:Routes=[
  
  { path:'main/view1', component:Sitelist1Component},
  { path:'main/create', component:SitecreateComponent},
  { path:'edit', component:SiteeditComponent},
  { path:'edit/:id', component:SiteeditComponent},
  { path:'', component:DefaultComponent},
  { path:'main', component:PrimaryComponent}, 
  { path:'main/loading', component:SiteloadingComponent},
  { path:'main/mwlb', component:LinkbudgetComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    
    SitecreateComponent,
    SiteeditComponent,
    DefaultComponent,
    MyfilterPipe,
    PrimaryComponent,
    Sitelist1Component,
    SiteloadingComponent,
    LinkbudgetComponent ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    ],

  providers: [ExcelService],
  bootstrap: [AppComponent,PrimaryComponent,DefaultComponent, Sitelist1Component]
})



export class AppModule { }

exports: [
  MatFormFieldModule,
  MatInputModule]

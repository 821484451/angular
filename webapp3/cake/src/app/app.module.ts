import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRouter } from './router/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { DataformComponent } from './components/dataform/dataform.component';


@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    ProductsComponent,
    OrderlistComponent,
    UserlistComponent,
    PagenofoundComponent,
    CarlistComponent,
    DataformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

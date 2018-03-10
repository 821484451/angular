import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../components/products/products.component';
import { UserlistComponent } from '../components/userlist/userlist.component';
import { OrderlistComponent } from '../components/orderlist/orderlist.component';
import { CarlistComponent } from '../components/carlist/carlist.component';
import { DataformComponent } from '../components/dataform/dataform.component';
import { PagenofoundComponent } from '../components/pagenofound/pagenofound.component';


const appRoutes: Routes = [
    {path: 'products', component: ProductsComponent},
    {path: 'orderlist', component: OrderlistComponent},
    {path: 'userlist', component: UserlistComponent},
    {path: 'carlist', component: CarlistComponent},
    {path: 'search', component: DataformComponent},
    {path: '**', component: PagenofoundComponent},
]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
)
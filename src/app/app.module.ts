import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { appReducers } from './store/reducers/app.reducers';
import { CustomersModule } from './customers/customers.module';
import { CustomerEffects } from './store/effects/customer.effects';
import { OrdersModule } from './orders/orders.module';
import { OrderEffects } from './store/effects/order.effects';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CustomerEffects, OrderEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

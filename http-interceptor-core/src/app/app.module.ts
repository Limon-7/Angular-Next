import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './services/my-interceptor';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

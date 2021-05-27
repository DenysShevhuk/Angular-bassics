import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import { AppComponent } from './app.component';
import { PostComponent} from './post/post.component';
import { HeaderComponent} from './header/header.component';
import { Post2Component } from './post2/post2.component';
import { InputComponent } from './input/input.component';
import { SectionInput2Component } from './section-input2/section-input2.component';
import { SectionFormComponent } from './section-form/section-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialsComponent } from './materials/materials.component';
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { ModalComponent } from './modal/modal.component';
import { TimeComponent } from './time/time.component';
import { BtnRegistrationComponent } from './btn-registration/btn-registration.component';
import { BlockConvenientlyComponent } from './block-conveniently/block-conveniently.component';
import { BlockConvenientlyTextComponent } from './block-conveniently-text/block-conveniently-text.component';
import { BlockSchemeWorkComponent } from './block-scheme-work/block-scheme-work.component';
import { BlockSchemeWorkTextComponent } from './block-scheme-work-text/block-scheme-work-text.component';
import { BlockPartnersComponent } from './block-partners/block-partners.component';
import { BlockPartnersCardComponent } from './block-partners-card/block-partners-card.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from './app-routing.modules';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactsComponent } from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import { ExportMaterialsComponent } from './export-materials/export-materials.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserOfficeComponent } from './user-office/user-office.component';
import { UserMakeOrderComponent } from './user-make-order/user-make-order.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { UserMyOrdersComponent } from './user-my-orders/user-my-orders.component';
import {AuthService} from './shared/service/auth.service';
import {AuthInterseptor} from './shared/auth.interseptor';
import {AuthGuard} from './shared/service/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserOffersComponent } from './user-offers/user-offers.component';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterseptor,
};

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    Post2Component,
    InputComponent,
    SectionInput2Component,
    SectionFormComponent,
    MaterialsComponent,
    StyleDirective,
    IfnotDirective,
    ModalComponent,
    TimeComponent,
    BtnRegistrationComponent,
    BlockConvenientlyComponent,
    BlockConvenientlyTextComponent,
    BlockSchemeWorkComponent,
    BlockSchemeWorkTextComponent,
    BlockPartnersComponent,
    BlockPartnersCardComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ContactsComponent,
    AboutComponent,
    ExportMaterialsComponent,
    CooperationComponent,
    UserComponent,
    UserHeaderComponent,
    UserOfficeComponent,
    UserMakeOrderComponent,
    MyOrdersComponent,
    UserMyOrdersComponent,
    UserOffersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [INTERCEPTOR_PROVIDER, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

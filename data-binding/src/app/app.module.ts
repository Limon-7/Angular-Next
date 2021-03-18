import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempleteFormComponent } from './templete-form/templete-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { UserInputComponent } from './components/user-input/user-input.component';

import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { LifeChildComponent } from './components/life-child/life-child.component';


import { LifeContentComponent } from './components/life-content/life-content.component';
import { JokeComponent } from './components/view-encapsulation/joke/joke.component';
import { JokeListComponent } from './components/view-encapsulation/joke-list/joke-list.component';
import { JokeFormComponent } from './components/view-encapsulation/joke-form/joke-form.component';
import { ReactiveFormComponent } from './reactive/reactive-form/reactive-form.component';
import { ReactiveFormBuilderComponent } from './reactive/reactive-form-builder/reactive-form-builder.component';
import { TempleteContainerOutletComponent } from './directives/templete-container-outlet/templete-container-outlet.component';
import { MessageDirectiveDirective } from './directives/message-directive.directive';
import { CustomTemplateRefDirective } from './directives/custom-template-ref.directive';


@NgModule({
  declarations: [AppComponent, TempleteFormComponent, HighlightDirective, UserInputComponent, LifeCycleComponent, LifeChildComponent, LifeContentComponent, JokeComponent, JokeListComponent, JokeFormComponent, ReactiveFormComponent, ReactiveFormBuilderComponent, TempleteContainerOutletComponent, MessageDirectiveDirective, CustomTemplateRefDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

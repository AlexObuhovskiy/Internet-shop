///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RedditApp }   from './app';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RedditApp],
    bootstrap: [RedditApp]
})
export class AppModule { }
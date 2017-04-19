import { Component } from '@angular/core'


@Component({
    selector: 'reddit',
    template: `
<input type="text" class="form-control" name="documents" [(ngModel)]="name">
<h2>{{name}}</h2>
<button (click)="onClick()">gas</button>
`
})
export class RedditApp {
    name:string = "";

    onClick() {
        debugger;
        console.log('Do import with ' + this.name);
    }
}
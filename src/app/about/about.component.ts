import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/models/contact.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  constructor() { }

  // comments: Contact[];

  // submitForm(firstName, lastName, email, comment){
  //     let addedForm = new Contact(firstName, lastName, email, comment);
  //     this.comments.push(addedForm)
  // }

  ngOnInit() {
  }

  

}

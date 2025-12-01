import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  message = '';
  email = '';

  onSubmit() {
    console.log('Message:', this.message);
    console.log('Email:', this.email);
    alert('Thank you for reaching out!');
    this.message = '';
    this.email = '';
  }
}

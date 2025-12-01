import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  message = '';
  email = '';

  onSubmit() {
    console.log('Message:', this.message);
    console.log('Email:', this.email);
    // Handle form submission
    alert('Thank you for your message!');
    this.message = '';
    this.email = '';
  }
}

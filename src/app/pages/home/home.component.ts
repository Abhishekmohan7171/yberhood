import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.email]]
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID'; // You need to replace this
      const templateId = 'YOUR_TEMPLATE_ID'; // You need to replace this
      const publicKey = 'YOUR_PUBLIC_KEY'; // You need to replace this

      const templateParams = {
        to_email: 'abhishekmohan7171@gmail.com',
        from_email: this.contactForm.value.email || 'anonymous@yberhood.com',
        message: this.contactForm.value.message,
        reply_to: this.contactForm.value.email || 'noreply@yberhood.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      this.submitSuccess = true;
      this.contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      this.submitError = true;
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }

  // Getter methods for form controls
  get message() {
    return this.contactForm.get('message');
  }

  get email() {
    return this.contactForm.get('email');
  }
}

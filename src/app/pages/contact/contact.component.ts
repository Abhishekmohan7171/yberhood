import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]]
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
      const serviceId = 'service_6rspj4p';
      const templateId = 'template_tnftroq';
      const publicKey = 'qLDAzGKqLuW07WUta';

      const templateParams = {
        to_email: 'abhishekmohan7171@gmail.com',
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        reply_to: this.contactForm.value.email
      };

      console.log('Sending email with params:', templateParams);
      console.log('Using service:', serviceId, 'template:', templateId);

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully!', response);
      
      this.submitSuccess = true;
      this.contactForm.reset();
      
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
      
    } catch (error: any) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        status: error?.status,
        text: error?.text,
        message: error?.message
      });
      this.submitError = true;
      
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }

  get message() {
    return this.contactForm.get('message');
  }

  get email() {
    return this.contactForm.get('email');
  }
}

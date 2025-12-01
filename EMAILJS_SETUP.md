# EmailJS Setup Guide for Yberhood Contact Form

## Overview
The contact form now uses **Reactive Forms** and **EmailJS** to send messages directly to `abhishekmohan7171@gmail.com`.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred service)
4. Connect your Gmail account (`abhishekmohan7171@gmail.com`)
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `yberhood_contact_form`

**Subject:** `New Message from Yberhood Contact Form`

**Content:**
```
Hello,

You have received a new message from the Yberhood contact form:

From: {{from_email}}
Reply To: {{reply_to}}

Message:
{{message}}

---
This email was sent from yberhood.web.app
```

4. Copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcXYZ123`)
3. Copy this key

### 5. Update the Code

Open `src/app/pages/home/home.component.ts` and replace these values on lines 40-42:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

**Example:**
```typescript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'abcXYZ123';
```

### 6. Test the Form
1. Run the app: `npm start`
2. Fill out the contact form
3. Click "send"
4. Check `abhishekmohan7171@gmail.com` for the email

## Template Parameters

The form sends these parameters to EmailJS:

- `to_email`: `abhishekmohan7171@gmail.com` (hardcoded)
- `from_email`: User's email or `anonymous@yberhood.com`
- `message`: The message content
- `reply_to`: User's email for easy reply

## Features Implemented

✅ **Reactive Forms** - Better validation and control
✅ **Form Validation** - Message required (min 10 chars), email format validation
✅ **Visual Feedback** - Border colors change based on validation state
✅ **Loading State** - Button shows "sending..." while submitting
✅ **Success/Error Messages** - User-friendly feedback
✅ **Auto-reset** - Form clears after successful submission
✅ **Disabled State** - Button disabled during submission

## Email Limits

**Free Plan:**
- 200 emails per month
- 2 email services
- 2 email templates

If you need more, upgrade to a paid plan at [EmailJS Pricing](https://www.emailjs.com/pricing/)

## Alternative: Using a Backend

If you prefer a backend solution, you can:
1. Create a Node.js/Express API
2. Use Nodemailer to send emails
3. Deploy to Vercel/Netlify Functions
4. Update the form to call your API endpoint

## Troubleshooting

**Issue:** Emails not sending
- Check browser console for errors
- Verify Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for error logs
- Ensure Gmail account is connected properly

**Issue:** Emails go to spam
- Add your domain to EmailJS allowed domains
- Use a custom domain email instead of Gmail
- Configure SPF/DKIM records

## Security Note

The EmailJS keys are safe to expose in client-side code as they're designed for public use. However, you can:
- Set up domain restrictions in EmailJS dashboard
- Add reCAPTCHA to prevent spam
- Implement rate limiting

## Support

For EmailJS support: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

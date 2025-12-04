# EmailJS Troubleshooting Guide

## Common Issues & Solutions

### 1. Template Parameters Mismatch ⚠️

**The most common issue!** Your EmailJS template variables must EXACTLY match the parameter names in the code.

**Current code sends these parameters:**
```javascript
{
  to_email: 'abhishekmohan7171@gmail.com',
  from_email: 'user@example.com',
  message: 'The user message',
  reply_to: 'user@example.com'
}
```

**Your EmailJS template MUST use these exact variable names:**
```
Subject: New Message from Yberhood

From: {{from_email}}
Reply To: {{reply_to}}

Message:
{{message}}

---
Sent to: {{to_email}}
```

### 2. Check EmailJS Dashboard

1. Go to https://dashboard.emailjs.com/
2. Click on **Email Templates**
3. Open your template: `template_tnftroq`
4. Verify the template uses these EXACT variable names:
   - `{{from_email}}`
   - `{{reply_to}}`
   - `{{message}}`
   - `{{to_email}}`

### 3. Test in Browser Console

After submitting the form, open browser console (F12) and check for:

**Success:**
```
Sending email with params: {to_email: "...", from_email: "...", ...}
Using service: service_6rspj4p template: template_tnftroq
Email sent successfully! {status: 200, text: "OK"}
```

**Error:**
```
Error sending email: {...}
Error details: {status: 400, text: "...", message: "..."}
```

### 4. Common Error Messages

**"Template not found"**
- Template ID is wrong
- Template was deleted
- Check: https://dashboard.emailjs.com/admin/templates

**"Service not found"**
- Service ID is wrong
- Service was deleted
- Check: https://dashboard.emailjs.com/admin/services

**"Invalid public key"**
- Public key is wrong
- Check: https://dashboard.emailjs.com/admin/account

**"Template parameters missing"**
- Your template uses variables that aren't being sent
- OR variable names don't match exactly

### 5. Check Spam Folder

Sometimes emails go to spam. Check:
- Gmail Spam folder
- Gmail Promotions tab
- Gmail Social tab

### 6. Verify EmailJS Service

1. Go to https://dashboard.emailjs.com/admin/services
2. Click on your service: `service_6rspj4p`
3. Make sure it's connected to your Gmail account
4. Test the connection

### 7. Check EmailJS Quota

Free plan: 200 emails/month
- Go to https://dashboard.emailjs.com/admin/account
- Check "Email Usage" section
- Make sure you haven't exceeded the limit

### 8. Domain Restrictions

If you set domain restrictions in EmailJS:
1. Go to https://dashboard.emailjs.com/admin/account
2. Check "Allowed Domains"
3. Make sure `localhost` is allowed for testing
4. Add your production domain when deploying

### 9. Template Variables Reference

**Correct template format:**
```html
<h2>New Message from Yberhood</h2>

<p><strong>From:</strong> {{from_email}}</p>
<p><strong>Reply To:</strong> {{reply_to}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><small>Sent to: {{to_email}}</small></p>
```

### 10. Test with EmailJS Dashboard

1. Go to your template page
2. Click "Test it" button
3. Fill in test values:
   - `from_email`: test@example.com
   - `reply_to`: test@example.com
   - `message`: Test message
   - `to_email`: abhishekmohan7171@gmail.com
4. Click "Send Test Email"
5. Check if you receive it

## Quick Fix Steps

1. **Open browser console (F12)**
2. **Submit the form**
3. **Look for console logs:**
   - If you see "Email sent successfully!" → Check spam folder
   - If you see error → Read the error message
4. **Go to EmailJS dashboard**
5. **Click "Test it" on your template**
6. **Send a test email**
7. **If test works but form doesn't:**
   - Variable names don't match
   - Check console for exact error

## Need More Help?

**Check EmailJS logs:**
https://dashboard.emailjs.com/admin/logs

**EmailJS Documentation:**
https://www.emailjs.com/docs/

**Common issues:**
https://www.emailjs.com/docs/faq/

## Current Configuration

- Service ID: `service_6rspj4p`
- Template ID: `template_tnftroq`
- Public Key: `qLDAzGKqLuW07WUta`
- Recipient: `abhishekmohan7171@gmail.com`

## Next Steps

1. ✅ Check browser console for errors
2. ✅ Verify template variable names match
3. ✅ Test email from EmailJS dashboard
4. ✅ Check spam folder
5. ✅ Verify service is connected
6. ✅ Check email quota

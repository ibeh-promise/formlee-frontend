# Formlee

> **Send form submissions straight to your email without building a backend for every form.**

Formlee is a simple form backend and delivery service for developers who just want their forms to work.

Need a contact form? A waitlist? A feedback form? Instead of setting up an API route, SMTP, email service, database, or serverless function for each project, you can create a Formlee endpoint and point your form to it.

That's it.

---

## What is Formlee?

Formlee gives you a unique endpoint for each form you create.

You connect that endpoint to your HTML form or send data to it using `fetch`. When someone submits the form, Formlee receives the data, processes it, and sends the submission to the email address you've configured.

For example:

```html
<form action="https://formlee.io/f/frm_prod_94827" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>

  <button type="submit">Send Message</button>
</form>
```

No custom backend route. No SMTP setup inside your project. No extra SDK.

---

## How It Works

The basic flow is pretty straightforward:

```text
Your Form
    ↓
Formlee Endpoint
    ↓
Validation & Spam Checks
    ↓
Formlee Processes Submission
    ↓
Email Notification
    ↓
Your Inbox
```

### 1. Create a Form

From the Formlee dashboard, create a new form and configure things like:

* Form name
* Recipient email
* Notification settings
* Redirect URL

Formlee then gives you a unique endpoint such as:

```text
https://formlee.io/f/frm_prod_94827
```

### 2. Connect Your Form

Use the endpoint as the `action` of a regular HTML form:

```html
<form action="https://formlee.io/f/frm_prod_94827" method="POST">
  <input name="name" type="text" placeholder="Name" required />
  <input name="email" type="email" placeholder="Email" required />
  <textarea name="message" placeholder="Message" required></textarea>

  <button type="submit">Send Message</button>
</form>
```

You can also submit to the endpoint from JavaScript or a React/Next.js application:

```tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        'https://formlee.io/f/frm_prod_94827',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        required
      />

      <button
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p>Message sent successfully!</p>
      )}
    </form>
  );
}
```

### 3. Formlee Handles the Submission

Once the form is submitted, Formlee takes care of the backend work.

Depending on the configuration, this can include:

* Processing submitted fields
* Validating input
* Handling file attachments
* Rate limiting
* Honeypot spam detection
* Domain validation
* CAPTCHA verification

### 4. Get the Submission in Your Email

After processing the submission, Formlee sends the form details to your configured email address.

The notification can contain the submitted fields along with useful information such as:

* Submission time
* User agent
* IP/country information
* Attachment links

You can also configure automatic confirmation emails for people who submit your form.

### 5. Manage Everything From the Dashboard

The dashboard gives you a place to manage your forms and submissions instead of having to dig through logs or your codebase.

You can:

* View submission activity
* Check submission status
* Inspect submitted data
* Filter submissions
* Export submissions as CSV or JSON
* Configure webhooks
* Connect services such as Slack, Discord, and Google Sheets
* Test endpoints using the built-in playground

---

## Tech Stack

Formlee is built with:

* **Next.js** — application framework
* **TypeScript** — type safety
* **Tailwind CSS** — styling
* **Motion** — animations
* **Lucide** — icons
* **Node.js** — runtime

---

## Project Structure

```text
├── src/
│   ├── components/
│   │   ├── landing/       # Landing page sections
│   │   ├── layout/        # Navbar, sidebar, footer, etc.
│   │   └── ui/            # Reusable UI components
│   │
│   ├── context/            # Global application state
│   │   └── AppContext.tsx
│   │
│   ├── data/               # Templates, mock data and documentation
│   ├── types/              # TypeScript types and interfaces
│   │
│   ├── views/
│   │   ├── LandingPage.tsx
│   │   ├── DocsPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AuthPage.tsx
│   │   └── dashboard/
│   │
│   ├── App.tsx             # Main application container
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
│
├── index.html
├── tsconfig.json
└── package.json
```

---

## Running Formlee Locally

### Requirements

You'll need:

* [Node.js](https://nodejs.org/) 18 or newer
* npm, yarn, or pnpm

### 1. Clone the project

```bash
git clone <your-repository-url>
cd formlee
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app should now be available at:

```text
http://localhost:3000
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

### 6. Run linting

```bash
npm run lint
```

---

## Why Formlee?

Forms are everywhere, but setting up the backend for a simple form can be surprisingly annoying.

For a small portfolio website, landing page, waitlist, or contact page, you often don't need an entire backend just to receive a few fields and an email.

Formlee is built around that idea:

**Create a form → get an endpoint → connect it to your website → receive the submission.**

---

## Status

Formlee is currently under development.

Some features may change as the project evolves.

---

## Contributing

Found a bug or have an idea that could make Formlee better?

Feel free to open an issue or submit a pull request.

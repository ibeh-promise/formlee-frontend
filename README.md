

# Formlee

> Form submissions → your email. No backend required.

You know that thing where you build a nice landing page, drop in a contact form, and then realize you have to set up an API route, configure SMTP, maybe spin up a database, write some serverless function... all just to get a message from someone?

Yeah. Formlee fixes that.

It's a form backend. You create an endpoint, point your form at it, and submissions show up in your inbox. That's it.

---

## What is this?

You get a unique URL for each form you make. Drop it into your HTML `action` or hit it with `fetch`. When someone submits, Formlee processes the data and emails it to you.

Example:

```html
<form action="https://formlee.io/f/frm_prod_94827" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

No backend. No SDKs. No email server setup inside your project. Just a form that works.

---

## How it works

Flow looks like this:

```
Your Form → Formlee Endpoint → Validation & Spam Checks → Email → Your Inbox
```

### 1. Create a form in the dashboard

Give it a name, tell it where to send emails, set up redirects, whatever. You get a URL back like:

```
https://formlee.io/f/frm_prod_94827
```

### 2. Plug it into your HTML

Same as above. Just drop it in the `action`.

Or if you're using React/Next.js, you can do this:

```tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formlee.io/f/frm_prod_94827', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p>Message sent successfully!</p>}
    </form>
  );
}
```

### 3. We handle the rest

Once it hits our endpoint, we take care of:

- Field validation
- File attachments if you have them
- Rate limiting (so you don't get spammed)
- Honeypot checks
- Domain whitelisting
- CAPTCHA if you enable it

### 4. You get the email

We send you a nicely formatted notification with all the fields, plus metadata like submission time, user agent, IP, country, and links to any uploaded files.

You can also configure an auto-reply to the person who submitted the form.

### 5. Dashboard for managing everything

Instead of digging through logs, you get a dashboard where you can:

- See all submissions in one place
- Filter and inspect individual submissions
- Export as CSV or JSON
- Set up webhooks
- Connect Slack, Discord, or Google Sheets
- Test endpoints with a built-in playground

---

## Tech Stack

Nothing fancy. Just:

- Next.js
- TypeScript
- Tailwind
- Motion (animations)
- Lucide (icons)
- Node.js runtime

---

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── landing/       # Landing page sections
│   │   ├── layout/        # Navbar, sidebar, footer
│   │   └── ui/            # Shared UI components
│   │
│   ├── context/            # AppContext.tsx for global state
│   │
│   ├── data/               # Templates, mock data, docs
│   ├── types/              # TypeScript interfaces
│   │
│   ├── views/
│   │   ├── LandingPage.tsx
│   │   ├── DocsPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AuthPage.tsx
│   │   └── dashboard/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── tsconfig.json
└── package.json
```

---

## Running locally

**Requirements:** Node.js 18+ and npm/yarn/pnpm.

```bash
# Clone it
git clone <your-repo-url>
cd formlee

# Install deps
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

For production:

```bash
npm run build
npm run preview
```

Linting:

```bash
npm run lint
```

---

## Why I built this

Forms are everywhere. Contact forms, waitlists, feedback forms, job apps—you name it.

And yet, every time I start a new side project, I waste 30 minutes wiring up the same form submission flow. SMTP configs, environment variables, error handling, rate limiting... it's boring and repetitive.

Formlee is my attempt to never do that again. Set it up once, use it everywhere.

---

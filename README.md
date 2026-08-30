# Formlee

> **Formlee is a form delivery system that allows you to send form inputs directly to your emails with just a few lines of code.**

---

## Project Overview

Formlee simplifies backend form handling for developers and designers. Instead of configuring dedicated mail servers, SMTP credentials, serverless functions, or custom backend endpoints for contact forms, waitlists, surveys, and feedback widgets, Formlee provides a plug-and-play endpoint. Simply point your HTML form `action` or fetch request to Formlee, and incoming form submissions are processed and delivered directly to your inbox in real time.

---

## 🛠️ Tech Stack

Formlee is built with modern, high-performance web technologies:

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling & Design System:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation Engine:** [Motion](https://motion.dev/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Runtime Environment:** [Node.js](https://nodejs.org/)

---

## Project Walkthrough

Formlee provides an end-to-end workflow from endpoint generation to inbox delivery:

### 1. Create a Form Endpoint
- Log in to the Formlee Dashboard.
- Click **"Create Form"** and specify your form name, target recipient email, notification preferences, and redirect URL.
- Receive a unique endpoint URL (e.g. `https://formlee.io/f/{form-id}`).

### 2. Embed into Your Application
- Add the endpoint directly to any standard HTML form or Next.js page / component.
- Zero complex SDKs or heavy dependencies required.

```html
<!-- Plain HTML Form -->
<form action="https://formlee.io/f/frm_prod_94827" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

```tsx
// Next.js Form Component
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

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
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

### 3. Submission Ingestion & Spam Filtering
- When a user submits a form, Formlee parses input fields, validates data types, and processes file attachments.
- Built-in spam mitigation runs automatically, including honeypot field detection, rate limiting, domain validation, and optional CAPTCHA verification.

### 4. Direct Email Notification
- Clean, structured email summaries containing all submitted field values, metadata (timestamp, IP/country, user agent), and attachment download links are sent to your verified recipient email addresses.
- Automated confirmation emails (auto-responders) can be sent back to the submitter.

### 5. Centralized Dashboard Management & Integrations
- **Overview & Analytics:** Track submission volumes, conversion rates, and spam rejection rates over time.
- **Submissions Feed:** Inspect raw JSON payloads, filter by status (New, Read, Archived, Spam), and export records as CSV or JSON.
- **Webhooks & Third-Party Sync:** Forward incoming submissions instantly to Slack channels, Discord servers, Google Sheets, or custom HTTP webhooks.
- **Interactive Documentation & Sandbox:** Test endpoints with custom inputs directly within the in-app developer playground.

---

## Project Structure

```text
├── src/
│   ├── components/       # Reusable UI elements, layout components & navigation
│   │   ├── landing/      # Hero, features, pricing, testimonials & code preview
│   │   ├── layout/       # App navbar, dashboard sidebar, footer
│   │   └── ui/           # Buttons, modals, badges, code blocks & cards
│   ├── context/          # Global application state, authentication & data store
│   │   └── AppContext.tsx
│   ├── data/             # Form templates, mock logs & documentation guides
│   ├── types/            # TypeScript interfaces for forms, submissions & webhooks
│   ├── views/            # Main application views & dashboard modules
│   │   ├── LandingPage.tsx
│   │   ├── DocsPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AuthPage.tsx
│   │   └── dashboard/    # Forms list, submission logs, integrations & settings
│   ├── App.tsx           # Primary view router and application container
│   ├── main.tsx          # Application entry point
│   └── index.css         # Tailwind CSS styling and global tokens
├── index.html            # HTML document template
├── tsconfig.json         # TypeScript compiler configuration
└── package.json          # Project dependencies and npm scripts
```

---

## Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (or yarn / pnpm)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd formlee
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

### Build & Production Preview

- **Run type-checking and linter:**
  ```bash
  npm run lint
  ```

- **Compile production build:**
  ```bash
  npm run build
  ```

- **Preview the production build locally:**
  ```bash
  npm run preview
  ```

---

# Formlee

**Formlee is a form delivery system that allows you to send form inputs directly to your emails with just a few lines of code.**

---
## Tech Stack

- Framework: Nextjs,
- Language: TypeScript,
- Styling: Tailwind CSS,
- icons: Lucide,
- Engine: nodejs
----

## About

**Formlee enables users to build amazing platforms without worrying about the backend. it helps build simple backend contact form and many credentials maybe. Formlee handles the complex part and shows simple easy to implement codes.

## How it works
Create an account: For user to manage the formlee dashboard, the user has to have a verified account.
Create a form: Click **create form** and type in the form name.
Recieve an endpoint.

```html
<!-- Plain HTML Form -->
<form action="https://formlee.io/f/frm_prod_94827" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

## Running locally

**Requirements:** Node.js 18+ and npm/yarn/pnpm.

```bash
# Clone it
git clone http://github.com/ibeh-promise/formlee-frontend
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

Formlee is currently under development.

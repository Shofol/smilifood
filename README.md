# Setup and Customize FastFood Template

A step-by-step guide to configure and personalize your website template.

---

## 1. Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed (version 18.18 or later).
- Install a package manager like [NPM](https://docs.npmjs.com/).

---

## 2. Download and Navigate

Download and unzip the template repository, then navigate to the project directory:

```bash
cd fastFood
```

---

## 3. Install Dependencies

Install the required dependencies using NPM:

```bash
npm install --force
```

---

## 4. Start the Development Server

Start the local development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your application.

---

## 5. Customizing the Template

### 5.1 Editing Components

Modify or create new components in the `components` directory. For example:

```plaintext
src/components/Home/Hero.tsx
```

Common components like Navbar, Button, and Footer are located in the `layout` folder.

---

### 5.2 Updating Styles

TailwindCSS styles can be customized in `tailwind.config.js`. Example:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        br-primary: '#1E40AF',
      },
    },
  },
}
```

---

### 5.3 Modifying Pages

Update the page content in the `app` directory. For example, edit the home page:

```plaintext
app/page.tsx
```

---

## 6. Building for Production

When ready, build your application for production:

```bash
npm run build
```

Test the production build:

```bash
npm start
```

---

## 7. Deploying the Website

Deploy to platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

Steps to deploy:

1. Push your code to a Git repository.
2. Connect your repository to the hosting platform.
3. Follow the platform's deployment steps.

---

## Need Help?

Contact me at [jahananower@gmail.com](mailto:jahananower@gmail.com).

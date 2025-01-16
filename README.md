<div align="center">

# Blog SaaS Platform 📝

Modern and user-friendly blogging platform built with the latest web technologies.

![Landing Page](/public/project-image/landing-page.png)

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Kinde Auth](https://img.shields.io/badge/Kinde-FF4F64?style=for-the-badge&logo=kinde&logoColor=white)](https://kinde.com/)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Conform](https://img.shields.io/badge/Conform-000000?style=for-the-badge&logo=conform&logoColor=white)](https://conform.guide/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![UploadThing](https://img.shields.io/badge/UploadThing-FF0000?style=for-the-badge&logo=upload&logoColor=white)](https://uploadthing.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## ✨ Features

<div align="center">

| Feature               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| 🎨 **Modern UI/UX**   | Beautiful and intuitive interface using shadcn/ui    |
| 🔒 **Authentication** | Secure user authentication with Kinde Auth           |
| 📱 **Responsive**     | Fully responsive design for all devices              |
| ✍️ **Blog Editor**    | Rich text editor for creating beautiful blog posts   |
| 💳 **Subscriptions**  | Premium features with Stripe subscription management |
| 📤 **Image Upload**   | Easy image uploads with UploadThing                  |
| 📊 **Analytics**      | Track your blog's performance and reader engagement  |
| 🌐 **Custom Domain**  | Host your blog on your own domain                    |

</div>

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/blog-saas.git

# Navigate to the project
cd blog-saas

# Install dependencies
npm install

# Set up environment variables
cp .env

# Set up the database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application

## 🛠️ Tech Stack

<details>
<summary>Click to expand tech stack details</summary>

### Core Framework

- **[Next.js](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[React](https://reactjs.org/)** - UI library with server components

### Authentication & Payments

- **[Kinde](https://kinde.com/)** - Modern auth solution with social logins
- **[Stripe](https://stripe.com/)** - Subscription management and payments
  validation

### Form Management

- **[Zod](https://zod.dev/)** - Runtime type validation
- **[Conform](https://conform.guide/)** - Form handling and

### Database & Storage

- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[Prisma](https://www.prisma.io/)** - Type-safe ORM
- **[UploadThing](https://uploadthing.com/)** - File uploads and image hosting

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icons
- **[TipTap](https://tiptap.dev/)** - Rich text editor

### Development & Deployment

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vercel](https://vercel.com)** - Deployment platform

</details>

## 📸 Screenshots

<div align="center">

### Dashboard View

![Dashboard View](/public/project-image/dashboard.png)

### Sites View

![Sites View](/public/project-image/sites.png)

### Blog View

![Blog View](/public/project-image/blog-view.png)

### Articles View

![Articles View](/public/project-image/articles-view.png)

### Article Creation

![Article Creation](/public/project-image/create-article.png)

### Article Page

![Article Page](/public/project-image/article-page.png)

### Pricing Plans

![Pricing Plans](/public/project-image/pricing.png)

### Stripe

![Stripe Integration](/public/project-image/stripe01.png)
![Stripe Integration](/public/project-image/stripe02.png)

</div>

## 🔐 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

| Variable                         | Description              |
| -------------------------------- | ------------------------ |
| `KINDE_CLIENT_ID`                | Kinde Client ID          |
| `KINDE_CLIENT_SECRET`            | Kinde Client Secret      |
| `KINDE_ISSUER_URL`               | Kinde Issuer URL         |
| `KINDE_SITE_URL`                 | Your site URL            |
| `KINDE_POST_LOGOUT_REDIRECT_URL` | Post logout redirect URL |
| `KINDE_POST_LOGIN_REDIRECT_URL`  | Post login redirect URL  |
| `STRIPE_SECRET_KEY`              | Stripe Secret Key        |
| `STRIPE_PRICE_ID`                | Stripe Price ID          |
| `STRIPE_WEBHOOK_SECRET`          | Stripe Webhook Secret    |
| `UPLOADTHING_SECRET`             | UploadThing Secret       |
| `UPLOADTHING_APP_ID`             | UploadThing App ID       |
| `DATABASE_URL`                   | PostgreSQL database URL  |

```
KINDE_CLIENT_ID=""
KINDE_CLIENT_SECRET=""
KINDE_ISSUER_URL=""
KINDE_SITE_URL=""
KINDE_POST_LOGOUT_REDIRECT_URL=""
KINDE_POST_LOGIN_REDIRECT_URL=""

STRIPE_SECRET_KEY=""
STRIPE_PRICE_ID=""
STRIPE_WEBHOOK_SECRET=""

UPLOADTHING_SECRET=""
UPLOADTHING_APP_ID=""

DATABASE_URL=""
```

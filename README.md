# 🏫 EMS School - Modern Web Portal & Dashboard Frontend

A state-of-the-art, institutional-grade School Management Web Application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Shadcn UI**.

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Public Portal Pages](#-public-portal-pages)
- [Role-Based Dashboard Portals](#-role-based-dashboard-portals)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Theme System (Light & Dark Mode)](#-theme-system-light--dark-mode)
- [Environment Variables Setup](#-environment-variables-setup)
- [Getting Started](#-getting-started)
- [Build & Deployment](#-build--deployment)
- [License](#-license)

---

## 🚀 Project Overview

**EMS School Frontend** provides a seamless, high-performance digital experience for students, teachers, parents, and administrative staff:
- **Public Institutional Website**: World-class visual branding, admission inquiry workflows, interactive photo/video archives, and academic curriculum showcases.
- **Unified Academic ERP**: Role-based portals for real-time attendance marking, digital lesson diaries, class routines, fee management, and examination report cards.
- **Reactive Session Management**: Context-powered authentication state updating header navigation and dashboard routing instantly without page reloads.

---

## ✨ Key Features

- **⚡ Next.js 16 & React 19**: Powered by the latest React Server Components, server actions, and client-side streaming.
- **🎨 Tailwind CSS v4 & Shadcn UI**: Clean typography, high-contrast accessible layouts, and modern midnight royal glassmorphism.
- **🌓 Dual Theme Switcher**: Effortlessly switch between crisp institutional Light Mode and dark glassmorphic Dark Mode.
- **🔐 Intelligent Role Routing**: Directs logged-in users directly to their designated dashboard (`ADMIN`, `TEACHER`, `STUDENT`).
- **🔍 Instant Live Search & Filter**: Real-time keyword filtering across gallery moments, notices, and academic directories.
- **🖼️ Fullscreen Interactive Lightbox**: Full-resolution image zoom, previous/next carousel controls, and keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
- **📊 Interactive Data Visualizations**: Attendance trends, payment statuses, and student distribution charts powered by Recharts.
- **💳 Integrated Fee Payments**: Seamless online tuition and examination fee payments with SSLCommerz gateway callbacks.

---

## 🌐 Public Portal Pages

### 1. 🏠 Homepage (`/`)
- **Hero & Notice Marquee**: Urgent broadcasts and headline admissions banner.
- **Chairman's Vision**: Formal address by Founder & Chairman Md. Mominul Islam Liton.
- **Bento Photo Showcase**: Highlighted campus activities and interactive quick previews.
- **Faculty Directory Preview**: Qualified teacher spotlight with credentials.
- **Testimonials & Contact CTA**: Parent reviews and direct visit scheduling.

### 2. 🏛️ About Us (`/about`)
Composed of 10 rich, institutional modules:
1. `AboutHero`: Breadcrumbs, mission tagline, and 4 statistical impact badges.
2. `AboutLeadership`: Chairman's message, verified photo frame, and 4 core commitments.
3. `AboutVisionMission`: 3 glass cards detailing Institutional Mission, Vision, and Core Values.
4. `AboutHistory`: 14+ years chronological milestone timeline (2010 to Present) with campus photo collage.
5. `AboutCurriculum`: 3 structured academic tiers (Pre-Primary Montessori, Primary Spoken English & Math Olympiad, Secondary Science Lab & ICT).
6. `AboutFacilities`: Bento grid of 6 campus features (Smart Classrooms, Labs, Library, Sports ground, CCTV, Pure water).
7. `AboutCoCurricular`: 6 active student clubs (Debate, Robotics, Sports, Cultural, Scouting, Calligraphy).
8. `AboutFacultyPreview`: 1:20 teacher-student ratio, mentorship, and continuous teacher training.
9. `AboutFAQ`: Interactive Shadcn Accordion answering top 6 parent questions.
10. `AboutCTA`: Campus visit booking, helpline phone, and physical address.

### 3. 📸 Photo & Video Gallery (`/gallery`)
- **Instant Search Bar**: Filter moments by keyword in real-time.
- **Category Filter Pills**: Academic, Sports, Cultural, Science Lab, Awards, and Campus Life.
- **Bento Grid Layout**: High-resolution photography with hover zoom effects and date/location tags.
- **Fullscreen Lightbox Modal**: Keyboard-navigated modal with caption details and counter.
- **Video Reels & Documentaries**: In-app video player showcasing annual sports, cultural events, and campus tour reels.
- **Yearly Albums Archive**: Organized photo collections from recent academic sessions.

### 4. 📞 Contact & Admissions Desk (`/contact`)
- **Direct Helpdesk Channels**: Instant call buttons (`+880 1917-692136`), email correspondence, and campus address.
- **Interactive Admission Form**: Parent name, phone validation, target class selector (Play - Class 10), inquiry subject, and instant submit confirmation.
- **Departmental Directory**: Phone lines for Administration, Admissions, Accounts, and Transportation.
- **Google Maps & Travel Directions**: Embedded responsive map with landmark instructions for incoming visitors.
- **Admissions FAQ**: Essential paperwork requirements and principal meeting hours.

### 5. 🔑 Auth Portal (`/login`)
- Clean email & password authentication with Zod validation.
- Auto-triggers `useUser().refreshUser()` upon success to immediately activate the **Dashboard** button in the Navbar.

---

## 🎛 Role-Based Dashboard Portals

### 👑 Admin Dashboard (`/admin/dashboard`)
- **Overview KPI Cards**: Daily teacher & student attendance totals, active students, and fee collection summaries.
- **Attendance Management** (`/admin/dashboard/attendance`): Class-wise live attendance monitoring.
- **Academic Structure**:
  - Class Management (`/admin/dashboard/class`)
  - Class Times / Periods (`/admin/dashboard/classtimes`)
  - Subject Configuration (`/admin/dashboard/subject`)
  - Routines & Schedules (`/admin/dashboard/schedules`)
- **User Directories**:
  - Student Database (`/admin/dashboard/students`): Search, filter, view profile, and bulk Excel import.
  - Teacher Database (`/admin/dashboard/teachers`): Faculty management and credential assignment.
- **Financial Desk**:
  - Fee Types (`/admin/dashboard/feetype`): Set monthly tuition, exam, or admission fee amounts.
  - Payment History (`/admin/dashboard/payments`): Transaction tracking and receipts.
- **Document Generation** (`/admin/dashboard/generate`): Automated Admit Card and Testimonial PDF/print generator.

### 👨‍🏫 Teacher Dashboard (`/teacher/dashboard`)
- **Teacher Overview**: Assigned classes, today's schedule, and pending tasks.
- **Daily Classroom Diary** (`/teacher/dashboard/diary`): Log subject-wise daily homework, class notes, and student guidance.
- **Attendance Marking** (`/teacher/dashboard/attendance`): Take roll call with one-click status updates (`Present`, `Absent`, `Late`, `Leave`).
- **Routine Schedule** (`/teacher/dashboard/schedules`): Weekly timetable view.

### 🎒 Student Portal (`/dashboard`)
- **Student Attendance** (`/dashboard/attendance`): Monthly presence percentage and calendar view.
- **Digital Diary** (`/dashboard/diary`): View daily assigned homework by period and subject.
- **Class Routine** (`/dashboard/routine`): Daily class schedule, timing, and assigned teachers.
- **Exam Results** (`/dashboard/result`): Term exam marks, grade letters, and report cards.
- **Profile & Support** (`/dashboard/setting`, `/dashboard/helpline`): Student details and administrative help.

---

## 🛠 Tech Stack

| Domain | Technology | Version |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | 16.0.8 |
| **Library** | React | 19.2.1 |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS (v4) & tw-animate-css | 4.x |
| **UI Components** | Radix UI primitives & Shadcn UI | Latest |
| **Icons** | Lucide React & Tabler Icons | Latest |
| **Animations** | Framer Motion | 12.23.26 |
| **Charts** | Recharts | 2.15.4 |
| **Forms** | React Hook Form & Zod | Latest |
| **Dates** | Day.js & date-fns | Latest |
| **Toasts** | Sonner | 2.0.7 |
| **Carousels** | Embla Carousel | 8.6.0 |

---

## 📁 Project Architecture & Directory Structure

```
ems_school_frontend/
├── public/                 # Static assets, logos, and illustrations
├── src/
│   ├── app/
│   │   ├── (commonLayout)/ # Public pages layout (Navbar + Footer)
│   │   │   ├── (auth)/     # Login and auth pages
│   │   │   ├── about/      # Comprehensive About Us page
│   │   │   ├── gallery/    # Filterable photo & video gallery
│   │   │   ├── contact/    # Admissions & contact helpdesk
│   │   │   ├── layout.tsx  # Common layout wrapper
│   │   │   └── page.tsx    # School homepage
│   │   ├── (dasboardLayout)/ # Role-based dashboard layouts
│   │   │   ├── (student)/  # Student dashboard routes (/dashboard/*)
│   │   │   ├── admin/      # Admin dashboard routes (/admin/dashboard/*)
│   │   │   ├── teacher/    # Teacher dashboard routes (/teacher/dashboard/*)
│   │   │   └── layout.tsx  # Sidebar, SiteHeader, and Dashboard layout
│   │   ├── components/
│   │   │   ├── about/      # 10 modular About Us components
│   │   │   ├── contact/    # Contact form, cards, map, and FAQ modules
│   │   │   ├── gallery/    # Gallery hero, grid, lightbox, and video modules
│   │   │   ├── module/     # Home and Dashboard business modules
│   │   │   └── shared/     # Navbar, Footer, Logo, etc.
│   │   ├── services/       # Server actions & fetch requests (auth, attendance, etc.)
│   │   ├── globals.css     # Tailwind CSS 4 theme variables and styles
│   │   └── layout.tsx      # Root application layout & ThemeProvider
│   ├── components/
│   │   ├── ui/             # Shadcn reusable UI components (Accordion, Button, Dialog, etc.)
│   │   ├── app-sidebar.tsx # Dynamic role-based sidebar
│   │   └── nav-user.tsx    # User profile dropdown with live logout
│   ├── config/             # Environment configuration (`env.ts`)
│   ├── context/            # UserContext provider for client-side auth state
│   ├── hooks/              # Custom hooks (`useUser.ts`, etc.)
│   ├── lib/                # Utility helpers (`cn`, `serverFetch`, `JwtToken`)
│   ├── routes/             # Role route definitions (`adminRoutes`, `teacherRoutes`, `studentRoutes`)
│   └── types/              # TypeScript interface declarations
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🎨 Theme System (Light & Dark Mode)

The frontend features a comprehensive Theme System powered by `next-themes`:
- **Light Theme**: Clean, academic, and accessible with crisp borders and soft pastel washes.
- **Dark Theme**: Deep royal midnight background (`#060D1A`), glowing blue/indigo accents, and frosted glassmorphic backdrops (`backdrop-blur-md`).
- **Seamless Switching**: Users toggle theme via the sun/moon button in the Navbar, with instantaneous persistence across page transitions.

---

## ⚙️ Environment Variables Setup

Create a `.env` file in the `ems_school_frontend/` root:

```env
# Backend REST API URL
NEXT_PUBLIC_BACKEND_URL="http://localhost:5000/api/v1"

# Frontend Application URL
NEXT_PUBLIC_FRONTEND_URL="http://localhost:3000"

# JWT Secret for client token verification (if applicable)
JWT_SECRET="your_super_secret_jwt_key_here"
```

---

## 🚀 Getting Started

1. **Navigate to the frontend directory**:
   ```bash
   cd ems_school_frontend
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or: npm install / yarn install
   ```

3. **Start Development Server**:
   ```bash
   pnpm dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) in your browser.*

---

## 📦 Build & Deployment

1. **Create optimized production build**:
   ```bash
   pnpm build
   ```

2. **Start production server**:
   ```bash
   pnpm start
   ```

3. **Deploy on Vercel**:
   The repository includes a ready-to-use `vercel.json`. Simply import the project repository into Vercel and configure the environment variables (`NEXT_PUBLIC_BACKEND_URL`).

---

## 📄 License
This project is licensed under the MIT License.

# Architecture Overview

Havenly is a premium rental marketplace built with a modern stack focusing on performance, aesthetics, and developer experience.

## System Architecture

Havenly follows a modern **JAMstack architecture** using Next.js for the frontend.

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                           │
│  Next.js + TypeScript + Tailwind CSS + Radix UI            │
│  (App Router, Server Components where applicable)           │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ├──────────────┬──────────────┬──────────────┐
                 │              │              │              │
                 ▼              ▼              ▼              ▼
         ┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐
         │   (Planned)  │ │  Vercel   │ │   Edge   │ │   Browser    │
         │   Backend    │ │   Hosting  │ │  Config  │ │   Storage    │
         └──────┬───────┘ └────────── └──────────┘ └──────────────┘
                │
                └─── Data (lib/dummy-data.ts)
```

### 1. Frontend Design System
- **Core**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS for utility-first styling.
- **Components**: Radix UI primitives for accessible, high-quality interactive components.
- **Icons**: Lucide React for consistent iconography.
- **Animations**: Framer Motion and CSS transitions for a premium feel.

### 2. Data Flow
**Property Discovery:**
```
User Search/Filter → Next.js Page → (Future: Database Query) → 
Filter logic (lib/dummy-data.ts) → Responsive Grid → Update UI
```

**Booking Flow (Planned):**
```
Property Selection → Auth Check → Calendar Reservation → 
Payment Integration → Database Update → User Confirmation
```

### 3. Key Directories
- `app/`: Contains the application routes and layout.
- `components/`: Pure UI components and complex feature components.
- `lib/`: Utility functions and data schemas.
- `styles/`: Global CSS and theme configurations.

### 4. Performance Optimization
- **Image Optimization**: Using `next/image` for automatic resizing and lazy loading.
- **Font Optimization**: `next/font` for zero layout shift typography.
- **Bundle Size**: Minimal external dependencies, leveraging native web APIs.

### 5. Planned Enhancements
1. **Backend Integration**: Move from local dummy data to a live PostgreSQL database.
2. **Auth Layer**: Implement secure login for hosts and guests.
3. **Map Integration**: Dynamic maps for property location visualization.
4. **Booking Engine**: Real-time availability and booking management.

---

**Last Updated**: April 2026  
**Maintained By**: Akshay Kumar

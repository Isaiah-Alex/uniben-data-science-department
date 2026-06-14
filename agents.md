# Project Rules — Next.js + TypeScript + React Compiler

## Stack

- Next.js (App Router)
- React
- TypeScript
- React Compiler
- Tailwind CSS
- pnpm
- shadcn-ui

---

## Architecture Principles

1. Prefer Server Components by default
2. Add "use client" only when required
3. Keep components small and composable
4. Co-locate route-specific code
5. Shared UI belongs in /components
6. Business logic belongs in /lib
7. Pure helpers belong in /utils

---

## Folder Structure

src/
│
├── app/
│   ├── (public)/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
│
├── features/
│   ├── news/
│   ├── lecturers/
│   ├── programs/
│   └── admissions/
│
├── hooks/
├── lib/
├── utils/
├── types/
└── constants/

---

## React Rules

Default:

Server Component

Only use Client Components for:

- forms
- local state
- effects
- browser APIs
- event handlers

Avoid:

- unnecessary "use client"
- deep prop drilling
- large client trees

---

## React Compiler Rules

DO NOT optimize manually first.

Avoid:

- useMemo
- useCallback
- React.memo

Use them ONLY after profiling.

Write simple React.

Prefer:

BAD:

const value = useMemo(
 () => expensive(data),
 [data]
)

GOOD:

const value = expensive(data)

React Compiler handles many optimizations.

---

## TypeScript Rules

Never use:

any

Prefer:

unknown
generics
union types

Always:

- explicit return types
- strict mode
- inferred props

Example:

type Props = {
 title: string
}

export function Card(
 props: Props
): JSX.Element

---

## Component Rules

Max:

200 lines

Extract if:

- repeated twice
- nested deeply

Pattern:

Page
→ Section
→ Card
→ Primitive

---

## Styling Rules

Tailwind only

Use:

cn()

Avoid:

inline styles

Component order:

container
layout
spacing
typography
colors
states

Example:

className="
flex
gap-4
p-4
text-sm
"

---

## Data Fetching

Prefer:

Server Components

Use:

fetch()

Avoid:

client fetching
unless interactive

Cache intentionally.

---

## Imports

Use aliases:

@/components
@/lib
@/utils

Avoid:

../../../

---

## State

Server State:
Server Components

UI State:
useState

Complex:
Zustand

Avoid:
global state by default

---

## Forms

Use:

react-hook-form

Validation:

zod

Never validate only client-side.

---

## Accessibility

Always:

semantic HTML

Buttons:
button

Navigation:
nav

Images:
alt required

---

## Color Rules

- Never use static colours directly in components
- Always use CSS variables
- Always use semantic tokens
- Always support light and dark mode
- Never use hardcoded Tailwind colors (`bg-blue-500`, `text-red-400`, etc.) for application UI
- Prefer design tokens over arbitrary values
- Keep color definitions centralized

### Use

GOOD

```tsx
className="bg-primary text-primary-foreground"
```

GOOD

```css
--primary: ...
--background: ...
--muted: ...
```

BAD

```tsx
className="bg-[#388EED]"
```

BAD

```tsx
className="text-red-500"
```

Exception:
- Data visualization
- Brand logos
- Temporary skeleton/loading states

---

## shadcn/ui Rules

- Always prefer shadcn/ui components before creating custom UI
- Extend shadcn components instead of rewriting them
- Never modify generated shadcn component internals unless necessary
- Wrap custom behavior around shadcn primitives
- Use `cn()` for merging class names
- Keep variants inside `class-variance-authority (cva)`
- Components must remain composable
- Use Radix patterns when available
- Maintain accessibility defaults from shadcn
- Preserve keyboard navigation
- Preserve focus states
- Prefer composition over prop explosion

### Component Order

Primitive
↓
shadcn/ui
↓
Feature Component
↓
Page

Example:

```txt
Button
↓
SubmitButton
↓
LoginForm
↓
LoginPage
```

---

## Styling Rules

- Use Tailwind only
- Use utility classes first
- Avoid custom CSS unless reusable
- Never use inline styles
- Prefer `gap` over margin spacing
- Prefer `container` over fixed widths
- Use responsive modifiers (`md:`, `lg:`)
- Keep class order consistent

Order:

layout
spacing
size
typography
color
effects
states

GOOD

```tsx
className="
flex
gap-4
p-4
text-sm
bg-card
hover:bg-accent
"
```

---

## Theme Rules

- Theme must live in CSS variables
- Use `globals.css` as token source
- Components must never know actual color values
- UI should adapt automatically when theme changes

Allowed:

```tsx
bg-background
text-foreground
border-border
```

Avoid:

```tsx
bg-white
text-black
border-gray-300
```

## Performance

Use:

dynamic imports

Avoid:

large client bundles

Prefer:

streaming
Suspense

Measure before optimizing.

---

## Environment

Public:

NEXT_PUBLIC_*

Private:

never expose secrets

Use:

.env.local

Restart dev server after env changes.

---

## Testing

Unit:
Vitest

E2E:
Playwright

---

## Git

Branch:

feature/*
fix/*
refactor/*

Commits:

feat:
fix:
refactor:

---

## Documentation

Every feature needs:

README.md

Include:

purpose
data flow
dependencies

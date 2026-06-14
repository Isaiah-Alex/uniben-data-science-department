# Next.js Rules
(Project: Next.js + TypeScript + React Compiler + App Router)

---

## General Rules

- Prefer App Router
- Prefer Server Components
- Prefer file-based routing
- Keep components small
- Co-locate route-specific code
- Avoid React SPA architecture

Never:

- recreate React Router
- manually manage route trees
- wrap everything in Context
- make every component client-side

---

## Routing Rules

Use:

app/

Example:

app/
├── page.tsx
├── layout.tsx
├── news/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

Never:

routes/
pages/
router/

Use:

Link

Avoid:

window.location

GOOD

<Link href="/programs" />

BAD

<a href="/programs">

---

## Server Component Rules

Default:

Server Component

Only add:

"use client"

when necessary.

Allowed:

- event handlers
- useState
- useEffect
- browser APIs
- refs

Avoid:

"use client"

at page level.

BAD

"use client"

export default function Page()

GOOD

export default async function Page()

---

## Client Component Rules

Client components should:

- stay small
- wrap interaction only

GOOD

Page
↓
ServerSection
↓
ClientButton

BAD

Page
↓
Entire Client Tree

---

## Data Fetching Rules

Fetch on server.

GOOD

async function Page()

Avoid:

useEffect fetch

BAD

useEffect(() => {
 fetch(...)
})

Prefer:

await fetch()

Cache intentionally.

---

## React Compiler Rules

React Compiler enabled.

Do not optimize manually.

Avoid:

useMemo
useCallback
React.memo

Only use after profiling.

GOOD

const data = calculate()

BAD

const data = useMemo(
 () => calculate(),
 []
)

Use:

"use memo"

only when needed.

---

## Component Rules

Shared:

components/

Route-only:

_components/

Example:

app/
└── news/
    └── _components/

Never:

store everything globally.

---

## Layout Rules

Use:

layout.tsx

Avoid:

duplicating navbars.

Example:

RootLayout
↓
Section Layout
↓
Page

---

## Metadata Rules

Never:

react-helmet

Use:

metadata

GOOD

export const metadata = {
 title: "Programs"
}

Dynamic:

generateMetadata()

---

## Image Rules

Always:

Image

Never:

img

GOOD

<Image />

BAD

<img />

---

## Font Rules

Always:

next/font

Never:

Google Fonts script tags

GOOD

import { Inter }

---

## Navigation Rules

Use:

useRouter()

Avoid:

history.push()

GOOD

router.push()

BAD

navigate()

---

## Loading Rules

Use:

loading.tsx

Never:

manual loading screens

---

## Error Rules

Use:

error.tsx

Never:

large try/catch UIs

---

## API Rules

Use:

app/api/

Avoid:

Express inside Next

GOOD

app/api/news/route.ts

---

## Environment Rules

Client:

NEXT_PUBLIC_

Server:

process.env

Never expose secrets.

Restart after env updates.

---

## TypeScript Rules

Strict mode.

Never:

any

Prefer:

unknown
type
interface
generics

Always:

typed props

---

## Styling Rules

Tailwind only.

Use:

cn()

Avoid:

CSS files per component.

---

## shadcn/ui Rules

Always use shadcn first.

Never rebuild:

Button
Dialog
Input
Card

Extend.

Do not modify generated internals.

Keep:

variants → cva

Use:

components/ui/

---

## State Rules

Server State
→ Server Components

UI State
→ useState

Complex
→ Zustand

Avoid:
global state first.

---

## Performance Rules

Use:

dynamic()

Suspense

streaming

Avoid:

hydration-heavy pages

Do not prematurely optimize.

---

## Migration Rules (React → Next)

Replace:

react-router-dom
→ Next Router

Replace:

Helmet
→ Metadata

Replace:

img
→ Image

Replace:

manual fonts
→ next/font

Replace:

client fetch
→ server fetch

Replace:

SPA thinking
→ route-first thinking

Do not copy React project structure directly.

Rebuild structure intentionally.

---

## Folder Structure

src/
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── utils/
├── types/
├── constants/
└── styles/
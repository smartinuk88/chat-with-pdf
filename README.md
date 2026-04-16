# Chat to PDF

Transform your PDF documents into interactive conversations. Upload a document 
and ask questions about its contents — the app finds the most relevant sections 
and generates accurate, context-aware responses powered by OpenAI.

🔗 [Live Demo](https://chat-with-pdf-challenge-zeta.vercel.app/sign-in?redirect_url=/dashboard)

---

## What it does

- Upload PDF documents via drag and drop
- Chat with your documents in real time — ask questions and get answers 
  grounded in the document's content
- Download and delete your documents
- Free and Pro tiers with different upload and prompt limits
- Secure authentication and payment handling

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router), TypeScript |
| Auth | Clerk |
| AI | OpenAI, Langchain |
| Vector Database | Pinecone |
| File Storage | Firebase Storage, Firestore |
| Payments | Stripe + Webhooks |
| UI | Shadcn/UI, DaisyUI, Tailwind CSS |
| File Upload | React Dropzone |
| Deployment | Vercel |

---

## How it works

### Document upload and processing

When a user uploads a PDF:

PDF uploaded via React Dropzone
→ File stored in Firebase Storage
→ Document reference saved in Firestore
→ PDF text extracted and split into chunks
→ Each chunk converted to a vector embedding via OpenAI
→ Embeddings stored in Pinecone

### Chat

When a user sends a message:

User question submitted
→ Question converted to a vector embedding
→ Pinecone searched for semantically similar document chunks
→ Relevant chunks retrieved and injected into the prompt
→ Full prompt sent to OpenAI
→ Response streamed back to the user
→ Conversation history saved

This pattern is called **RAG — Retrieval Augmented Generation**. Rather than 
sending the entire document to the AI on every query (which would be slow, 
expensive, and limited by token constraints), only the most relevant sections 
are retrieved and sent. This makes the app accurate, efficient, and capable of 
handling large documents.

### Free vs Pro tiers

| Feature | Free | Pro |
|---|---|---|
| Documents | Limited | Unlimited |
| Messages per document | Limited | Unlimited |
| File size | Standard | Extended |

Tier management is handled via Stripe. A custom webhook listens for Stripe 
payment events and updates the user's subscription status in Firestore — 
ensuring access is granted immediately after payment without the user needing 
to refresh or re-authenticate.

---

## Key Technical Decisions

### RAG over full-document context
Sending an entire PDF to OpenAI on every query is impractical for large 
documents — token limits, latency, and cost all become problems. Vector 
similarity search via Pinecone solves this by retrieving only the most 
semantically relevant sections, keeping responses fast and costs manageable 
regardless of document size.

### Clerk for authentication
Clerk handles authentication with minimal setup and provides tight Next.js 
App Router integration — protecting routes at the middleware level rather than 
requiring per-page auth checks. It also manages session persistence and 
supports multiple OAuth providers out of the box.

### Stripe webhooks for subscription management
Rather than polling Stripe for payment status, the app uses webhooks — Stripe 
proactively sends a signed event to an API endpoint when a payment succeeds. 
The signature is verified before trusting the event, preventing spoofed 
requests from granting unauthorised Pro access.

### Firebase for file storage
Firebase Storage handles PDF storage with Firestore storing document metadata 
and references. This separates the concerns of file storage and structured 
data while keeping both under the Firebase umbrella for consistent access 
control rules.

---

## What I'd do differently

This project was built as part of a structured learning programme. With my 
current knowledge, the main changes I'd make are:

- **Replace Firebase with PostgreSQL + Prisma** — for a structured data model 
  with proper relational queries, Postgres would be more appropriate than 
  Firestore's document model. Firestore works well here but a relational 
  database would be cleaner for the subscription and document metadata.
- **Add proper error boundaries and loading states** — the UI would benefit 
  from more robust handling of failed uploads, failed embeddings, and OpenAI 
  rate limit errors.
- **Extract business logic from API routes** — the RAG pipeline logic could be 
  better separated into a dedicated service layer, making it easier to test 
  and modify independently.
- **Add tests** — the core RAG pipeline and webhook handling are untested. 
  Integration tests for the document processing flow and unit tests for the 
  webhook verification would significantly improve reliability.

---

## Running locally

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env.local` file with the following:

Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

OpenAI
OPENAI_API_KEY=

Pinecone
PINECONE_API_KEY=

Firebase
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=

Stripe
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

4. Start the development server:
```bash
npm run dev
```

> **Note:** You will need active accounts and API keys for Clerk, OpenAI, 
> Pinecone, Firebase, and Stripe to run the full application locally.

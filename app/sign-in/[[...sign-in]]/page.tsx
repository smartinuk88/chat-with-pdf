import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex-1 grid gap-5 lg:grid-cols-2 justify-center items-center p-5 overflow-scroll bg-floral-500">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-indigo-600 mb-3">
          Chat to PDF
        </h1>
        <p>Transform Your PDFs Into Interactive Conversations</p>
      </div>
      <SignIn />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

export default function SignUpPage() {
  return (
    <div className="grid w-full flex-1 items-center bg-gradient-to-bl from-white to-indigo-600 px-4 sm:justify-center">
      <SignUp.Root>
        <SignUp.Step
          name="start"
          className="flex flex-col justify-center items-center space-y-6 bg-white px-4 py-10 sm:w-96 sm:px-6 rounded-md drop-shadow-xl"
        >
          <h1>Create an account</h1>
          <Button
            asChild
            variant="outline"
            className="flex w-full items-center justify-center"
          >
            <Clerk.Connection name="google">
              Sign up with Google
            </Clerk.Connection>
          </Button>

          <Clerk.Field name="emailAddress">
            <Clerk.Label className="sr-only">Email</Clerk.Label>
            <Clerk.Input
              type="email"
              required
              placeholder="Email"
              className="w-full border rounded-sm border-indigo-300 bg-white p-2 text-sm/6 outline-none placeholder:text-neutral-400 focus:border-indigo-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
            />
            <Clerk.FieldError className="text-center" />
          </Clerk.Field>

          <Clerk.Field name="password">
            <Clerk.Label className="sr-only">Password</Clerk.Label>
            <Clerk.Input
              required
              placeholder="Password"
              className="w-full border rounded-sm border-indigo-300 bg-white p-2 text-sm/6 outline-none placeholder:text-neutral-400 focus:border-indigo-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
            />
            <Clerk.FieldError className="text-center" />
          </Clerk.Field>

          <Button asChild>
            <SignUp.Action submit>Sign up</SignUp.Action>
          </Button>
        </SignUp.Step>

        <SignUp.Step
          name="verifications"
          className="flex flex-col justify-center items-center space-y-6 bg-white px-4 py-10 sm:w-96 sm:px-6 rounded-md drop-shadow-xl"
        >
          <SignUp.Strategy name="email_code">
            <h1>Check your email</h1>

            <Clerk.Field name="code">
              <Clerk.Label className="sr-only">Email Code</Clerk.Label>
              <Clerk.Input
                type="code"
                required
                placeholder="Email Code"
                className="w-full border rounded-sm border-indigo-300 bg-white p-2 text-sm/6 outline-none placeholder:text-neutral-400 focus:border-indigo-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
              />
              <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
            </Clerk.Field>

            <SignUp.Action submit>Verify</SignUp.Action>
          </SignUp.Strategy>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}

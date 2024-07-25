"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignInPage() {
  return (
    <div className="grid w-full flex-1 items-center bg-gradient-to-bl from-white to-indigo-600 px-4 sm:justify-center">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="flex flex-col justify-center items-center space-y-6 rounded-2xl bg-white px-4 py-10 ring-1 ring-inset ring-indigo-600 sm:w-96 sm:px-6"
        >
          <header>
            <h1 className="text-center">
              Sign in to <br />
              <span className="text-3xl text-indigo-600">Chat With PDF</span>
            </h1>
          </header>

          <Button asChild variant="outline">
            <Clerk.Connection name="google">
              <GoogleIcon className="pr-1" /> Sign in with Google
            </Clerk.Connection>
          </Button>

          <Clerk.Field
            name="identifier"
            className="flex space-x-2 items-center"
          >
            <Clerk.Label>Email</Clerk.Label>

            <Clerk.Input className="border border-indigo-600 rounded-sm p-1" />

            <Clerk.FieldError />
          </Clerk.Field>

          <Button asChild>
            <SignIn.Action submit>Continue</SignIn.Action>
          </Button>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}

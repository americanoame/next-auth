"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpDefaultValues } from "@/lib/constants";
import Link from "next/link";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUp } from "@/lib/actions/user.actions";

import { useSearchParams } from "next/navigation";

const SignUPForm = () => {
  const [data, action] = useActionState(signUp, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Submitting..." : "Sign Up"}
      </Button>
    );
  };

  return (
    <form action={action}>
    
    <input type='hidden' name='callbackUrl' value={callbackUrl} />

      <div className="space-y-6">
      <div>
          <Label htmlFor="email">Name</Label>
          <Input
            id="name"
            name="name"
            
            type="text"
            defaultValue={signUpDefaultValues.email}
            autoComplete="name"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            
            type="text"
            defaultValue={signUpDefaultValues.email}
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            defaultValue={signUpDefaultValues.password}
            autoComplete="current-password"
          />
        </div>

        <div>
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            required
            type="password"
            defaultValue={signUpDefaultValues.confirmPassword}
            autoComplete="confirmPassword"
          />
        </div>
        <div>
          <SignUpButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Alredy have an account?{" "}
          <Link target="_self" className="link" href="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUPForm;

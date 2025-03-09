import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import { auth } from '@/auth';
import { redirect } from "next/navigation";
import SignUPForm from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUp = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {

  const { callbackUrl } = await props.searchParams;

  const session = await auth();


  if (session) {
    console.log("Redirecting to home page...");
    return redirect(callbackUrl || '/');
  }


  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            {APP_NAME}
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
          Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignUPForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;

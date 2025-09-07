import { LoginForm } from "@/components/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - TrackSecure",
  description: "Sign in to your TrackSecure account to access device tracking and management features.",
};

export default function LoginPage() {
  return <LoginForm />;
}
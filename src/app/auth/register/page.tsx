import { RegisterForm } from "@/components/auth/register-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - TrackSecure",
  description: "Create your TrackSecure account to start tracking and protecting your devices with advanced security features.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
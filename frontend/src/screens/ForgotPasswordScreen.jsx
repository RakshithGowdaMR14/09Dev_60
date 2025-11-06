import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function ForgotPasswordScreen() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (vals) => {
    toast.message("Password reset link sent to " + vals.email);
  };

  return (
    <div
      className="container section"
      style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}
    >
      <Card className="shadow-sm" style={{ maxWidth: 480 }}>
        <h2 className="h2" style={{ marginBottom: 8 }}>
          Forgot Password
        </h2>
        <p className="small" style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Enter your email address to receive a password reset link.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12 }}>
          <label className="small">Email Address</label>
          <div style={{ position: "relative" }}>
            <Input type="email" placeholder="you@example.com" {...register("email")} />
            <Mail size={18} style={{ position: "absolute", right: 12, top: 14, color: "#9CA3AF" }} />
          </div>

          <Button type="submit" style={{ marginTop: 8 }}>
            Send Reset Link
          </Button>

          <div className="small" style={{ marginTop: 8 }}>
            Remember your password?{" "}
            <Link to="/login" style={{ color: "var(--brand-primary)" }}>
              Sign In
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
    
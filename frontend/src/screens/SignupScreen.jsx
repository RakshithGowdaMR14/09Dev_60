import { useForm } from "react-hook-form";
import { Mail, Lock, User } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export default function SignupScreen() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (vals) => {
    toast.success("Account created successfully!");
    navigate("/onboarding");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left panel (image background) */}
      <div
        className="grad-primary"
        style={{
          flex: 1,
          color: "#fff",
          display: "none",
          padding: "48px",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ display: "grid", placeItems: "center", height: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <h1 className="h1" style={{ color: "#fff" }}>
              Join Smart Medicine Locator
            </h1>
            <p className="body" style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>
              Compare 500+ pharmacies instantly and find your savings.
            </p>
          </div>
        </div>
      </div>

      {/* Right panel (form) */}
      <div style={{ flex: "0 0 560px", display: "grid", placeItems: "center", padding: "48px" }}>
        <Card className="shadow-sm">
          <h2 className="h2" style={{ marginBottom: 8 }}>
            Create Account
          </h2>
          <p className="small" style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
            Enter your details to sign up
          </p>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12, width: "min(420px, 80vw)" }}>
            <label className="small">Full Name</label>
            <div style={{ position: "relative" }}>
              <Input placeholder="John Doe" {...register("name")} />
              <User size={18} style={{ position: "absolute", right: 12, top: 14, color: "#9CA3AF" }} />
            </div>

            <label className="small">Email</label>
            <div style={{ position: "relative" }}>
              <Input type="email" placeholder="you@example.com" {...register("email")} />
              <Mail size={18} style={{ position: "absolute", right: 12, top: 14, color: "#9CA3AF" }} />
            </div>

            <label className="small">Password</label>
            <div style={{ position: "relative" }}>
              <Input type="password" placeholder="••••••••" {...register("password")} />
              <Lock size={18} style={{ position: "absolute", right: 12, top: 14, color: "#9CA3AF" }} />
            </div>

            <label className="small" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" required /> I agree to the{" "}
              <a href="#" style={{ color: "var(--brand-primary)" }}>
                Terms & Privacy Policy
              </a>
            </label>

            <Button type="submit" style={{ marginTop: 8 }}>
              Create Account
            </Button>
            <div className="small" style={{ marginTop: 8 }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "var(--brand-primary)" }}>
                Sign in
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

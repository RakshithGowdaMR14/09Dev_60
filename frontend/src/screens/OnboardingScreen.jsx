import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const next = () => {
    if (step < 3) setStep(step + 1);
    else navigate("/home");
  };

  const skip = () => navigate("/home");

  const steps = [
    {
      title: "Welcome to Smart Medicine Locator",
      desc: "We’ll help you find medicines faster and at the best prices near you.",
      illustration: "💊",
    },
    {
      title: "Enable Location Access",
      desc: "Allow access to your location to show nearby pharmacies and accurate prices.",
      illustration: "📍",
    },
    {
      title: "Set Reminders & Preferences",
      desc: "Get notified when your medicines are available or prices drop.",
      illustration: "⏰",
    },
  ];

  const current = steps[step - 1];

  return (
    <div className="container section" style={{ textAlign: "center", maxWidth: 640 }}>
      <div className="h2" style={{ marginBottom: 8 }}>
        Onboarding
      </div>

      <div className="progress" style={{ margin: "16px 0" }}>
        <span style={{ width: `${(step / 3) * 100}%` }} />
      </div>

      <Card>
        <div style={{ fontSize: 60 }}>{current.illustration}</div>
        <div className="h3" style={{ marginTop: 12 }}>
          {current.title}
        </div>
        <p className="body" style={{ color: "var(--text-secondary)", marginTop: 8 }}>
          {current.desc}
        </p>
      </Card>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <Button variant="outline" onClick={skip}>
          Skip
        </Button>
        <Button onClick={next}>{step < 3 ? "Continue" : "Finish"}</Button>
      </div>
    </div>
  );
}

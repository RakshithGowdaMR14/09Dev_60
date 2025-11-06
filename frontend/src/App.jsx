import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import OnboardingScreen from "./screens/OnboardingScreen.jsx";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen.jsx";
import NotFound from "./screens/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/onboarding" element={<OnboardingScreen />} />
      <Route path="/forgot" element={<ForgotPasswordScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

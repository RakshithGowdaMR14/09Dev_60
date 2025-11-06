import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "motion/react";

// Screens
import LoginScreen from "./screens/LoginScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen.jsx";
import OnboardingScreen from "./screens/OnboardingScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import SearchScreen from "./screens/SearchScreen.jsx";
import ResultsScreen from "./screens/ResultsScreen.jsx";
import PharmacyDetailsScreen from "./screens/PharmacyDetailsScreen.jsx";
import UploadPrescriptionScreen from "./screens/UploadPrescriptionScreen.jsx";
import SubstitutesScreen from "./screens/SubstitutesScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import NotFound from "./screens/NotFound.jsx";
import UserProfile from "./screens/UserProfile.jsx";
import PharmacyDashboard from "./screens/PharmacyDashboard.jsx";

// Shared Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const location = useLocation();

  // Determine if Header/Footer should be hidden on auth screens
  const hideLayout = ["/", "/signup", "/forgot", "/onboarding"].includes(
    location.pathname
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--surface)",
      }}
    >
      {/* Notifications */}
      <Toaster richColors position="top-right" />

      {/* Header (hidden on auth screens) */}
      {!hideLayout && <Header />}

      {/* Page Transitions */}
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Routes location={location}>
              {/* Auth Flow */}
              <Route path="/" element={<LoginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/forgot" element={<ForgotPasswordScreen />} />
              <Route path="/onboarding" element={<OnboardingScreen />} />

              {/* Main App Flow */}
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/profile" element={<UserProfile/>}/>
              <Route path="/pharmacy-dashboard" element={<PharmacyDashboard />} />
              <Route path="/pharmacy-dashboard" element={<PharmacyDashboard />} />

              <Route path="/search" element={<SearchScreen />} />
              <Route path="/results" element={<ResultsScreen />} />
              <Route path="/pharmacy/:id" element={<PharmacyDetailsScreen />} />
              <Route
                path="/upload-prescription"
                element={<UploadPrescriptionScreen />}
              />
              <Route path="/substitutes" element={<SubstitutesScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer (hidden on auth screens) */}
      {!hideLayout && <Footer />}
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import OnboardingScreen from './screens/OnboardingScreen'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import ResultsScreen from './screens/ResultsScreen'
import PharmacyDetailsScreen from './screens/PharmacyDetailsScreen'
import UploadPrescriptionScreen from './screens/UploadPrescriptionScreen'
import SubstitutesScreen from './screens/SubstitutesScreen'
import ProfileScreen from './screens/ProfileScreen'
import NotFound from './screens/NotFound'
import { AppStoreProvider } from './lib/store'

export default function App() {
  // top-level layout (Header hidden on auth pages)
  return (
    <AppStoreProvider>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/forgot" element={<ForgotPasswordScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/search" element={<ScreenWithChrome><SearchScreen/></ScreenWithChrome>} />
        <Route path="/results" element={<ScreenWithChrome><ResultsScreen/></ScreenWithChrome>} />
        <Route path="/pharmacy/:id" element={<ScreenWithChrome><PharmacyDetailsScreen/></ScreenWithChrome>} />
        <Route path="/upload" element={<ScreenWithChrome><UploadPrescriptionScreen/></ScreenWithChrome>} />
        <Route path="/substitutes" element={<ScreenWithChrome><SubstitutesScreen/></ScreenWithChrome>} />
        <Route path="/profile" element={<ScreenWithChrome><ProfileScreen/></ScreenWithChrome>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppStoreProvider>
  )
}

function ScreenWithChrome({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

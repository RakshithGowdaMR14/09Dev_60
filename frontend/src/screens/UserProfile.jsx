import React, { useState } from "react"
import Card from "../components/Card"
import Button from "../components/Button"
import Input from "../components/Input"
import { motion } from "motion/react"
import { User, Mail, Phone, Calendar, ShieldCheck, Edit3, Save, X } from "lucide-react"

export default function UserProfile() {
  const [editMode, setEditMode] = useState(false)
  const [user, setUser] = useState({
    name: "Keerthi Narayan",
    email: "demo@med.com",
    phone: "+91 98765 43210",
    role: "Registered User",
    joined: "March 2025",
  })

  const [formData, setFormData] = useState(user)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSave = () => {
    setUser(formData)
    setEditMode(false)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--surface)",
        padding: "40px 80px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      {/* Top Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "var(--text)" }}>
          User Profile
        </h1>
        <Button
          variant={editMode ? "outline" : "primary"}
          onClick={() => (editMode ? setEditMode(false) : setEditMode(true))}
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          {editMode ? <X size={16} /> : <Edit3 size={16} />}
          {editMode ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: 32,
          alignItems: "start",
        }}
      >
        {/* Left Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card
            style={{
              padding: "32px 24px",
              borderRadius: "var(--radius-xl)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "var(--shadow-md)",
              background: "#fff",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "var(--blue-600)",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                fontSize: 46,
                fontWeight: 700,
                marginBottom: 16,
                boxShadow: "0 0 20px rgba(37,99,235,0.35)",
              }}
            >
              {user.name[0]}
            </motion.div>

            <h2 style={{ margin: 0, fontWeight: 700 }}>{user.name}</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 4 }}>{user.role}</p>

            <div style={{ height: 1, width: "100%", background: "var(--border)", margin: "24px 0" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
              <InfoRow icon={<Mail size={18} />} text={user.email} />
              <InfoRow icon={<Phone size={18} />} text={user.phone} />
              <InfoRow icon={<Calendar size={18} />} text={`Joined: ${user.joined}`} />
              <InfoRow
                icon={<ShieldCheck size={18} color="var(--blue-600)" />}
                text="Account verified"
              />
            </div>
          </Card>
        </motion.div>

        {/* Right Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Card
            style={{
              padding: "36px",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-md)",
              background: "#fff",
            }}
          >
            <h3 style={{ marginBottom: 24, fontSize: 20, fontWeight: 600 }}>Account Information</h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <FormField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                editable={editMode}
              />
              <FormField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                editable={editMode}
              />
              <FormField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                editable={editMode}
              />
              <FormField label="User Role" value={formData.role} editable={false} />
            </div>

            {editMode && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 32,
                  gap: 12,
                }}
              >
                <Button variant="outline" onClick={() => setEditMode(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Save size={16} /> Save Changes
                </Button>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

/* -------- Small Reusable Subcomponents -------- */

function InfoRow({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
      <span style={{ color: "var(--blue-600)" }}>{icon}</span>
      <span>{text}</span>
    </div>
  )
}

function FormField({ label, name, value, onChange, editable }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-secondary)",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      {editable ? (
        <Input name={name} value={value} onChange={onChange} />
      ) : (
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)",
            padding: "10px 12px",
            background: "var(--surface)",
            color: "var(--text)",
            fontSize: 14,
          }}
        >
          {value}
        </div>
      )}
    </div>
  )
}

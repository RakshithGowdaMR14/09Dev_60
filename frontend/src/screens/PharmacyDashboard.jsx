import React, { useState } from "react"
import Card from "../components/Card"
import Button from "../components/Button"
import Input from "../components/Input"
import { motion } from "motion/react"
import { Building2, Mail, MapPin, Phone, Upload, Package, IndianRupee, CheckCircle2, Plus, Trash2 } from "lucide-react"

export default function PharmacyDashboard() {
  const [pharmacy, setPharmacy] = useState({
    name: "CityCare Pharmacy",
    email: "citycarepharma@gmail.com",
    phone: "+91 98456 12345",
    address: "12 MG Road, Bangalore, India",
    license: "PHA-2025-789",
  })

  const [medicineForm, setMedicineForm] = useState({
    name: "",
    price: "",
    stock: "",
  })

  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol 500mg", price: "₹25", stock: "120 strips" },
    { id: 2, name: "Azithromycin 250mg", price: "₹95", stock: "50 boxes" },
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    setMedicineForm({ ...medicineForm, [name]: value })
  }

  const handleAddMedicine = () => {
    if (!medicineForm.name || !medicineForm.price || !medicineForm.stock) return
    setMedicines([
      ...medicines,
      { id: Date.now(), ...medicineForm },
    ])
    setMedicineForm({ name: "", price: "", stock: "" })
  }

  const handleDelete = (id) => {
    setMedicines(medicines.filter((m) => m.id !== id))
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
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "var(--text)" }}>Pharmacy Dashboard</h1>
        <Button style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Upload size={18} /> Upload Stock CSV
        </Button>
      </div>

      {/* Main Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: 32,
          alignItems: "start",
        }}
      >
        {/* LEFT PANEL - PHARMACY DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card
            style={{
              padding: "32px 24px",
              borderRadius: "var(--radius-xl)",
              background: "#fff",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Building2 size={24} color="var(--blue-600)" />
              <h2 style={{ fontWeight: 700, margin: 0 }}>{pharmacy.name}</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
              <InfoRow icon={<Mail size={16} />} text={pharmacy.email} />
              <InfoRow icon={<Phone size={16} />} text={pharmacy.phone} />
              <InfoRow icon={<MapPin size={16} />} text={pharmacy.address} />
              <InfoRow icon={<CheckCircle2 size={16} color="#10B981" />} text={`License: ${pharmacy.license}`} />
            </div>
          </Card>
        </motion.div>

        {/* RIGHT PANEL - MEDICINE UPLOAD + LIST */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Card
            style={{
              padding: "32px",
              borderRadius: "var(--radius-xl)",
              background: "#fff",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <h3 style={{ marginBottom: 20, fontSize: 20, fontWeight: 600 }}>Upload New Medicine</h3>

            {/* Upload Form */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr auto",
                gap: 16,
                marginBottom: 24,
                alignItems: "center",
              }}
            >
              <Input
                placeholder="Medicine Name"
                name="name"
                value={medicineForm.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Price (₹)"
                name="price"
                value={medicineForm.price}
                onChange={handleChange}
              />
              <Input
                placeholder="Stock"
                name="stock"
                value={medicineForm.stock}
                onChange={handleChange}
              />
              <Button
                onClick={handleAddMedicine}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <Plus size={16} /> Add
              </Button>
            </div>

            {/* Medicine Table */}
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Current Stock</h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid var(--border)",
              }}
            >
              <thead style={{ background: "var(--surface)" }}>
                <tr>
                  <th style={thStyle}>Medicine Name</th>
                  <th style={thStyle}>Price</th>
                  <th style={thStyle}>Stock</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicines.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center", padding: "16px" }}>
                      No medicines uploaded yet.
                    </td>
                  </tr>
                ) : (
                  medicines.map((m) => (
                    <tr key={m.id} style={{ borderTop: "1px solid var(--border)" }}>
                      <td style={tdStyle}>{m.name}</td>
                      <td style={tdStyle}>{m.price}</td>
                      <td style={tdStyle}>{m.stock}</td>
                      <td style={tdStyle}>
                        <Button
                          variant="outline"
                          onClick={() => handleDelete(m.id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            padding: "6px 10px",
                          }}
                        >
                          <Trash2 size={14} /> Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

/* ---- Reusable Helper Components ---- */

function InfoRow({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ color: "var(--blue-600)" }}>{icon}</span>
      <span>{text}</span>
    </div>
  )
}

const thStyle = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "1px solid var(--border)",
  fontWeight: 600,
  fontSize: 14,
  color: "var(--text-secondary)",
}

const tdStyle = {
  padding: "12px",
  fontSize: 14,
}

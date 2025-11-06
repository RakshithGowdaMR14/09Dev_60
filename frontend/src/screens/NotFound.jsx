import { motion } from "motion/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="container section"
      style={{ display: "grid", placeItems: "center", minHeight: "100vh", textAlign: "center" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="h1" style={{ color: "var(--brand-primary)" }}>
          404
        </h1>
        <p className="body-lg" style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </motion.div>
    </div>
  );
}

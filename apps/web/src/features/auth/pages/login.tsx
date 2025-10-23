import React, { useState } from "react";
import { Button, Input } from "@repo/ui";
import { Link } from "react-router-dom";
// Import logo from shared assets or use a placeholder
import logo from "../../../shared/components/logo.png"; // Update path if needed
// LanguageSwitcher is implemented in App.tsx, so import it from there
import { LanguageSwitcher } from "../../i18n/i18n";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Add login logic here
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <img src={logo} alt="Logo" style={{ width: 120, marginBottom: 24 }} />
      <form
        onSubmit={handleSubmit}
        style={{
          width: 320,
          padding: 32,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 16 }}
          required
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 16 }}
          required
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Link to="/forgot-password">Forgot password?</Link>
          <LanguageSwitcher />
        </div>
        <Button type="primary" htmlType="submit" block loading={loading}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

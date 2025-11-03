"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // ==== LOGIN ====
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/proxy/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login gagal");
      }

      localStorage.setItem("token", data.token);

      // Redirect ke halaman dashboard
      router.push("/posts");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/proxy/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nama,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registrasi gagal");
      }

      alert("Registrasi berhasil, silakan login.");
      setActiveTab("login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all">
      <div className="w-full max-w-md backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border border-white/20 rounded-3xl shadow-2xl p-8 relative">
        <div className="flex flex-col items-center space-y-4">
          <Image src="/next.svg" alt="Logo" width={80} height={80} className="dark:invert" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            ASSESSMENT TEST FULLSTACK DEVELOPER
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            PT INFORMATIKA MEDIA PRATAMA
          </p>
          <small>By : Insanul Akbar.SK</small>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="tabs tabs-boxed bg-gray-200/40 dark:bg-gray-800/40">
            <a
              className={`tab tab-sm ${activeTab === "login" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </a>
            <a
              className={`px-2 tab tab-sm ${activeTab === "register" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6">
          {activeTab === "login" ? (
            <form className="space-y-4" onSubmit={handleLogin}>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <button className="btn btn-primary w-full mt-2" disabled={loading}>
                {loading ? "Memproses..." : "Masuk"}
              </button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleRegister}>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-gray-300">Nama Lengkap</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <button className="btn btn-secondary w-full mt-2" disabled={loading}>
                {loading ? "Memproses..." : "Daftar"}
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} PT Informatika Media Pratama — All Rights Reserved
      </footer>
    </div>
  );
}

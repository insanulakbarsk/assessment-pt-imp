"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function CreatePostPage() {
  const [form, setForm] = useState({ title: "", isi: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("/api/proxy/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      

      if (!res.ok) throw new Error("Gagal membuat postingan");

       toast.success("Post berhasil disimpan!");
      router.push("/posts");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black px-4 py-10 transition-all">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-white/30 dark:border-gray-800/50 rounded-3xl shadow-2xl p-8 w-full max-w-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          ✍️ Create New Post
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Judul Post
            </label>
            <input
              type="text"
              name="title"
              placeholder="Masukkan judul post..."
              className="input input-bordered w-full bg-white/80 dark:bg-gray-800/60 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Isi Konten
            </label>
            <textarea
              name="isi"
              rows={5}
              placeholder="Tulis isi postingan kamu..."
              className="textarea textarea-bordered w-full bg-white/80 dark:bg-gray-800/60 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold text-white rounded-xl shadow-md transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
            }`}
          >
            {loading ? "Membuat..." : "Buat Postingan"}
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6"
        >
          <button
            onClick={() => router.push("/posts")}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            ← Kembali ke daftar post
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

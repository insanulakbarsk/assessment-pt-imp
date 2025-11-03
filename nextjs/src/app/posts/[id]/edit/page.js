"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function EditPostPage() {
  const [form, setForm] = useState({ title: "", isi: "" });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = useParams();

  // Ambil data post berdasarkan ID
  const fetchPost = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/proxy/posts/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Gagal memuat data post");

      const data = await res.json();
      setForm({ title: data.title, isi: data.isi });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchPost();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/proxy/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Gagal memperbarui post");

      toast.success("Post berhasil diperbaharui!");
      router.push("/posts");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          ✏️ Edit Post
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Judul
            </label>
            <input
              type="text"
              name="title"
              placeholder="Masukkan judul post"
              className="input input-bordered w-full"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Isi
            </label>
            <textarea
              name="isi"
              placeholder="Tulis isi post di sini..."
              className="textarea textarea-bordered w-full h-40"
              value={form.isi}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => router.push("/posts")}
              className="btn btn-outline btn-secondary"
            >
              Batal
            </button>
            <button
              type="submit"
              className={`btn btn-primary ${loading ? "loading" : ""}`}
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

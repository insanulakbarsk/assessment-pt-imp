"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loading } from "@/components";

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const router = useRouter();

  const fetchPosts = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      const res = await fetch(`/api/proxy/posts?page=${pageNumber}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });

      if (!res.ok) throw new Error("Gagal memuat postingan");

      const data = await res.json();
      // Struktur Laravel pagination
      setPosts(Array.isArray(data.data) ? data.data : []);
      setPage(data.current_page || 1);
      setLastPage(data.last_page || 1);
    } catch (err: any) {
      toast.error(err.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus postingan ini?")) return;

    try {
      const res = await fetch(`/api/proxy/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Gagal menghapus post");

      toast.success("Post berhasil dihapus!");
      fetchPosts(page); // refresh data di halaman saat ini
    } catch (err: any) {
      toast.error("Terjadi kesalahan saat menghapus post");
    }
  };

  const handleLogout = () => {
    if (confirm("Yakin ingin logout?")) {
      localStorage.removeItem("token");
      toast.success("Berhasil logout 👋");
      router.push("/");
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  if (loading)
    return <Loading />;

  if (posts.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl p-10"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            📄 Belum Ada Postingan
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Mulailah membuat postingan pertama Anda.
          </p>
          <Link href="/posts/create" className="btn btn-primary mt-5 px-8">
            + Buat Postingan
          </Link>
        </motion.div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-3 sm:space-y-0">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              ✨ Daftar Postingan
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/posts/create" className="btn btn-primary">
              + Buat Baru
            </Link>

            {token && (
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-error"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body p-5">
                <h2 className="card-title text-lg text-gray-800 dark:text-gray-100">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {post.body?.length > 100
                    ? post.body.slice(0, 100) + "..."
                    : post.body}
                </p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    href={`/posts/${post.id}`}
                    className="btn btn-sm btn-outline"
                  >
                    View
                  </Link>
                  <Link
                    href={`/posts/${post.id}/edit`}
                    className="px-2 btn btn-sm btn-secondary"
                  >
                    Edit
                  </Link>
                  {token && (
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-2 btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            className="btn btn-sm"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            « Prev
          </button>
          <span className="text-gray-600 dark:text-gray-300">
            Halaman {page} dari {lastPage}
          </span>
          <button
            className="btn btn-sm"
            disabled={page === lastPage}
            onClick={() => setPage(page + 1)}
          >
            Next »
          </button>
        </div>
      </div>
    </div>
  );
}

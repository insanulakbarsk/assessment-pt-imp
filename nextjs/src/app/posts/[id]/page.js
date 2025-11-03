"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PostDetailPage() {
  const [post, setPost] = useState(null);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`/api/proxy/posts/${params.id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch post");
        router.push("/posts");
      }
    };
    if (params.id) fetchPost();
  }, [params.id, router]);

  if (!post)
    return (
      <div className="flex min-h-screen items-center justify-center text-lg text-gray-600">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black py-20 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 leading-snug">
          {post.title}
        </h1>

        <div className="mb-6 text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
          {post.isi}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          <span>✍️ {post.user?.name || "Unknown"}</span>
          <span>
            🕓 {new Date(post.created_at).toLocaleString("id-ID", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </span>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            className="px-6 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
            onClick={async () => {
              if (confirm("Yakin mau hapus postingan ini?")) {
                try {
                  const token = localStorage.getItem("token");
                  await fetch(`/api/proxy/posts/${params.id}`, {
                    method: "DELETE",
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
                  router.push("/posts");
                } catch (err) {
                  alert("Gagal menghapus postingan");
                }
              }
            }}
          >
            🗑 Hapus
          </button>

          <button
            className="px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => router.push(`/posts/${params.id}/edit`)}
          >
            ✏️ Edit
          </button>
        </div>
      </motion.div>
    </div>
  );
}

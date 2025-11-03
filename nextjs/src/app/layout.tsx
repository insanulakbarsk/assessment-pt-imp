import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Assessment App",
  description: "Simple CRUD app with Laravel API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind & DaisyUI via CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.56.0/dist/full.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-base-200">
        {children}
        {/* React Hot Toast Container */}
        <Toaster
          position="top-right"
          toastOptions={{
            className: "bg-neutral text-neutral-content shadow-lg",
            success: {
              iconTheme: {
                primary: "#4ade80",
                secondary: "#1f2937",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#1f2937",
              },
            },
          }}
        />
      </body>
    </html>
  );
}

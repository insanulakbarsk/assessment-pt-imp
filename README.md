🧩 Assessment Test — Software Engineer

PT Informatika Media Pratama

A full-stack CRUD web application built using Laravel (Backend API) and Next.js (Frontend with App Router).
This project demonstrates authentication (Sign Up, Sign In, Sign Out) and post management (CRUD) features with a clean UI powered by DaisyUI.

📁 Project Structure
root/
├── laravel/        # Backend API (Laravel 11)
├── nextjs/         # Frontend (Next.js 14 with App Router)
└── README.md

⚙️ Tech Stack
1. Backend => Laravel 10 => RESTful API for authentication & post management
2. Frontend	=> Next.js 14 => (App Router)	Modern React framework for UI
3. UI => DaisyUI + Tailwind => CSS	Simple and elegant styling
4. Database =>	MySQL => Persistent storage for posts and users
5. Auth => Laravel Sanctum => Token-based authentication for API

🚀 Features
🔐 Authentication
1. Sign Up (register new user)
2. Sign In (obtain token)
3. Sign Out (invalidate token)

📝 Post Management (CRUD)
1. List all posts (with pagination)
2. View post details
3. Create a new post
4. Edit an existing post
5. Delete a post

🧰 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/insanulakbarsk/assessment-pt-imp
cd assessment-pt-imp

🖥️ Backend (Laravel)
📦 Requirements
PHP 8.1+
Composer
MySQL

⚙️ Setup
cd laravel
cp .env.example .env
composer install
php artisan key:generate

Edit .env file:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=assessment
DB_USERNAME=root
DB_PASSWORD=


Then run migrations :
php artisan migrate

▶️ Run the server
php artisan serve

Backend will be available at:
👉 http://127.0.0.1:8000

📡 API Endpoints (Sample)
1. POST	=> /api/register => Register new user
2. POST => /api/login => User login
3. POST => /api/logout => Logout
4. GET => /api/posts => List all posts
5. GET => /api/posts/{id} => View post
6. POST	=> /api/posts => Create post
7. PUT => /api/posts/{id} => Update post
8. DELETE => /api/posts/{id} => Delete post

🌐 Frontend (Next.js)
📦 Requirements
Node.js 18+
npm / yarn

⚙️ Setup
cd nextjs
npm install

Create .env.local file:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api

▶️ Run Development Server
npm run dev

Frontend will be available at:
👉 http://localhost:3000

🔄 API Proxy (Next.js)

Next.js frontend uses a local API proxy (/app/api/proxy/[...path]/route.ts)
to securely forward requests to the Laravel backend and handle authentication tokens.

Example:

/api/proxy/posts → forwards to http://127.0.0.1:8000/api/posts

🧪 Authentication Flow

User registers via /
Laravel returns API token
Token is stored in local storage (Next.js)
All subsequent requests include:

Authorization: Bearer <token>
# 📚 BookHeaven — MERN Bookstore with Admin Dashboard

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application where users can explore and buy books, manage their profiles, and where admins can add, edit, or delete books.  
Built with a clean UI and real-time API integration between the frontend and backend.

---

## 🌐 Live Demo

- **Frontend:** [https://book-store-with-admin-tau.vercel.app](https://book-store-with-admin-tau.vercel.app)
- **Backend:** [https://bookstore-with-admin.onrender.com](https://bookstore-with-admin.onrender.com)

---

## 🖥️ Tech Stack

**Frontend:**
- React.js  
- Tailwind CSS  
- Axios  
- React Router DOM  

**Backend:**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  

**Hosting:**
- Frontend → [Vercel](https://vercel.com)  
- Backend → [Render](https://render.com)  
- Database → [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## ⚙️ Features

### 👥 User Features
- Browse and view all available books  
- View detailed book information  
- Register and Login (with JWT authentication)  
- Login or Sign up using **Google Authentication**  
- View and manage your **Profile**  
- Add books to **Favorites**  
- Add books to **Cart** for future purchase  

### 🛠️ Admin Features
- Add new books  
- Edit existing books  
- Delete books  
- Manage all book data from the Admin Dashboard  

---

## 🚧 Upcoming Features
*(Planned for future updates)*  
- 🔍 **Search bar** to find books by title or author  
- 💳 **Payment Gateway Integration** for online purchases  
- 📱 **Responsive improvements** for mobile devices  
- 🧾 **Order History** and purchase tracking  
- 🌈 **Enhanced UI/UX** and animations  

---

## 🚀 Project Setup (for local development)
1️⃣ Clone the repository 

git clone https://github.com/Rakesh-dev07/Book-store-with-admin.git <br>
cd Book-store-with-admin

2️⃣ Setup the Backend 

cd Backend <br>
npm install 

Create a .env file inside the Backend folder: <br>
PORT=1000 <br>
MONGO_URI=your_mongodb_atlas_connection_string <br>
JWT_SECRET=yourStrongSecretKey <br>
NODE_ENV=development

Start the backend: <br>
npm start

3️⃣ Setup the Frontend

cd ../Frontend <br>
npm install <br>
npm run dev ##or npm start (depending on your setup) <br>
Now open your browser and visit: <br>
http://localhost:5173

🌍 Deployment 

Platform  - Purpose - Link <br>
Render	Backend Hosting	https://bookstore-with-admin.onrender.com <br>
Vercel	Frontend Hosting	https://book-store-with-admin-tau.vercel.app <br>
MongoDB Atlas	Cloud Database	https://www.mongodb.com/cloud/atlas <br>

## 📸 Screenshots  

### 🏠 Home Page  
![Bookstore Home Screenshot](https://github.com/user-attachments/assets/d057b9ec-dab2-427b-9bb9-ca376d1861a9)

🧠 What i Learned <br>
Handling authentication with JWT and Google Login.

Connecting a live React frontend with an Express backend.

Managing CORS, API routes, and environment variables in production.

Deploying full-stack apps using Render (backend) and Vercel (frontend).

Working with MongoDB Atlas for cloud data management.

✨ Author
👨‍💻 Rakesh

GitHub: @Rakesh-dev07

LinkedIn: (www.linkedin.com/in/contact-rakesh-yadav)

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
```
git clone https://github.com/Rakesh-dev07/Book-store-with-admin.git
cd Book-store-with-admin
```
2️⃣ Setup the Backend 
```
cd Backend 
npm install 

Create a .env file inside the Backend folder: 
PORT=1000 
MONGO_URI=your_mongodb_atlas_connection_string 
JWT_SECRET=yourStrongSecretKey 
NODE_ENV=development

Start the backend: 
npm start
```
3️⃣ Setup the Frontend
```
cd ../Frontend 
npm install 
npm run dev ##or npm start (depending on your setup) 
Now open your browser and visit: 
http://localhost:5173
```
🌍 Deployment 
```
Platform  - Purpose - Link 
Render	Backend Hosting	https://bookstore-with-admin.onrender.com 
Vercel	Frontend Hosting	https://book-store-with-admin-tau.vercel.app 
MongoDB Atlas	Cloud Database	https://www.mongodb.com/cloud/atlas 
```
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

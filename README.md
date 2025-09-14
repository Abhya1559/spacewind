
# 🚀 Spacewind Internship Trial Project

This project is submitted as part of the **Spacewind Internship Trial Assignment**.  
The implementation covers **User Authentication with JWT** and a **Protected Dashboard** using **Next.js 14 (App Router)** and **MongoDB**.

----------

## 📌 Features

-   🔑 User Authentication (Register + Login)
    
-   🔒 Password hashing with **bcrypt**
    
-   🍪 JWT stored in **HTTP-only cookies**
    
-   🛡 Middleware for protecting `/dashboard`
    
-   📂 MongoDB database integration
    
-   🎨 Responsive UI built with Tailwind CSS
    
-   🌐 Deployed on **Vercel**
    

----------

## 🛠 Tech Stack

-   **Frontend & Backend**: Next.js 14 (App Router)
    
-   **Database**: MongoDB (Mongoose ORM)
    
-   **Authentication**: JWT + HTTP-only cookies
    
-   **Styling**: Tailwind CSS
    

----------

## 📂 Project Structure

`/project-root
 ├── /app
 │   ├── /api
 │   │   ├── /auth
 │   │   │   ├── register/route.ts
 │   │   │   ├── login/route.ts
 │   │   └── middleware.ts
 │   ├── dashboard/page.tsx
 │   ├── login/page.tsx
 │   ├── register/page.tsx
 │   └── layout.tsx
 ├── /lib
 │   ├── connectDb.ts # MongoDB connection │   ├── jwt.ts # JWT helper functions ├── /models
 │   └── User.ts # User schema ├── README.md
 └── package.json` 

----------

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

`git clone https://github.com/your-username/spacewind-auth-trial.git cd spacewind-auth-trial` 

### 2️⃣ Install Dependencies

`npm install` 

### 3️⃣ Create `.env.local` File

`MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-secret-key` 

### 4️⃣ Run Locally

`npm run dev` 

Visit: [http://localhost:3000](http://localhost:3000)

----------

## 🌐 Deployment

The project is deployed on **Vercel**:  
👉 Live Demo Link

----------

## 📦 Submission

-   GitHub Repository: [Repo Link](https://github.com/your-username/spacewind-auth-trial)
    
-   Live Deployed Link: Vercel Link
    

----------

## 📄 Internship Details

-   **Duration**: 1 Month
    
-   **Mode**: Remote
    
-   **Perks**: Letter of Completion
    
-   **Tasks**: Project/category-based tasks + occasional quick tasks
    

----------

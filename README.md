# 📝 Notes App

A clean and responsive **full-stack note-taking application** built with **Next.js (App Router)** and **MongoDB Atlas**.  
Users can create, view, edit, delete, search, and filter notes with a modern UI powered by **TailwindCSS**.  

---

## ✨ Features

- 🖊️ **Create Notes**: Add notes with a title and content.  
- 📋 **View Notes**: See all saved notes in a responsive grid.  
- ✏️ **Edit Notes**: Update existing notes.  
- 🗑️ **Delete Notes**: Remove notes with a single click.  
- 🔍 **Search & Filter**: Search notes by title or content; filter by date (latest/oldest).  
---

## 🧱 Technology Stack

### 🔹 Frontend & Backend 
- **Next.js 13+ (App Router)** – React framework for frontend & backend API routes  
- **Axios** – for API requests  
- **TailwindCSS** – for modern, responsive styling  
 
### 🔹 Database
- **MongoDB Atlas** – cloud database  
 
---

## ⚙️ Prerequisites

- Node.js and npm installed  
- MongoDB Atlas account (or local MongoDB)  
- Git  

---

## 📥 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Gaya3ps/notes-app.git
cd notes-app
```
### 2. Install Dependencies

```
npm install

```
### 3. Setup Environment Variables
-Create a .env.local file in the root:
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/notesapp?retryWrites=true&w=majority


### 4. Run Locally
```
npm run dev

```


📤Deployment (Vercel)

Push your repo to GitHub.

Go to Vercel and import the project.

In Project Settings → Environment Variables, add your MONGODB_URI.

Deploy 🚀

Your app will be live at https://your-project-name.vercel.app

# 🎵 Spotify Clone — Backend

A RESTful backend API for a Spotify-like music streaming application, built with **Node.js**, **Express**, and **MongoDB**. It handles user authentication using **JWT** and **HTTP-only cookies** for secure session management.

---

## 🚀 Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| Node.js        | JavaScript runtime               |
| Express.js v5  | Web framework / API routing      |
| MongoDB        | NoSQL database                   |
| Mongoose       | MongoDB ODM (Schema & Models)    |
| JSON Web Token | Authentication & authorization   |
| cookie-parser  | Parsing HTTP cookies             |
| dotenv         | Environment variable management  |
| Nodemon        | Auto-restart during development  |

---

## 📁 Project Structure

```
Spotify_Clone/
└── backend/
    ├── src/
    │   ├── app.js              # Express app setup & middlewares
    │   ├── db/
    │   │   └── db.js           # MongoDB connection
    │   ├── models/
    │   │   └── user.model.js   # User schema (Mongoose)
    │   ├── routes/
    │   │   └── auth.routes.js  # Auth-related API routes
    │   └── controller/
    │       └── auth.controller.js  # Route logic / business logic
    ├── server.js               # Entry point — starts the server
    ├── .env                    # Environment variables (not committed)
    └── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/aryansharma91/Spotify-Backend.git
cd Spotify_Clone/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port defined in `.env`).

---

## 🔐 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | `/api/auth/register`| Register a new user      |
| POST   | `/api/auth/login`   | Login & receive JWT cookie |
| POST   | `/api/auth/logout`  | Logout & clear cookie    |

> Authentication is handled via **HTTP-only cookies** to prevent XSS attacks.

---

## 🛡️ Security

- Passwords are hashed before storing in the database.
- JWTs are stored in **HTTP-only cookies** (not accessible via JavaScript).
- Environment-sensitive data is kept in `.env` and excluded from version control via `.gitignore`.

---

## 📜 Scripts

| Script          | Command           | Description                  |
|-----------------|-------------------|------------------------------|
| `npm run dev`   | `npx nodemon server.js` | Start dev server with hot reload |
| `npm start`     | `node server.js`  | Start production server      |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---




> Built with ❤️ as a learning project to understand full-stack development with the MERN stack.

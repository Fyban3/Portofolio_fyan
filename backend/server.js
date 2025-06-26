const express = require("express");
const cors = require("cors");
const path = require("path");
const session = require("express-session");

const sequelize = require("./config/db");
sequelize.sync().then(() => console.log("Database Ready!"));

const app = express();
const port = 3200;

// Configure CORS to allow requests from the frontend
app.use(cors({
  origin: "http://localhost:3200", // Frontend URL (ubah ke 3000 jika frontend Next.js)
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Corrected imports with proper casing
const adminEndpoint = require("./routes/AdminRoutes");
const articleRoutes = require("./routes/ArticleRoutes");
const dataRoutes = require("./routes/DataRoutes");

// Middleware
app.use(express.json());

// Middleware session
app.use(
  session({
    secret: 'ajb^&%&8da09798',  // bisa diganti dengan string acak
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 // 1 jam
    }
  })
);

// Routes
app.use("/api/admin", adminEndpoint);
app.use("/api/articles", articleRoutes);
app.use("/api/data", dataRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

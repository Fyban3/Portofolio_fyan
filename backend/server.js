const express = require("express");
const cors = require("cors");
const path = require("path");
const session = require("express-session");

const sequelize = require("./config/db");
sequelize.sync().then(() => console.log("Database Ready!"));

const app = express();
const port = 3200;

// 
const adminEndpoint = require("./routes/adminroutes");
// const dataRoutes = require("./routes/DataRoutes");


// Middleware
app.use(cors());
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


// Serve static files
// app.use(express.static(path.join(__dirname, "../")));

// Routes
// app.use("/api", dataRoutes);
app.use("/api/admin", adminEndpoint);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

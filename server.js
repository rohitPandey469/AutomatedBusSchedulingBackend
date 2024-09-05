require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const scheduleRoutes = require("./routes/schedules");
const busRoutes = require("./routes/buses");
const crewRoutes = require("./routes/crew");
const routeRoutes = require("./routes/routes");
const notificationRoutes = require("./routes/notifications");
const corsOptions = require("./config/corsOptions");

const app = express();

// Middleware
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/schedules", scheduleRoutes);
app.use("/buses", busRoutes);
app.use("/crew", crewRoutes);
app.use("/routes", routeRoutes);
app.use("/notifications", notificationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const dbConnect = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const verifyToken = require('./middlewares/authMiddleware');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());
// Database Connection
dbConnect();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks',verifyToken, taskRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

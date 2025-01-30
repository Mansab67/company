const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes); // Use auth routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
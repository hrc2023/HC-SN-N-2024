const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UsersRoutes');

mongoose.connect('mongodb+srv://HC1100:anms927asdf@cluster0.fkwaa.mongodb.net/Social', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB - Database: Social"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

// Test API Endpoint
app.get('/api/health', (req, res) => {
    res.json({ message: 'Server is running!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

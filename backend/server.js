const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const OrderRouter = require("./routes/Order.routes");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// MongoDB'ye bağlan
mongoose.connect(process.env.CONNECTION_STRING, {})
  .then(() => {
    console.log('Connected to MongoDB');
    // Uygulama dinlemeye başla
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });

// Kullanıcı rotalarını ekle
app.use('/api', userRoutes);

// Sipariş rotalarını ekle
app.use("/api/order", OrderRouter);

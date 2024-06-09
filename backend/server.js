  const express = require('express');
  const cors = require('cors');
  const mongoose = require('mongoose');
  const userRoutes = require('./routes/userRoutes');
  require('dotenv').config();

  const app = express();
  const PORT = process.env.PORT || 10000;

  app.use(cors());
  app.use(express.json());

  // MongoDB'ye bağlan
  mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => {
      console.log('Connected to MongoDB');
      // Uygulama dinlemeye başla
      app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
      });
  }).catch((error) => {
      console.error('MongoDB connection error:', error);
  });

  // Kullanıcı rotalarını ekle
  app.use('/api', userRoutes);

// ========================
// ELYSIA SWEETS - Express App Configuration
// ========================

const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
// Aquí irán tus rutas:
// const productsRoutes = require('./routes/products');
// const ordersRoutes = require('./routes/orders');
// app.use('/api/products', productsRoutes);
// app.use('/api/orders', ordersRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal' });
});

module.exports = app;

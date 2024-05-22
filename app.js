// app.js
const express = require('express');
const oneRMRoutes = require('./routes/oneRMRoutes');

const app = express();
const port = process.env.PORT || 81;

app.use(express.json());
app.use('/api', oneRMRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const employeeRoutes = require('./routes/employeeRoutes');
const errorMiddleware = require('./middlewares/errorMiddlewares');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/employees', employeeRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
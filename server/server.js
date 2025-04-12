const express= require('express');
const cors= require('cors');
require('dotenv').config();
const weatherRouter= require('./routes/weather');

const app= express();
app.use(cors());
app.use("/weather", weatherRouter);

const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
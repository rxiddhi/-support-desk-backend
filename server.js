require('dotenv').config()

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth/users', userRoutes)
app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 3008
app.listen(PORT, () => {
    console.log(`Server is running on the ${PORT}`)
})
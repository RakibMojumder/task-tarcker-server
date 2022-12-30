const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const TaskRouter = require('./Routes/task.route');

require('./config/db.connection');

// middle wares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// routes
app.use('/api/task', TaskRouter);


app.get('/', (req, res) => {
    res.send("API is running")
});


// route error
app.use((req, res, next) => {
    res.send("route not found")
});

// server error
app.use((err, req, res, next) => {
    res.send("Something is broken");
});


app.listen(port, () => console.log("server is running"));
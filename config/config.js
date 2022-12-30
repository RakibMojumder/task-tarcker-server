
require('dotenv').config();

const dev = {
    db: {
        url: process.env.DB_URL || "mongodb://localhost:27017/Task-tracker"
    }
};

module.exports = dev;
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Подключаемся к MongoDB без устаревших опций
        await mongoose.connect(`mongodb+srv://odilchikfurqatovich:odil2901-odil@cluster0.f34dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

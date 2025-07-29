const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connecté');
//     } catch (err) {
//         console.error('Erreur de connexion MongoDB:', err.message);
//         process.exit(1);
//     }
// };



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_PRODUCTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connecté');
    } catch (err) {
        console.error('MongoDB connction failed:', err.message);
        process.exit(1);
    }
};


module.exports = connectDB;

const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
        await mongoose.connect('mongodb://localhost/20230725',
            connectionParams
        )
        console.log('Connected to DB');
    } catch (error) {
        console.log('Could not connect to DB ', error);
    }
}
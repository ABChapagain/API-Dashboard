const mongoose = require('mongoose');

var connect = async () => {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
    })
}

export default connect;
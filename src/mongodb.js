const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
})

const collection = new mongoose.model('Collection1', LogInSchema);

module.exports = collection
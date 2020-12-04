const mongooose = require('mongoose');

const tokenSchema = new mongooose.Schema({
    token:{
        type: String,
        require: true
    }
})


module.exports = mongooose.model('tokens', tokenSchema);
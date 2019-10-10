const mongoose = require ('mongoose');

const LoginSchema= mongoose.Schema(
    {
        id:
        {
            type:String,
            required:true
        },
        pin:
        {
            type:String,
            required:true
        },


        date_issued:
        {
            type:Date,
            default:Date.now
        }
    }
);

module.exports= mongoose.model('login_db',LoginSchema);
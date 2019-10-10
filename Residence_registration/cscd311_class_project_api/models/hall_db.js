const mongoose = require ('mongoose');

const HallSchema= mongoose.Schema(
    {
        hall_name:
        {
            type:String,
            required:true
        },
        hall_annex:
        {
            type:String
        },
        gender:
        {
            type:String
        },
        date_issued:
        {
            type:Date,
            default:Date.now
        }
    }
);

module.exports= mongoose.model('hall_db',HallSchema);
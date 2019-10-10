var express =require('express');
var router = express.Router();
var Hall_post= require('../models/hall_db');
var Hall_login= require('../models/login_db');

router.get('/hall_application', (req,res)=>
{
    res.send("../cscd3111_class_project_web/Front_development/hall_application.html");
});

router.post('/login',(req,res)=>
{
    const post= new Hall_login({

        id:req.body.id,
        pin:req.body.pin
    });
});

router.post('/hall_application', (req,res)=>
{
    const post= new Hall_post({

        gender:req.body.gender,
        hall_name:req.body.hall_name,
        hall_annex:req.body.hall_aannex
    });


    post.save()
        .then(data=>
            {
                res.json(data);
            })
            .catch(error=>
                {
                    res.json({message:error});
                });
      
                

});

module.exports= router;


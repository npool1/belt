const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
mongoose.connect('mongodb://localhost/letseat');
app.use(bodyParser.json());
// app.use(express.static(path.join(_dirname, './static' )));

app.use(express.static(__dirname + '/AngularApp/dist'));
const Schema = mongoose.Schema;

const ReviewSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, "Your name must be a least three characters long"]},
    review: {type: String, minlength: [3, "Your review must be a least three characters long"]},
    stars: {type: Number, min: 1, max:5}
})

const RestSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, "Restaurant name must be a least three characters long"]},
    cuisine: {type: String, minlength: [3, "Cuisine type must be a least three characters long"]},
    reviews: [ReviewSchema]
},{timestamps: true});



const rest = mongoose.model('Rest', RestSchema);
const review = mongoose.model('Review', ReviewSchema);

app.get('/rests', function(request, response){
    rest.find({}, function(err, data){
        if(err){
            console.log('we got errors:');
            console.log(err);
        } else {
            response.json({data: data});
        }
    })
});

app.get('/rest/:id', function(request, response){
    var id = new mongoose.Types.ObjectId(request.params.id);
    console.log(id);
    rest.findById(id, function(err, data){
        if(err){
            console.log('got errors');
            console.log(err);
        }else{
            console.log(data);
            response.json(data);
        }
    })
});

app.get('/reviews/:id', function (request, response){
    rest.findOne({_id: request.params.id})
    .populate('reviews')
    .exec(function(err, post) {
         response.json({message: "success", rest: rest});
    });
});

app.post('/newRest', function(request, response){
    let newRest = new rest(request.body);
    console.log("This is newRest" + newRest);
    newRest.save(function(err){
        if(err){
            console.log('Unable to put rest in DB');
            console.log(err);
            // console.log(err);
            response.json({message: "error", errors: newRest.errors});
        }else{
            response.json({status: 'everything went okay!'});
        }
    });
    
});
// app.post('/newReview', function(request, response){
//     let newReview = new review(request.body);
//     console.log("This is newReview" + newReview);
//     this.rest.push(newReview)
//     newReview.save(function(err){
//         if(err){
//             console.log('Unable to put review in DB');
//             console.log(err);
//             // console.log(err);
//             response.json({message: "error", errors: err});
//         }else{
//             response.json({status: 'everything went okay!'});
//         }
//     });
    
// });

app.post('/rest/:id', function (req, res){
    console.log(req.body);
    console.log("Here!!!!!!")
    var id = new mongoose.Types.ObjectId(req.params.id);
    rest.findById(id, function(err, data){
           var review = req.body;
           data.reviews.push(review);
           console.log(data.reviews);
           data.save(function(err){
                         if(err) { console.log('Error'); } 
                         else {res.json({status: 'gucci'}) }
                   });
           });
     });

app.put('/rest/:id', function(request, response){
    console.log(request.body);
    rest.update({_id: mongoose.Types.ObjectId(request.params.id)},request.body, { runValidators: true}, function(err, data){
        if(err){
            console.log('dun gooft');
            console.log(err);
            response.json({status: 'not gucci', errors: err.errors});
        }else{
            console.log('updated');
            console.log(data);
            response.json({status: 'gucci'});
        }
    })
});

app.delete('/rest/:id', function(request, response){
    var id = mongoose.Types.ObjectId(request.params.id);
    rest.remove({_id: id}, function(err){
        if(err){
            console.log(err);
            response.json({status: 'not gucci'});
        }
    });
    response.json({status: 'gucci'});
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./AngularApp/dist/index.html"))
  });
  
  app.listen(8000, function() {
      console.log("Hello Angular listening on port 8000")
  })
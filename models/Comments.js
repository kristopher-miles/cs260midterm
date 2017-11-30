var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	title:String,
	upvotes: {type:Number,default:0},
	image: String,
	price:{type:Number,default:0},
	checked: {type:Boolean, default:false},
});

CommentSchema.methods.upvote = function(cb){
 this.upvotes +=1;
 this.save(cb);

};

mongoose.model('Comment',CommentSchema);

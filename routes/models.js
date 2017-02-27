var mongoose = require("mongoose");
// mongoose.connect('mongodb://srjc_csc:root@ds157439.mlab.com:57439/heroku_bqssgm6c');
mongoose.connect("mongodb://localhost:27017/test");

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection succeeded.");
});

var Schema = mongoose.Schema;

var Members = mongoose.model('Members', new Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    first_name: String,
    last_name: String,
    bio: String,
    bio_short: String,
    email: String,
    links: [new Schema({
        String,
        String
    })],
    languages: Array
}));

var projects = mongoose.model('Projects', new Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    title: String,
		description: String,
		description_short: String,
		status: String,
		post: String,
		milestones: String,
    links: [new Schema({
        String,
        String
    })],
		images: Array

}));

var project_member = mongoose.model('ProjectMember', new Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    project_id: Schema.Types.ObjectId,
    member_id: Schema.Types.ObjectId,
    role: String
}));

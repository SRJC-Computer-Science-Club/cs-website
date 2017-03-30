module.exports = function Event( id, title, description, description_short, location, date_range, media)
{
	this.id = id;
	this.title = title;
	this.description = description;
	this.description_short = description_short;
	this.location = location;
	this.date_range = date_range;
	this.media = media;
}
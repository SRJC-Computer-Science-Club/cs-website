module.exports = function ProjectEvent( id, project_id, title, description, description_short, location, date_range, media)
{
	this.id = id;
	this.project_id = project_id;
	this.title = title;
	this.description = description;
	this.description_short = description_short;
	this.location = location;
	this.date_range = date_range;
	this.media = media;
}
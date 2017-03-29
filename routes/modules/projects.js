module.exports = function Project( id, title, description, description_short, status, post, milestones, links, images )
{
	this.id = id;
	this.title = title;
	this.description = description;
	this.description_short = description_short;
	this.status = status;
	this.post = post;
	this.milestones = milestones;
	this.links = links;
	this.images = images;
}

module.exports = function ProjectAreaRequests( id, project_id, title, description, project_interest, nPositions, assets, author_id)
{
	this.id = id;
	this.project_id = project_id;
	this.title = title;
	this.description = description;
	this.project_interest = project_interest;
	this.nPositions = nPositions;
	this.assets = assets;
	this.author_id = author_id;
}
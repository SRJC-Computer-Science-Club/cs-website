module.exports = function Member( id, first_name, last_name, bio, bio_short, links, email, languages )
{
	this.id = id;
	this.first_name = first_name;
	this.last_name = last_name;
	this.bio = bio;
	this.bio_short = bio_short;
	this.links = links;
	this.email = email;
	this.languages = languages;
}
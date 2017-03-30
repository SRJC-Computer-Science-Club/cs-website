module.exports = function ProjectsMembers( id, project_id, member_id, role, admin, assignedArea )
{
	this.id = id;
	this.project_id = project_id;
	this.member_id = member_id;
	this.admin = admin;
	this.role = role;

	this.assignedArea = assignedArea;
}
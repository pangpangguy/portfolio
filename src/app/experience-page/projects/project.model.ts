export class Project {
  public title: String;
  public description: String;
  public github: String;
  public site: String;
  public technologies: String[];

  public constructor(
    title: String,
    description: String,
    technologies: String[],
    github: String = '',
    site: String = ''
  ) {
    this.title = title;
    this.description = description;
    this.github = github;
    this.site = site;
    this.technologies = technologies;
  }
}

const issue = {
    title: "bug",
    repositoryNameAssociated: "miweb",
    status: "In Progress",
    numberOfComments: 5,
    labels: "bug, blocked",
    author: "Mario",
    dateCreated: "15-03-22",
    lastUpdated: "9-04-22",

    getTitleAndAuthor:function() {
        return `Issue:${this.title} and Author:${this.author}`
    },
    getGeneralInfo:function() {
        return `Reponame:${this.repositoryNameAssociated} status:${this.status} labels:${this.labels}`
    }
}

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
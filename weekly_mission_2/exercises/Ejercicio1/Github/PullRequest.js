const pullrequest ={
    title: "Añadiendo heading al index",
    branchName: "main",
    dateCreated: "2-04-21",
    status:"review",
    repositoryNameAssociated: "miweb",
    author: 'mario',

    getStatus:function() {
        return `this is the status of ${this.title}: ${this.status}`
    },
    getTitleAndAuto:function() {
        return `Title: ${this.title} and author: ${this.author}`
    }
}

console.log(pullrequest.getStatus());
console.log(pullrequest.getTitleAndAuto());
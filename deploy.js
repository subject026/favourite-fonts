const ghpages = require("gh-pages");

ghpages.publish("build", err => {
  err
    ? console.log("\n\nERRORRRR!!!||", err, "\n\n")
    : console.log("\n\ndeploy successful!\n\n");
});

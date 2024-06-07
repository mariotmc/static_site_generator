const projects = require("./src/data/projects");

module.exports = {
  site: {
    title: "SSG",
    description: "Micro Static Site Generator",
    basePath: process.env.NODE_ENV === "production" ? "/ssg" : "",
    projects
  },
  build: {
    outputPath: process.env.NODE_ENV === "production" ? "./docs" : "./public"
  }
};
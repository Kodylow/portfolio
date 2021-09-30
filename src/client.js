const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "d3dsbxfz",
  dataset: "production",
});

module.exports = client;

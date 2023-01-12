import client from "@sanity/client";

export default client({
  projectId: "osqoi052",
  dataset: "production",
  apiVersion: "2022-12-26",
  useCdn: false,
});

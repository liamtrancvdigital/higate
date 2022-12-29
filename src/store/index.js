import { createStore } from "vuex";

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN,
});
async function getData(type) {
  return await client.getEntries({ content_type: type })
}
const blog = getData("blog");
const blogSticky = getData("blogSticky");

export default createStore({
  state: {
    blog,
    blogSticky
  },
  modules: {},
})
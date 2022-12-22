<template>
  <div id="app">
    <NavBar :logo="logo"/>
    <HomePage />
    <Footer />
    <ul class="shows">
      <li
        v-for="show in shows"
        v-bind:key="show.sys.id"
        class="show"
      > 
      {{ show.title }}
      </li>
    </ul>

  </div>
</template>

// App.vue
<script>
import NavBar from "@/components/NavBar.vue";
import HomePage from "@/components/HomePage.vue";
import Footer from "@/components/Footer.vue";
export default {
 components: { NavBar, HomePage, Footer },
 data() {
   return {
     shows: [],
     logo: '',
   };
 },
 async created() {
   this.shows = await this.getShows();
   this.logo = this.shows.logo.url;
 },
 methods: {
   getShows: async () => {
    const query = `{
                  homeCollection {
                    items {
                          sys {
                      id
                    }
                    logo {url}
                    image1 {url}
                    }

                  }
                }`;
     const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
     const fetchOptions = {
       method: "POST",
       headers: {
         Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
         "Content-Type": "application/json"
       },
       body: JSON.stringify({ query })
     };

     try {
       const response = await fetch(fetchUrl, fetchOptions).then(response =>
         response.json()
       );
       
       return response.data.homeCollection.items[0];
     } catch (error) {
       throw new Error("Could not receive the data from Contentful!");
     }
   }
 }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

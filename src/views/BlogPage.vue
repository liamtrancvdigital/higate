<template>
  <div class="blogs">
    <div class="bg-[#0B1992] text-secondary font-bold">
      <div
        class="px-4 md:px-[30px] max-w-[1062px] xl2:max-w-[1128px] lg:px-0 m-auto pt-[41px] pb-[58px] lg:pt-[70px] lg:pb-[342px] text-center lg:text-left"
      >
        <h1 class="text-[36px] leading-[120%] xl2:text-[64px] Open Sans mb-4">
          Blog
        </h1>
        <p>See what’s going on at HiGate and in the technology world.</p>
      </div>
    </div>

      <div v-if="dataBlogs" class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in dataBlogs" :key="item.sys.id" class="mb-6 lg:mb-0">
          <a :href="'/blog/' + item.sys.id"
            ><img
              class="m-auto w-[100%]"
              :src="'https:' + item.fields.blogImage.fields.file.url"
              width="360"
              height="260"
          /></a>
          <div class="flex gap-2 items-center mt-6">
            <div
              class="py-1 text-[#23262F] uppercase px-[10px] bg-border-active"
            >
              Blog
            </div>
            <p class="text-[14px] leading-[20px] text-[#888C95]">
              <span>{{
                moment(item.fields?.createdDate).format("MMMM DD, YYYY")
              }}</span>
            </p>
          </div>
          <a :href="'/blog/' + item.sys.id">
            <p
              class="text-5 leading-[120%] text-title-text hover:text-primary-1 cursor-pointer font-bold Open Sans mt-2 mb-[18px]"
            >
              {{ item.fields.blogTitle }}
            </p>
          </a>
          <div
            class="text-[14px] dark:text-primary-1 leading-[150%] font-semibold"
          >
            <a :href="'/blog/' + item.sys.id" class="text-[#0F23D0]"
              >See More</a
            >
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
   return {
      dataBlogs: [],
      dataBlogsSticky: [],
   }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.dataBlogs = await this.$store.state.blog;
      this.dataBlogsSticky = await this.$store.state.blogSticky;

      console.log(this.dataBlogs, this.dataBlogsSticky)
    }
  }
};
</script>
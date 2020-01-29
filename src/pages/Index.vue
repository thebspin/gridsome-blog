<template>
  <Layout>
    <div class="container">
      <h1>List articles</h1>
      <!-- <div v-for="article in $page.articles.edges" :key="article.id" class="p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg">
        <div class="article__img"
             :style="{ 'background-image': 'url(' + article.node.image + ')' }"></div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div> -->
      <div class="flex flex-wrap -mx-2">
        <div v-for="article in $page.articles.edges" :key="article.id" class="w-full md:w-1/2 lg:w-1/3 my-2 px-2">
          <g-link :to="article.node.path">
          <div class="bg-gray-100 shadow-lg rounded overflow-hidden">
            <!-- <img class="w-full" :src="article.node.image" alt="Sunset in the mountains"> -->
            <div class="w-full bg-cover bg-center h-48" :style="{ 'background-image': 'url(' + article.node.image + ')' }"></div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{article.node.title}}</div>
              <p class="text-gray-700 text-base">
                {{article.node.abstract}}
              </p>
            </div>
          </div>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
  query {
    articles: allArticles {
      edges {
        node {
          title
          abstract
          image
          path
        }
      }
    }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: "My blog"
  }
};
</script>
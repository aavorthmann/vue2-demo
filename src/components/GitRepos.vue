<template>
  <div v-show="showUserData" data-cy="repoList" >
    <h2 >Repositories</h2>
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        Name: <a data-cy="repoName" :href="repo.html_url" target="_blank">{{ repo.name  }}</a> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GitRepos',
  props: {
    showUserData: Boolean,
    repos: {}
  },
  data: function () {
    return {
      //
    };
  },
  methods: {
    //
  }
}
</script>


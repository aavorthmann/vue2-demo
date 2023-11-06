<template>
<div id="app">
  <div>
    <div id="app">
    <img alt="Vue logo" src="https://assets.website-files.com/62865614b39c464b76d339aa/644173f69bcb04bc957d9264_Vectors-Wrapper.svg" height="300px">
    <h1>{{ message }}</h1>
    <button data-cy="aboutButton" ><a href="./about.html" >About HeroDevs</a></button>
    <br><br>
    <button data-cy="openOctocatModal" v-on:click="openOctocatModal">Learn More About Octocat</button>
    <div id="octocatModal" class="modal">
      <div class="modal-content">
        <span data-cy="closeOctocatModal" v-on:click="closeOctocatModal" class="close">&times;</span>
        <img src="https://avatars.githubusercontent.com/u/583231?v=4" height="200px" >
        <p>GitHub's mascot is an anthropomorphized "octocat" with five octopus-like arms. This is Octocat's first repository ReadMe file: </p>
        <textarea v-model="readMe" disabled rows="10" ></textarea>
      </div>
    </div>
    <br><br>
    </div>
    <div class="row">
        <div class="column" style="background-color:white;">
        <h2>Github Username:</h2>
        <input data-cy="userInput" v-model="githubPAT"/>
        <button data-cy="submitUser" v-on:click="getGithubData">Submit</button>
        <button data-cy="clearUser" v-on:click="clearGithubData">Clear</button>
        <br><br>
        <GitProfile :user="user" :showUserData="showUserData" ></GitProfile>
      </div>
      <div class="column" style="background-color:white;">
        <GitRepos :repos="repos" :showUserData="showUserData" ></GitRepos>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import GitProfile from './components/GitProfile.vue'
import GitRepos from './components/GitRepos.vue';

export default {
  name: 'App',
  data: function () {
    return {
      message: `Never-Ending Support: Vue.js ${Vue.version} `,
      githubPAT: 'octocat',
      repoName: '',
      user: {},
      repos: {},
      readMe: {},
      logo: 'https://assets.website-files.com/62865614b39c464b76d339aa/644173f69bcb04bc957d9264_Vectors-Wrapper.svg',
      showUserData: false,
    };
  },
  methods: {
    clearGithubData: function() {
      this.githubPAT = ''
      this.showUserData = false
    },
    getGithubData: function () {
      this.repoName = '';
      if (this.githubPAT === '') {
        alert('Github username must not be null');
      }
      else {
        fetch('https://api.github.com/users/' + this.githubPAT)
          .then(response => response.json())
          .then(data => this.user = data)
          .then(data => this.logo = data.avatar_url)
          .then(this.showUserData = true)
          .catch(function (err) { alert('We encountered an error!' + err); });
        fetch('https://api.github.com/users/' + this.githubPAT + '/repos')
          .then(response => response.json())
          .then(data => this.repos = data)
          .catch(function (err) { alert('We were unable to get the repositories' + err); });
      }
    },
    openOctocatModal: function () {
      const modal = document.getElementById('octocatModal')
      modal.style.display = 'block';
      fetch('https://raw.githubusercontent.com/octocat/hello-worId/master/README.md')
        .then(response => response.text())
        .then(data => this.readMe = data)
        .catch(function (err) { alert('We encountered an error!' + err); });
    },
    closeOctocatModal: function () {
      const modal = document.getElementById('octocatModal')
      modal.style.display = 'none';
    }
  },
  components: { GitProfile, GitRepos }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
} 
* {
  box-sizing: border-box;
}
.column {
  float: left;
  /* width: 33.33%; */
  width: 50%;
  padding: 10px;
  height: 800px;
  text-align: center;
}
li {
  list-style-type: none;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 250px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  color: black;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}    
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>

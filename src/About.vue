<template>
  <div id="about">
    <h2>About HeroDevs</h2>
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'About',
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
    margin-top: 60px;
  }
  
  /* Dark theme  */ 
  body {
      background-color: #181c1f;
      color: white;
  }
  * {
    box-sizing: border-box;
  }
  
  /* Create three equal columns that floats next to each other */
  .column {
    float: left;
    width: 33.33%;
    padding: 10px;
    height: 800px; /*Should be removed. Only for demonstration */
    text-align: center;
  }
  
  li {
      list-style-type: none;
  }
  </style>
  
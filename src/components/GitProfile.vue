<template>
  <div v-show="showUserData" data-cy="userInfo">
    <img :src="user.avatar_url" height="200px" >
    <h3>Name: {{ user?.name }}</h3>
    <h3 >Location: {{ user?.location }}</h3>
  </div>
</template>

<script>
export default {
  name: 'GitProfile',
  props: {
    msg: String,
    showUserData: Boolean,
    user: {}
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


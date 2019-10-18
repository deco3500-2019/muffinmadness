<template>
  <div class="user-social-status">
    <div class="social-status-label">
      <i class="material-icons">{{ (info[1] === 0) ? 'group' : 'favorite' }}</i>
      <p class="overline">Followers</p>
    </div>
    <h6>{{ info[0] }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array
    },
    profileImg: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.user-social-status {
  padding: 0.5rem 0;
}
.social-status-label {
  display: flex;
}
.social-status-label > p {
  margin: auto 0.25rem;
}
.user-social-status > h6 {
  margin: 0;
}
</style>
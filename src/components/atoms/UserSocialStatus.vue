<template>
  <div class="user-social-status">
    <div class="social-status-label">
      <i class="material-icons">{{ (info[1] === 0) ? 'group' : 'thumb_up' }}</i>
      <p class="overline">{{ (info[1] === 0) ? 'Followers' : 'Likes' }}</p>
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
.social-status-label > p, .user-social-status > h6, .social-status-label > i {
  text-shadow: 0 1px 3px rgba(255,255,255,0.12), 0 1px 2px rgba(255,255,255,0.24);
}
.social-status-label > p {
  margin: auto 0.25rem;
}
.user-social-status > h6 {
  margin: 0;
}
</style>
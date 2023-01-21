<template>
  <div>
    <!-- Page Content -->
    <div class="container mt-4 mb-5">
      <h2 class="mb-4">Page Not Found</h2>

      <div
        class="alert alert-danger alert-dismissible fade show mt-2"
        role="alert"
        v-if="prevRoute"
      >
        Hmm, looks like this is a bad link:
        <span class="ml-1">
          <b>{{ prevRoute }}</b>
        </span>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div>Maybe we could interest you in one of our other pages?</div>
          <div class="mt-3">
            <h4>
              Country roads, take me
              <router-link to="/">Home</router-link>...
            </h4>
          </div>

          <div class="mt-3">
            <h4>
              To the
              <router-link to="/board">Board</router-link>, where I belong...
            </h4>
          </div>

          <div class="mt-3">
            <h4>
              West Virginia,
              <router-link to="/meeting_notes"
                >Mountain Meetin' Notes</router-link
              >...
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: "NotFound",
  data() {
    return {
      prevRoute: this.$route.query.from,
    };
  },
};
</script>

<style scoped></style>

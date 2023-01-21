<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/">
        <span class="navbar-brand">Hyak Property Owners Association</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto" id="top_links">
          <router-link to="/">
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span class="nav-link">Home</span>
            </li>
          </router-link>

          <router-link to="/board">
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span class="nav-link">Board</span>
            </li>
          </router-link>

          <router-link to="/meeting_notes">
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span class="nav-link">Meeting Notes</span>
            </li>
          </router-link>

          <router-link to="/division_maps">
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span class="nav-link">Division Maps</span>
            </li>
          </router-link>

          <router-link to="/links">
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span class="nav-link">Links</span>
            </li>
          </router-link>

          <router-link to="/contact">
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span class="nav-link">Contact</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "hyak-header",
  components: {},
};
</script>

<style lang="css" scoped>
li {
  cursor: pointer;
}

.router-link-exact-active {
  .nav-link {
    color: white !important;
  }
}

/* .nav-link {
  color: inherit;
} */
</style>

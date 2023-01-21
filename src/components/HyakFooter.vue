<template>
  <!-- Footer -->
  <footer class="py-4 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">
        Copyright &copy; Hyak Property Owners Association (HPOA)
        <span class="current_year">{{ current_year }}</span>
      </p>
    </div>
    <!-- /.container -->
  </footer>
</template>

<script lang="ts">
export default {
  name: "hyak-footer",
  components: {},
  data: () => {
    return {
      current_year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped></style>

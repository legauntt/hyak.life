<template>
  <div>
    <h4 class="card-title mt-4">Board Meetings</h4>

    <ul class="list-group">
      <li class="list-group-item">
        <strong>When:</strong> First Tuesday of every (other) month. Usually odd
        months (Jan, Mar, May, Jul, Sep, Nov)
        <br />
      </li>
      <li class="list-group-item"><strong>Time:</strong> 6:30 PM</li>
      <li class="list-group-item">
        <strong>Location:</strong>
        <a
          target="_blank"
          class="ml-3 btn btn-info"
          href="https://www.google.com/maps/place/snoqualmie+pass+fire+and+rescue/@47.4171668,-121.4147039,17z/data=!3m1!4b1!4m5!3m4!1s0x549a79a0476547c1:0x4bfe36062cb6f570!8m2!3d47.4171668!4d-121.4125152"
          >Fire Station</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "hyak-meetings",
  components: {},
  data: () => {
    return {};
  },
};
</script>

<style scoped></style>

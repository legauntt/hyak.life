<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- <div class="alert alert-secondary alert-dismissible fade show mt-2">
            Social Media Policy and Ethics Code (for board members) added under
            <router-link to="/policies">Policies</router-link>.
          </div> -->
          <div
            v-if="onTime"
            class="alert alert-info alert-dismissible fade show mt-2"
            role="alert"
          >
            The next meeting is Oct 3rd at 6:30pm

            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="jumbotron pt-3 pb-3">
            <h1>Welcome!</h1>
            <p class="lead">
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Hyak,_Washington?ref=hyak"
                >Hyak</a
              >
              is a growing community located on Snoqualmie Pass, WA.
            </p>

            <!-- <p class="lead mt-3">Connect with locals on Facebook</p> -->
            <p class="lead mt-3">
              <a
                target="_blank"
                class="btn btn-primary btn-lg groupo"
                href="https://www.facebook.com/groups/324191704292219/"
                >Snoqualmie Pass FB Group</a
              >
              <a
                target="_blank"
                class="btn btn-dark btn-lg groupo"
                href="https://www.facebook.com/groups/132036856811932/"
                >Hyak FB Group</a
              >
              <a
                target="_blank"
                class="btn btn-info btn-lg groupo"
                href="https://www.facebook.com/groups/390039384365073/?ref=group_browse"
                >HPOA FB Group</a
              >
            </p>

            <div class="mt-3 ml-3 mr-3">
              <pre
                style="
                  background: #fff0d5;
                  border: 1px black solid;
                  padding: 20px;
                  text-align: left;
                  white-space: pre-wrap;
                "
                v-if="onTime"
              >
<h3>Upcoming Meeting Agenda for Tuesday, Oct 3rd</h3>
1) Meeting Called to order
	a. Board members present
	b. Welcome guests

2) Meeting Minutes Approval from
	a. 09/05/2022 Meeting

3) Report of Administrator
	a. Attachments

4) Building Committee: (Building applications are accepted up to 10 days prior to meetings)
	a. None submitted by 9.19.2023

5) Old Business
	a. Bylaw’s Committee Update
	b. Building Committee Updated
	c. Insurance policy
	d. Annual Meeting and Neighborhood cleanup reimbursement

6) New Business
	a. Covenant Committee
	b. Signage Committee

7) Communications

8) Guest Comments

9) Executive session for Board Members
	a. Discussion on Legal issue

10) Meeting Adjourned
	a. Next Meeting Date: 11/07/2023
</pre>
            </div>

            <HyakMeetings />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HyakMeetings from "@/components/HyakMeetings.vue";
import moment from "moment";

export default {
  name: "HomeView",
  components: {
    HyakMeetings,
  },

  computed: {
    // only show the upcoming agenda until a little after the meeting date (March 7th)
    onTime() {
      const now = moment();
      const later = moment("2023-10-04 02:00");
      return now.isBefore(later);
    },
  },
};
</script>

<style scoped>
.groupo {
  margin: 5px;
}

.teaser-image {
  object-fit: contain;
  width: 100%;
  border: 3px goldenrod inset;
}
</style>

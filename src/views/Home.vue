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
            The next meeting is June 6th at 6:30pm

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
<h3>Upcoming Meeting Agenda for Tuesday, June 6th</h3>
1) Meeting Called to order
  a. Board members present
  b. Welcome guests

2) New Board Members
  a. Election of positions
    i. President
    ii. Vice President
    iii. Secretary
  iv. Treasurer
    b. Building Committee

3) Meeting Minutes Approval from
  a. 05/02/2022 Meeting

4) Report of Administrator
  a. Attachments
  b. Annual Budget

5) Building Committee: (Building applications are accepted up to 10 days prior to meetings)
  a. Lot 54 Gagnon
  b. 321 Innsbruck - Michael and Tasha James
  c. Lot 48 – Renich (tree removal)

6) Old Business
  a. Bylaw’s Committee Update
    i. STVR Surveys Results
  b. Building Committee Updated
    i. Survey results
  c. Insurance policy (updating current policy)
  d. Annual Meeting and Neighborhood cleanup
    i. Annual Mailer reimbursement
    ii. Annual Cleanup reimbursement

7) New Business
  a. Letter to members without email to get email addresses
  b. Volunteer to rehang neighborhood sign
  c. Governing Documents
    i. An Assessment Collection Policy.  This will establish interest rates, late charges, and
    trigger points when the Board wants liens and other collection action done.
    ii. A Rule for Fines.  This Rule incentivizes owner compliance.
    iii. Rules as recommend above.

8) Communications

9) Guest Comments

10) Executive session of board members
  a. Discussion of Cromwell memo regarding governing documents

  11) Meeting Adjourned
  a. No July meeting
  b. Next Meeting Date: 08/01/2023

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
      const later = moment("2023-06-07 02:00");
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

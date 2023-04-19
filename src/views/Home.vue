<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="alert alert-secondary alert-dismissible fade show mt-2">
            Social Media Policy and Ethics Code (for board members) added under
            <router-link to="/policies">Policies</router-link>.
          </div>
          <div
            v-if="onTime"
            class="alert alert-info alert-dismissible fade show mt-2"
            role="alert"
          >
            The next meeting is May 2nd at 6:30pm

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
<h3>Upcoming Meeting Agenda for Tuesday, May 2nd</h3>

1) Meeting Called to order 
	a. Board members present
	b. Welcome guests

2) Meeting Minutes Approval from 
	a. 04/04/2022 Meeting

3) Report of Administrator
	a. Attachments
	b. Annual Budget
	c. Emailing and mailing invoices

4) Building Committee: (Building applications are accepted up to 10 days prior to meetings)
	a. Lot 54 Gagnon
	b. 321 Innsbruck - Michael and Tasha James

5) Old Business
	a. Bylaw’s Committee Update
	i. STVR and Building Committee Building Guidelines Surveys
	b. Building Committee Updated 
	i. New building application
	c. Community Newsletter
	i. Social media, quarterly and email
	d. Insurance policy (updating current policy)
	e. WM Garbage Service
	f. Covenants Enforcement Policy –
	i. Signage definition from Bylaws
	ii. Fences
	g. Hiring a second Legal Representation specializing in HOA 
	h. County Roads Chipping / Sealing schedule
	
6) New Business
	a. Annual Meeting and Neighborhood cleanup – dates and budget details
	b. Annual Mailer and Ballots 
	c. HPOA Zoom Account
	d. Discussion on releasing plans submitted to building committee
	e. Dave: Entire board input and review of the documents the Bauer's supplied to the Board on 
	April 4, 2023 and include the Elimination of a Segment of Easement document.
	f. Dave: Have a discussion relating to if the Board needs to establish any action points relating to 
	the above documents.
	g. Dave: Regarding WUCOIA - I was provided 2 slides by Kyle Tibbs of WSCAI. I think if a new 
	attorney is selected, it would be best navigated with that individual as I am sure there will be 
	some new governing documents that will need to be executed. The biggest positive I am aware 
	of is the reduction in homeowner voting thresholds to pass new Bylaws and Covenants. 
	h. Dave: I think the Board needs to look at creating Committee chair positions for each board 
	member with the exception of the President. I think for the incoming Board members this will 
	help create some clarity on Board member duties and overall direction of the Board. Some 
	ideas may include Finance, Neighborhood Communications, External Communications,
	Improvements as well as the existing Building committee.
	i. Dave: Also, I know it is a time commitment to serve as a Board member and it seems to be 
	increasing. That being said, there needs to be attendance/participation requirements for the 
	Board members to equalize the burden.

7) Communications

8) Guest Comments

9) Meeting Adjourned 
	a. Next Meeting Date: 06/06/2023 or 07/04/2023

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
      const later = moment("2023-05-03 02:00");
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

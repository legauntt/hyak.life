<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          
			<div v-if="onTime"
            class="alert alert-warning alert-dismissible fade show mt-2"
            role="alert"
          >
            The next meeting is March 7th at 6:30pm

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
<pre style="background: #FFF0D5; border: 1px black solid; padding: 20px; text-align: left; white-space: pre-wrap;" v-if="onTime">
<h3>Upcoming Meeting Agenda for Tuesday, March 7th</h3>

<b>1)	Meeting Called to order</b>
a.	Board members present
b.	Welcome guests

<b>2)	Meeting Minutes Approval from </b>
a.	02/07/2022 Meeting

<b>3)	Report of Administrator</b>
a.	Attachments

<b>4)	Old Business</b>
a.	Contact email addresses
b.	Bylaw's Committee Update
c.	Building Committee Updated 
i.	New building application
d.	Community Newsletter
i.	Social media, quarterly and email
e.	HPOA Board Code of Ethics
f.	Insurance policy
g.	Storage unit
h.	WM Garbage Service
i.	Covenants Enforcement
j.	Interim Access through Private Property at 1041 Snoqualmie Drive
k.	Forest Service Termination of a Segment of an Easement 

<b>5)	New Business</b>
a.	Recording of HPOA Board Meetings 
b.	Hiring a second Legal Representation specializing in HOA 
c.	Senate Bill 5727 

<b>6)	Communications</b>

<b>7)	Guest Comments</b>

<b>8)	Building Committee: (Building applications are accepted up to 10 days prior to meetings)</b>
a.	Lot 54 Gagnon

<b>9)	Meeting Adjourned </b>
a.	Next Meeting Date: 04/04/2023

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
		const later = moment('2023-03-07 02:00');
		return now.isBefore(later);
	}
  }
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

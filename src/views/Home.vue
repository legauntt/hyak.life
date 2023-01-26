<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- <div
            class="alert alert-warning alert-dismissible fade show mt-2"
            role="alert"
          >
            The annual meeting is June 4th @ 9:00 AM, followed by the annual
            neighborhood cleanup

            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div> -->

          <div class="jumbotron pt-3 pb-3">
            <h1>Welcome!</h1>
            <p class="lead">
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Hyak,_Washington"
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

            <div
              class="mt-3 ml-3 mr-3"
            >
<pre style="background: #FFF0D5; border: 1px black solid; padding: 20px; text-align: left;">
	<h2>Upcoming Meeting Agenda for Tuesday, Feb 7th</h2>

1)	Meeting Called to order 
	a.	Board members present
	b.	Welcome guests
	c.	For more info, contact us at <a target="_blank" href="mailto:hpoahyak@outlook.com">hpoahyak@outlook.com</a>
	d.	The meetings are at the <a target="_blank" href="https://www.google.com/maps/place/snoqualmie+pass+fire+and+rescue/@47.4171668,-121.4147039,17z/data=!3m1!4b1!4m5!3m4!1s0x549a79a0476547c1:0x4bfe36062cb6f570!8m2!3d47.4171668!4d-121.4125152">Fire Station</a>

2)	Meeting Minutes Approval from 
	a.	01/03/2022 Meeting

3)	Report of Administrator
	a.	Attachments
	b.	Outstanding dues – notices sent throughout the year

4)	Old Business
	a.	Contact email addresses
	b.	Bylaw’s Committee Update
	c.	Building Committee Updated 
	i.	New building application status
	d.	Community Newsletter
	i.	Social media, quarterly and email
	e.	HPOA Board Code of Ethics
	f.	Insurance policy
	g.	Storage unit

5)	New Business
	a.	WM garbage service reduction in service 
	b.	Reserve Study
	c.	Dues increase to $85.00 per year 
	i.	This would cover the cost of accepting online payments
	d.	Enforcement of Covenants of the following
	i.	All signage (including but not limited “no parking”, “no trespassing”, “private property”, 
		“drive slow our kids live here”, “pick up after your dog”, “Proud of my child graduation”)
	ii.	Ropes, cones or other items neighbors use to keep others out of their driveways
	iii.	Commercial Business and it’s relation to AirBNB and VRBO
	iv.	Skeleton decorations
	v.	Building additions without HPOA Board approval 
	e.	Leadership Course via WSCAI


6)	Communications

7)	Guest Comments

8)	Building Committee: (Building applications are accepted up to 10 days prior to meetings)
	a.	Lot 80 – XX Innsbruck Drive
	b.	Lot 54 Gagnon
	c.	Lot 5

9)	Meeting Adjourned 
	a.	Next Meeting Date: 03/07/2023

</pre
>
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

export default {
  name: "HomeView",
  components: {
    HyakMeetings,
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

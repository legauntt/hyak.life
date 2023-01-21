<template>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="jumbotron pb-3 pt-1">
          <div
            class="alert alert-danger alert-dismissible fade show mt-2"
            role="alert"
          >
            The below included maps of the Hyak Estates neighborhood are
            historical plot maps from 1967. These maps may not reflect any
            updates or changes made since that date of original publication. All
            property information should be verified with Kittitas County.

            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h2 class="my-4">Division Maps</h2>

          <div class="py-2 bg-white">
            <div class="mt-2">
              <h4 class="mt-2">Application, Covenants, and Bylaws</h4>

              <ul class="list-group mt-3 mb-3">
                <li class="list-group-item">
                  <a
                    href="hyak_files/misc/HPOA-Building_Application-2008.pdf"
                    target="_blank"
                    >Building Application</a
                  >
                </li>
                <li class="list-group-item">
                  <a
                    href="hyak_files/misc/HPOA_Covenants_1997.pdf"
                    target="_blank"
                    >Covenants</a
                  >
                </li>
                <li class="list-group-item">
                  <a href="hyak_files/misc/Bylaws2006.pdf" target="_blank"
                    >Bylaws</a
                  >
                </li>
              </ul>

              <h4 class="mt-4">Division Maps</h4>
              <div
                class="alert alert-warning alert-dismissible fade show mt-2"
                role="alert"
              >
                The below included maps of the Hyak Estates neighborhood are
                historical plot maps from 1967. These maps may not reflect any
                updates or changes made since that date of original publication.
                All property information should be verified with Kittitas
                County.

                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <ul class="list-group mt-3 mb-3 division">
                <li class="list-group-item my-0 py-3">
                  <h5>Overview</h5>
                  <a
                    href="hyak_files/division_maps/HyakEstatesOverview.pdf"
                    target="_blank"
                    >Hyak Estates</a
                  >
                </li>

                <li class="list-group-item division my-0 py-3">
                  <h5>Division 1</h5>
                  <p>
                    <a
                      href="hyak_files/division_maps/HyakEstatesDivision1-North.pdf"
                      target="_blank"
                      >North</a
                    >
                  </p>
                  <p>
                    <a
                      href="hyak_files/division_maps/HyakEstatesDivision1-South.pdf"
                      target="_blank"
                      >South</a
                    >
                  </p>
                </li>

                <li class="list-group-item division my-0 py-3">
                  <h5>Division 2</h5>
                  <p>
                    <a
                      href="hyak_files/division_maps/HyakEstatesDivision2-North.pdf"
                      target="_blank"
                      >North</a
                    >
                  </p>
                  <p>
                    <a
                      href="hyak_files/division_maps/HyakEstatesDivision2-South.pdf"
                      target="_blank"
                      >South</a
                    >
                  </p>
                </li>

                <li class="list-group-item division my-0 py-3">
                  <h5>Division 3</h5>
                  <p>
                    <a
                      href="hyak_files/division_maps/HyakEstatesDivision3-North.pdf"
                      target="_blank"
                      >North</a
                    >
                  </p>
                  <p>
                    <a
                      href="hyak_files/division_maps/HyakEstatesDivision3-South.pdf"
                      target="_blank"
                      >South</a
                    >
                  </p>
                </li>

                <li class="list-group-item division my-0 py-3">
                  <h5>Division 4</h5>
                  <p>
                    <a
                      href="hyak_files/division_maps/HyakEstatesDivision4-North.pdf"
                      target="_blank"
                      >North</a
                    >
                  </p>
                  <p>
                    <a
                      href="hyak_files/division_maps/HyakEstatesDivision4-South.pdf"
                      target="_blank"
                      >South</a
                    >
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "meeting-notes",
  components: {},
};
</script>

<style lang="css" scoped>
.division h5 {
  margin-bottom: 12px;
}

.division p {
  display: inline-block;
  margin: 0;
  margin-right: 12px;
}
</style>

<template>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="jumbotron pb-3 pt-1" v-if="!authorized">
          <h2 class="my-4">Meeting Notes</h2>

          <div
            v-if="passwordError"
            class="alert alert-danger mt-2"
            role="alert"
          >
            Invalid password - you can reach out for assistance via the Contact
            page
          </div>

          Password:
          <input
            class="ml-2"
            type="text"
            v-model="password"
            @keyup.enter="openSesame"
          />
          <button class="btn btn-sm btn-primary ml-3" @click="openSesame">
            Open Sesame
          </button>
        </div>

        <div class="jumbotron pb-3 pt-1" v-if="authorized">
          <h2 class="my-4">Meeting Notes</h2>

          <div class="row">
            <div class="col-lg-6">
              <select
                class="form-control form-control-lg"
                v-model="selectedYear"
              >
                <option selected>All Years</option>
                <option v-for="year in years" :key="year">{{ year }}</option>
              </select>
            </div>

            <div class="col-lg-6">
              <select
                class="form-control form-control-lg"
                v-model="selectedType"
              >
                <option selected>All Types</option>
                <option>Annual</option>
                <option>Regular</option>
                <option>Recording</option>
                <!-- <option>Draft</option> -->
              </select>
            </div>
          </div>

          <div class="py-2 bg-white">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Category</th>
                  <!-- <th>Download</th> -->
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="note in filteredMeetingNotes"
                  :key="note.date + '_' + note.title"
                >
                  <td>{{ dateIt(note.date) }}</td>

                  <td v-if="note.recording">
                    <a target="_blank" :href="note.recording.link"
                      >Zoom Share</a
                    >
                    <br />

                    <div
                      v-if="!note.showPassCode"
                      @click="showPassCode(note)"
                      style="
                        color: black;
                        text-decoration: underline;
                        cursor: pointer;
                        margin-top: 5px;
                        font-size: 0.9rem;
                      "
                    >
                      Show Pass Code
                    </div>

                    <div v-if="note.showPassCode">
                      Pass Code:<br />{{ note.recording.passCode }}
                      <br />
                      <button
                        class="btn btn-sm btn-info"
                        @click="copyPasscode(note)"
                      >
                        Copy
                      </button>
                    </div>
                  </td>
                  <td v-else-if="note.filename == '-'">{{ note.title }}</td>
                  <td v-else>
                    <a :href="getLink(note)" target="_blank">{{
                      note.title
                    }}</a>
                  </td>
                  <td>{{ capitalize(note.category) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { MEETING_NOTES_DATA, MEETING_NOTES_YEARS } from "@/data/meetingNotes";
import moment from "moment";

export default {
  name: "meeting-notes",
  components: {},
  computed: {
    filteredMeetingNotes: function (): any {
      return this.meetingNotes.filter((entry) => {
        // Everything
        if (
          this.selectedYear == "All Years" &&
          this.selectedType == "All Types"
        ) {
          return true;
        }

        // All Years
        if (this.selectedYear == "All Years") {
          if (this.selectedType.toLowerCase() == "annual") {
            return entry.category && entry.category.toLowerCase() == "annual";
          } else if (this.selectedType.toLowerCase() == "draft") {
            return entry.category && entry.category.toLowerCase() == "draft";
          } else if (this.selectedType.toLowerCase() == "recording") {
            return (
              entry.category && entry.category.toLowerCase() == "recording"
            );
          } else {
            return entry.category && entry.category.toLowerCase() == "regular";
          }
        }

        const entryYear = moment(entry.date, "YYYY-MM-DD").year();

        // All Types
        if (this.selectedType == "All Types") {
          return String(entryYear) == this.selectedYear;
        }

        // Wrong year?
        if (String(entryYear) != this.selectedYear) {
          return false;
        }

        // Right type?
        if (this.selectedType.toLowerCase() == "annual") {
          return entry.category && entry.category.toLowerCase() == "annual";
        } else if (this.selectedType.toLowerCase() == "draft") {
          return entry.category && entry.category.toLowerCase() == "draft";
        } else {
          return entry.category && entry.category.toLowerCase() == "regular";
        }
      });
    },
  },
  data() {
    return {
      // super secure system with zero pitfalls
      authorized: window.location.host.includes("localhost") ? true : false,
      password: "",
      passwordError: false,
      meetingNotes: MEETING_NOTES_DATA,
      years: MEETING_NOTES_YEARS,
      selectedYear: "All Years",
      selectedType: "All Types",
    };
  },
  methods: {
    getLink(note: any) {
      const year = moment(note.date, moment.ISO_8601).year();
      return `hyak_files/meeting_notes/${year}/${note.filename}`;
    },

    showPassCode(note: any) {
      note.showPassCode = true;
    },

    openSesame() {
      // super secure system with zero pitfalls
      if (this.password.toLowerCase() == "shadowbear") {
        this.authorized = true;
      } else {
        this.password = "";
        this.passwordError = true;
      }
    },

    dateIt(value: any) {
      if (!value) return "";

      const valueAsMoment = moment(value);
      return valueAsMoment.format("MMM D, YYYY");
    },

    copyPasscode(note: any) {
      navigator.clipboard.writeText(note.recording.passCode).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
          alert(
            `Copied to clipboard: "${note.recording.passCode}" - Zoom will ask for this password before viewing the recording.`
          );
        },
        function (err) {
          console.log(`Error with clipboard copy`, err);
          alert(
            `Failed to copy to clipboard: ${note.recording.passCode} - you can type it manually on Zoom website.`
          );
        }
      );
    },

    capitalize(value: any) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped></style>

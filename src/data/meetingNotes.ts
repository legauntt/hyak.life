import moment from "moment";

// full path:
// hyak_files/meeting_notes/{{year}}/{{filename}}

export interface IMeeting {
  date: string;
  category: string;
  title: string;
  filename: string;
  recording?: {
    link: string;
    passCode: string;
  };
}

/**
 * 2023!
 */
const entriesFor2023: IMeeting[] = [
  {
    date: "2023-01-03",
    category: "regular",
    title: "Minutes",
    filename: "January 2023 HPOA Meeting Minutes DRAFT.docx",
  },
  {
    date: "2023-02-07",
    category: "regular",
    title: "Minutes",
    filename: "February 2023 Meeting Minutes HPOA .pdf",
  },
  {
    date: "2023-03-07",
    category: "regular",
    title: "No quorum",
    filename: "-",
  },
  {
    date: "2023-04-04",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Board Meeting  4_4_23 Notes.docx",
  },
  {
    date: "2023-05-02",
    category: "recording",
    title: "Recording",
    filename: "-",
    recording: {
      link: "https://zoom.us/rec/share/4CBCz5TKkloNPjD3xMOKLygaT0jBKmk6XGK6uMCOG-aEOuMsgL8q68EKkSuHewgu.YeN3pQlA_usKKljs",
      passCode: "=1QN1&cs",
    },
  },
  {
    date: "2023-05-02",
    category: "regular",
    title: "Minutes",
    filename: "May 2023 Meeting Minutes HPOA.docx",
  },
  {
    date: "2023-06-06",
    category: "recording",
    title: "Recording",
    filename: "-",
    recording: {
      link: "https://zoom.us/rec/share/DnEtD34nr8-4VFFaoN0q_trWCpDWF0RYRghQmOjVTeODQIm_s_jO65U-qhaD-nbe.BiiLZrNCnb1NhOO2",
      passCode: "ipGGPb.2",
    },
  },
  {
    date: "2023-06-06",
    category: "regular",
    title: "Minutes",
    filename: "June 6 2023  HPOA Board Meeting.pdf",
  },
  {
    date: "2023-08-01",
    category: "recording",
    title: "Recording",
    filename: "-",
    recording: {
      link: "https://zoom.us/rec/share/gkjbcm8fPJk3OpLEu_1BPij4vya4C1DILBZe2W2hIxw5RRb_iZ5lKrAKieu303Dq.mRJvXfng9xpEH7dX",
      passCode: "?16X8=di",
    },
  },
];

/**
 * 2022 - Unexpected.
 */
const entriesFor2022: IMeeting[] = [
  {
    date: "2022-02-01",
    category: "regular",
    title: "Minutes",
    filename: "HPOA February 2022 Meeting Minutes.pdf",
  },
  {
    date: "2022-03-01",
    category: "regular",
    title: "Minutes",
    filename: "HPOA March 2022 Meeting Minutes.docx",
  },
  {
    date: "2022-04-06",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Meeting April 2022 Meeting Minutes.pdf",
  },
  {
    date: "2022-05-03",
    category: "regular",
    title: "Minutes",
    filename: "May 2022 HPOA Meeting - Google Docs.pdf",
  },
  {
    date: "2022-07-05",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Meeting July 2022 Meeting Minutes.pdf",
  },
  {
    date: "2022-08-02",
    category: "regular",
    title: "Minutes",
    filename: "August 2022 HPOA Meeting - Google Docs.pdf",
  },
  {
    date: "2022-09-06",
    category: "regular",
    title: "Minutes",
    filename: "September 2022 HPOA Meeting - Google Docs.pdf",
  },
  {
    date: "2022-10-04",
    category: "regular",
    title: "No agenda items",
    filename: "-",
  },
  {
    date: "2022-11-01",
    category: "regular",
    title: "Minutes",
    filename: "Nov 22 HPOA minutes.pdf",
  },
  {
    date: "2022-12-06",
    category: "regular",
    title: "Minutes",
    filename: "Dec 22 HPOA minutes.pdf",
  },
];

/**
 * 2021 - What have you done with your hair?
 */
const entriesFor2021: IMeeting[] = [
  {
    date: "2021-12-07",
    category: "regular",
    title: "Minutes",
    filename: "HPOA December 2021 Meeting Minutes.pdf",
  },
  {
    date: "2021-09-07",
    category: "regular",
    title: "Minutes",
    filename: "HPOA September 2021 meeting minutes.pdf",
  },
  {
    date: "2021-08-03",
    category: "regular",
    title: "Minutes",
    filename: "August  2021 Meeting Notes.docx",
  },
  {
    date: "2021-07-06",
    category: "regular",
    title: "Minutes",
    filename: "July 2021 Meeting Notes FINAL.docx",
  },
  {
    date: "2021-06-05",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA Annual Meeting Minutes 06-05-2021.pdf",
  },
  {
    date: "2021-05-04",
    category: "regular",
    title: "Minutes",
    filename: "05-04-2021 minutes.pdf",
  },
  {
    date: "2021-04-06",
    category: "regular",
    title: "Minutes",
    filename: "04-06-2021 HPOA Minutes.pdf",
  },
  {
    date: "2021-03-02",
    category: "regular",
    title: "Minutes",
    filename: "03-02-21 Minutes.pdf",
  },
  {
    date: "2021-02-02",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 02-02-2021.pdf",
  },
];

/**
 * 2020 - New decade!
 */
const entriesFor2020: IMeeting[] = [
  {
    date: "2020-12-01",
    category: "regular",
    title: "Minutes",
    filename: "12-01-20 Minutes.pdf",
  },
  {
    date: "2020-03-03",
    category: "regular",
    title: "Minutes",
    filename: "03-03-20 minutes.pdf",
  },
  {
    date: "2020-01-07",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 01-07-2020.pdf",
  },
];

/**
 * 2019 - I'm sure something happened this year
 */
const entriesFor2019: IMeeting[] = [
  {
    date: "2019-11-05",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 11-5-2019.pdf",
  },
  {
    date: "2019-09-03",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 9-3-2019.pdf",
  },
  {
    date: "2019-07-02",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 7-2-2019.pdf",
  },
  {
    date: "2019-05-07",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 5-7-2019.pdf",
  },
  {
    date: "2019-03-05",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 3-5-2019.pdf",
  },
  {
    date: "2019-06-01",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA Annual Meeting Minutes 6-1-2019 posted to website.pdf",
  },
];

/**
 * 2018 - The year of the horse
 */
const entriesFor2018: IMeeting[] = [
  {
    date: "2018-11-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 11-12-2018.pdf",
  },
  {
    date: "2018-09-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA meeting minutes 9.10.18.docx",
  },
  {
    date: "2018-07-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 07-09-2018.pdf",
  },
];

/**
 * 2017 - a year
 */
const entriesFor2017: IMeeting[] = [
  {
    date: "2017-11-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Meeting Minutes November 2017.doc",
  },
  {
    date: "2017-09-18",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Meeting Minutes September 2017.doc",
  },
  {
    date: "2017-05-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Meeting Minutes May 2017.doc",
  },
  {
    date: "2017-03-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Meeting Minutes March 2017.doc",
  },
];

/**
 * 2016 - whew
 */
const entriesFor2016: IMeeting[] = [
  {
    date: "2016-11-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Meeting Minutes November 2016.doc",
  },
  {
    date: "2016-07-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Meeting Minutes July 2016.doc",
  },
  {
    date: "2016-06-04",
    category: "annual",
    title: "Annual Minutes",
    filename: "2016 HPOA Annual Meeting Minutes.docx",
  },
  {
    date: "2016-05-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 05-09-2016.pdf",
  },
  {
    date: "2016-03-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 03-14-2016.pdf",
  },
  {
    date: "2016-01-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 01-11-2016.pdf",
  },
];

/**
 * 2015
 */
const entriesFor2015: IMeeting[] = [
  {
    date: "2015-11-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 11-09-2015.pdf",
  },
  {
    date: "2015-10-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 10-12-2015.pdf",
  },
  {
    date: "2015-09-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 09-14-2015.pdf",
  },
  {
    date: "2015-07-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 07-13-2015.pdf",
  },
  {
    date: "2015-06-06",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_2015.pdf",
  },
  {
    date: "2015-05-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 05-11-2015.pdf",
  },
  {
    date: "2015-03-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 03-09-2015.pdf",
  },
];

/**
 * 2014
 */
const entriesFor2014: IMeeting[] = [
  {
    date: "2014-11-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 11-10-14.pdf",
  },
  {
    date: "2014-09-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 9-08-14.pdf",
  },
  {
    date: "2014-07-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA Minutes 7-14-14.pdf",
  },
  {
    date: "2014-03-10",
    category: "regular",
    title: "Minutes",
    filename: "03-10-2014 minutes.pdf",
  },
];

/**
 * 2013
 */
const entriesFor2013: IMeeting[] = [
  {
    date: "2013-11-11",
    category: "regular",
    title: "Minutes",
    filename: "11-9-2013 minutes.pdf",
  },
  {
    date: "2013-06-01",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_2013.pdf",
  },
];

/**
 * 2012
 */
const entriesFor2012: IMeeting[] = [
  {
    date: "2012-06-02",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA Annual Meeting Minutes 2012.pdf",
  },
  {
    date: "2012-05-14",
    category: "regular",
    title: "Minutes",
    filename: "05-14-2012 minutes.pdf",
  },
  {
    date: "2012-04-09",
    category: "regular",
    title: "Minutes",
    filename: "04-09-2012 Minutes.pdf",
  },
  {
    date: "2012-01-09",
    category: "regular",
    title: "Minutes",
    filename: "01-09-12 Minutes.pdf",
  },
];

/**
 * 2011
 */
const entriesFor2011: IMeeting[] = [
  {
    date: "2011-11-08",
    category: "regular",
    title: "Minutes",
    filename: "11-08-11 minutes.pdf",
  },
  {
    date: "2011-09-13",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 9-13-11.pdf",
  },
  {
    date: "2011-08-09",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 8-9-2011.pdf",
  },
  {
    date: "2011-07-12",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 7-12-2011.pdf",
  },
  {
    date: "2011-06-20",
    category: "regular",
    title: "Minutes",
    filename: "Minutes 6-20-11.pdf",
  },
  {
    date: "2011-03-21",
    category: "regular",
    title: "Minutes",
    filename: "03-21-11 Minutes.pdf",
  },
];

/**
 * 2010 - New decade!
 */
const entriesFor2010: IMeeting[] = [
  {
    date: "2010-11-15",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20101115.pdf",
  },
  {
    date: "2010-06-05",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20100605.pdf",
  },
  {
    date: "2010-01-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20100112.pdf",
  },
  {
    date: "2010-01-01",
    category: "budget",
    title: "2009-2010 Budget",
    filename: "2010-2011_Budget.pdf",
  },
];

/**
 * 2009
 */
const entriesFor2009: IMeeting[] = [
  {
    date: "2009-12-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20091208.pdf",
  },
  {
    date: "2009-09-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090908.pdf",
  },
  {
    date: "2009-07-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090714.pdf",
  },
  {
    date: "2009-06-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090609.pdf",
  },
  {
    date: "2009-05-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090512.pdf",
  },
  {
    date: "2009-04-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090414.pdf",
  },
  {
    date: "2009-03-21",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20090315.pdf",
  },
  {
    date: "2009-03-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090310.pdf",
  },
  {
    date: "2009-02-15",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20090215.pdf",
  },
];

const entriesFor2008: IMeeting[] = [
  {
    date: "2008-10-19",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20081019.pdf",
  },
  {
    date: "2008-09-21",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080921.pdf",
  },
  {
    date: "2008-08-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080812.pdf",
  },
  {
    date: "2008-07-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080708.pdf",
  },
  {
    date: "2008-06-10",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080610.pdf",
  },
  {
    date: "2008-05-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080513.pdf",
  },
  {
    date: "2008-04-08",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080408.pdf",
  },
  {
    date: "2008-03-15",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOA_AnnualMeetingMinutes_20080315.pdf",
  },
  {
    date: "2008-03-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080311.pdf",
  },
  {
    date: "2008-02-12",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080212.pdf",
  },
  {
    date: "2008-01-22",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20080122.pdf",
  },
];

const entriesFor2007: IMeeting[] = [
  {
    date: "2007-12-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071211.pdf",
  },
  {
    date: "2007-11-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071113.pdf",
  },
  {
    date: "2007-10-09",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20071009.pdf",
  },
  {
    date: "2007-09-11",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070911.pdf",
  },
  {
    date: "2007-08-14",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070814.pdf",
  },
  {
    date: "2007-03-17",
    category: "annual",
    title: "Annual Minutes",
    filename: "HPOADraftAnnualMeetingMinutes2007.pdf",
  },
  {
    date: "2007-03-13",
    category: "regular",
    title: "Minutes",
    filename: "HPOA_BoardMeetingMinutes_20070313.pdf",
  },
];

const allEntries: IMeeting[] = ([] as IMeeting[]).concat(
  entriesFor2023,
  entriesFor2022,
  entriesFor2021,
  entriesFor2020,
  entriesFor2019,
  entriesFor2018,
  entriesFor2017,
  entriesFor2016,
  entriesFor2015,
  entriesFor2014,
  entriesFor2013,
  entriesFor2012,
  entriesFor2011,
  entriesFor2010,
  entriesFor2009,
  entriesFor2008,
  entriesFor2007
);

// Sort in descending order
allEntries.sort((a, b) => {
  const momeA = moment(a.date, "YYYY-MM-DD");
  const momeB = moment(b.date, "YYYY-MM-DD");
  return momeB.diff(momeA);
});

const years: string[] = [];
allEntries.forEach((entry) => {
  const year = String(moment(entry.date).year());
  if (!years.includes(year)) {
    years.push(year);
  }
});

export const MEETING_NOTES_YEARS = years;
export const MEETING_NOTES_DATA = allEntries;

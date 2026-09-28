/* =====================================================================
   JYE & MOLLY — WEBSITE CONTENT
   ---------------------------------------------------------------------
   This is the only file you need to edit to change words, times,
   links and photos. Everything else builds itself from this.

   Rules of thumb:
   - Keep text inside the quote marks "like this".
   - Every item in a list ends with a comma, except it doesn't hurt
     to leave one on the last item too.
   - If the site suddenly shows a "typo" message, look for a missing
     comma or quote mark near whatever you last changed.
   - Anything saying TBC is a placeholder for you to fill in.
   ===================================================================== */

window.WEDDING = {

  /* ---------- The basics ---------- */
  names: { first: "Jye", second: "Molly" },
  fullNames: "Jye Marchant & Molly-Anne Harbort",
  monogram: "J & M",
  date: "Saturday 3 July 2027",
  dateISO: "2027-07-03T14:30:00+10:00",   // used for the countdown
  venue: "Camperdown Commons",
  suburb: "Camperdown, Sydney",
  address: "31A Mallett Street, Camperdown NSW 2050",
  mapLink: "https://maps.google.com/?q=Camperdown+Commons+31A+Mallett+Street+Camperdown",

  /* ---------- Photos ----------
     Put image files in the "photos" folder, then list them here.
     heroPhotos: the big pictures at the top. They fade from one to the
     next every few seconds. Leave the list empty [] for plain green.
     venuePhotos: the pictures that cycle next to the venue details.
     gallery: the photo grid further down the page. */
  heroPhotos: [
    "photos/ceremony.jpg",
    "photos/proposal.jpg",
  ],
  venuePhotos: [
    "photos/garden-table.jpg",
    "photos/long-table.jpg",
    "photos/dinner-candles.jpg",
    "photos/grazing-table.jpg",
  ],
  gallery: [
    { file: "photos/proposal.jpg", caption: "" },
    { file: "photos/dinner-date.jpg", caption: "" },
    { file: "photos/jyemollyhike.jpg", caption: "" },
    { file: "photos/jyemolly.jpg", caption: "" },
  ],
  galleryNote: "We'll upload photos from the wedding here for everyone to see!",   // "" to hide
  mapImage: "photos/map.jpg",   // the map in "Getting there" ("" to hide it)

  /* ---------- Welcome ---------- */
  welcomeTitle: "We're getting married",
  welcome: [
    "We'd love you to join us for an afternoon and evening of celebration!",
    "Hopefully everything you need to know is on this page, we'll keep it updated as the day gets closer.",
  ],

  /* ---------- On the day ----------
     icon options: arrive, rings, drinks, dinner, dance, home */
  schedule: [
    { time: "2:30pm", title: "Guests arrive", icon: "arrive" },
    { time: "TBC",    title: "Ceremony",      icon: "rings"  },
    { time: "TBC",    title: "Drinks & canapés", icon: "drinks" },
    { time: "TBC",    title: "Dinner",        icon: "dinner" },
    { time: "TBC",    title: "Dancing",       icon: "dance"  },
    { time: "11:30pm",    title: "Venue Closes",     icon: "home"   },
  ],
  scheduleNote: "Please aim to arrive by 2:30pm.",

  /* ---------- Dress code ---------- */
  dressCode: {
    title: "TBC",           // e.g. "Cocktail"
    text: "The ceremony and reception will be outdoors. There will be outdoor heating, but we recommend bringing something warm just in case!",
  },

  /* ---------- Getting there & staying nearby ---------- */
  travel: [
    { heading: "By train",
      text: "Newtown Station (T2 line) is about a 10-minute walk from the venue." },
    { heading: "By bus",
      text: "Plenty of buses run along Parramatta Road, with stops near Mallett Street and Missenden Road." },
    { heading: "By car",
      text: "Parking is tricky, so we'd probably recommend a cab, Uber or public transport." },
    { heading: "Cab or Uber",
      text: "Drop-off is right at 31A Mallett Street." },
  ],
  accommodation: [
    // { name: "Hotel name", area: "Newtown", note: "10 min walk", link: "https://..." },
  ],
  accommodationNote: "Anywhere in the city or surrounding suburbs should be easy to get to the venue from on the day. We'd probably reccomend Camperdown, Newtown, Glebe, Annandale, Enmore, Liechardt, etc. if you want to be really close by. Please let us know if we can help or if you need any advice finding a place to stay!",

  /* ---------- Wishing well ---------- */
  wishingWell: [
    "Having you there is the only gift we need!",
    "However, if you would like to contribute something toward the evening, there will be a wishing well on the night, or you can follow this link to transfer digitally (TBC)",
  ],

  /* ---------- FAQ ---------- */
  faqs: [
    { q: "What is the dinner on the previous night?",
      a: "We're going to book a nearby pub (venue TBC) for anybody that wants to come for a causal dinner/drinks the night before, just let us know if you want to come along!" },
    { q: "What if it rains?",
      a: "The venue has covered spaces, so the day will go ahead either way." },
    { q: "I have dietary requirements.",
      a: "Let us know in the RSVP form and we'll make sure there's something there for you!" },
    { q: "Where can I park?",
      a: "Parking is tricky. There's a couple of small carparks close by, but these tend to be busy, and nearby streets are mostly 2-hour limits that are closely monitored, so we'd probably recommend a cab, Uber or public transport." },
    { q: "Who do I contact with questions?",
      a: "Give either of us a call or text:", showContacts: true },
  ],

  /* ---------- Contact details (tap to call on phones) ---------- */
  contacts: [
    { name: "Jye",   phone: "0448 015 034" },
    { name: "Molly", phone: "0400 711 308" },
  ],

  /* ---------- RSVP ----------
     Make a Google Form, click Send → link icon, copy the link, and
     paste it into rsvpLink. Until then the button says "coming soon". */
  rsvpLink: "",
  rsvpBy: "TBC",            // e.g. "1 April 2027"
};

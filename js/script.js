/* =========================================================================
   ADD YOUR OWN PHOTOS & VIDEOS HERE
   ------------------------------------------------------------------------
   1. Drop your photo/video files into the "media" folder next to this file
      (e.g. media/beach-day.jpg, media/our-trip.mp4).
   2. Add an entry below for each one. type is "image" or "video".
   3. category must be one of:
      "continue", "top10", "edits", "photos", "dates", "trips",
      "throwbacks", "new"
      (this decides which row it shows up in — an item can only be in one).
   4. "progress" (0-100) only matters for items in the "continue" row —
      it draws the little red progress bar like Netflix does.
   5. Save the file and refresh the page in your browser.
   ========================================================================= */

const media = [
  { id: 5, title: "How we met", type: "video", category: "throwbacks", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/how-we-met.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/how-we-met.png", date: "Day one", caption: "Where it all started." },
  { id: 55, title: "How we met", type: "video", category: "continue", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/how-we-met.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/how-we-met.png", date: "Day one", caption: "Where it all started.", progress: 45 },
  { id: 6, title: "One year mix", type: "video", category: "throwbacks", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/one-year-mix.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/one-year-mix.png", date: "One year in", caption: "A little recap of our first year." },
  { id: 7, title: "Beach day bloopers", type: "video", category: "trips_hidden", thumb: "/media/thumbnails/beach-thumb.jpg", date: "July 2024", caption: "All the outtakes from our beach trip." },
  { id: 8, title: "Mountain hike", type: "image", category: "trips_hidden", src: "/media/thumbnails/hike.jpg", thumb: "/media/thumbnails/hike.jpg", date: "August 2024", caption: "You made it to the top before me, as always." },
  { id: 100, title: "Cute Edits", type: "series", category: "edits", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Cute-edits.png", date: "Cute Edits · Season 1", caption: "All of our cute edits in one bingeable series." },
  { id: 101, title: "Episode 1", type: "video", category: "edits_episodes", episode: 1, duration: "1:08", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/cute-edits-ep1.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-1-thumb.jpg", date: "Cute Edits · Season 1", caption: "Episode 1 of our Cute Edits series." },
  { id: 102, title: "Episode 2", type: "video", category: "edits_episodes", episode: 2, duration: "1:17", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/cute-edits-ep2.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-2-thumb.jpg", date: "Cute Edits · Season 1", caption: "Episode 2 of our Cute Edits series." },
  { id: 103, title: "Episode 3", type: "video", category: "edits_episodes", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/silly-faces.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-3-thumb.jpg", date: "Cute Edits · Season 1", caption: "Silly faces compilation." },
  { id: 104, title: "Episode 4", type: "video", category: "edits_episodes", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/our-moments.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-4-thumb.jpg", date: "Cute Edits · Season 1", caption: "bin tere nhi h guzara mera" },
  { id: 14, title: "City lights walk", type: "image", category: "trips_hidden", src: "/media/thumbnails/city-lights.jpg", thumb: "/media/thumbnails/city-lights.jpg", date: "May 2025", caption: "Getting lost on purpose." },
  { id: 15, title: "Birthday surprise", type: "video", category: "new", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/birthday_kesariya_edit.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Birthday-suprise.png", date: "Last month", caption: "The reaction was worth every second of planning." },
  { id: 17, title: "Anniversary recap", type: "video", category: "new", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/anniversary-recap.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Anniversary-recap-thumbnail.png", date: "Last week", caption: "Every moment of the best year yet." },
  { id: 170, title: "Anniversary recap", type: "video", category: "top10", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/anniversary-recap.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Anniversary-recap-thumbnail-2.png", date: "Last week", caption: "Every moment of the best year yet." },
  { id: 28, title: "us kissing 💋", type: "video", category: "top10", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/kiss-merged.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Us-kissing.png", date: "Recently", caption: "1 minute kiss compilation" },
  { id: 118, title: "BLOOPERS", type: "video", category: "top10", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/bloopers.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Bloopers-thumbnail.png", date: "Recently", caption: "Bloopers" },
  { id: 117, title: "our fit check", type: "video", category: "top10", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/fit_check.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/fit_check_thumb.png", date: "Recently", caption: "Our fit check video." },
  { id: 119, title: "One Year Mix", type: "video", category: "top10", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/one-year-mix.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/One-year-mix-2.png", date: "1 Year Anniversary", caption: "A beautiful mix of our first year together." },
  { id: 105, title: "Valentine Week", type: "series", category: "edits", seriesKey: "valentine", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Valentine.png", date: "Valentine Week · Season 1", caption: "Our special Valentine Week." },
  { id: 29, title: "Rose Day", type: "video", category: "valentine_episodes", episode: 1, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/roseday_trimmed_155.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-1-thumb.jpg", date: "Valentine Week · Season 1", caption: "Rose day special" },
  { id: 26, title: "Valentine Proposal", type: "video", category: "valentine_episodes", episode: 2, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/valentine-proposal.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-2-thumb.jpg", date: "Valentine Week · Season 1", caption: "The moment I asked you to be mine." },
  { id: 30, title: "Teddy Day", type: "video", category: "valentine_episodes", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/teddy-day.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-3-thumb.jpg", date: "Valentine Week · Season 1", caption: "Teddy day" },
  { id: 33, title: "Promise Day", type: "video", category: "valentine_episodes", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/promise-day.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-4-thumb.jpg", date: "Valentine Week · Season 1", caption: "Promise day" },
  { id: 32, title: "Hug Day", type: "video", category: "valentine_episodes", episode: 5, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/hug-day.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-5-thumb.png", date: "Valentine Week · Season 1", caption: "Hug day" },
  { id: 27, title: "kiss day valentine week", type: "video", category: "valentine_episodes", episode: 6, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/kiss-day.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-6-thumb.png", date: "Valentine Week · Season 1", caption: "Kiss day" },
  { id: 31, title: "Valentine's Day Gift", type: "video", category: "valentine_episodes", episode: 7, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/valentine-gift.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-7-thumb.png", date: "Valentine Week · Season 1", caption: "Valentine's Day Gift" },

  { id: 108, title: "my cute shinchan", type: "series", category: "edits", seriesKey: "shinchan", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/My-cute-Shinchan.png", date: "My Cute Shinchan · Season 1", caption: "My cute shinchan series." },
  { id: 109, title: "Episode 1", type: "video", category: "shinchan_episodes", episode: 1, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/shinchan-1.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-1-thumb.jpg", date: "My Cute Shinchan · Season 1", caption: "shinchan 1" },
  { id: 111, title: "Episode 2", type: "video", category: "shinchan_episodes", episode: 2, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/shinchan-ep2.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-2-thumb.jpg", date: "My Cute Shinchan · Season 1", caption: "shinchan 2" },
  { id: 112, title: "Episode 3", type: "video", category: "shinchan_episodes", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/shinchan-ep3.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-3-thumb.jpg", date: "My Cute Shinchan · Season 1", caption: "shinchan 3" },
  { id: 113, title: "Episode 4", type: "video", category: "shinchan_episodes", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/shinchan-ep4.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/ep-episode-4-thumb.jpg", date: "My Cute Shinchan · Season 1", caption: "shinchan 4" },
  { id: 110, title: "oracle", type: "video", category: "dates", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/oracle.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Oracle-thumbnail.png", date: "Recently", caption: "oracle says we are a perfect match" },
  { id: 114, title: "mein Kush ho jati 😁", type: "video", category: "dates", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/mein-khush.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Our-drama-part-1.png", date: "Recently", caption: "Our Drama" },
  { id: 126, title: "jalwa", type: "video", category: "dates", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/jalwa.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Our-drama-part-2.png", date: "Recently", caption: "jalwa" },
  { id: 997, title: "Secret Vault", type: "video", category: "secret", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/secret-vault.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/secret-message-thumb.png", date: "Shhh...", caption: "Another secret memory." },

  { id: 999, title: "A Special Letter", type: "letter", category: "secret", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/letter-thumb.png", date: "Open me", caption: "A love letter just for you." },
  { id: 115, title: "Why I love you so much", type: "video", category: "dates", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/how-much-i-love-you.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Why-I-Love-you-so-much.png", date: "Recently", caption: "Why I love you so much" },
  { id: 1155, title: "Why I love you so much", type: "video", category: "continue", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/how-much-i-love-you.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Why-I-Love-you-so-much.png", date: "Recently", caption: "Why I love you so much", progress: 70 },
  { id: 116, title: "meow earings", type: "video", category: "dates", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/meow-earings.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/meow-earings.png", date: "Recently", caption: "meow earings" },
  { id: 125, title: "gand mara", type: "video", category: "dates", src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/gand-mara.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/Our-bakchodi.png", date: "Recently", caption: "gand mara" },
  { id: 200, title: "Fresher Party", type: "album", category: "photos", albumKey: "fresher_party_gallery", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/fresher-cover.png", date: "Fresher Party", caption: "All the memories from the fresher party." },
  { id: 201, title: "Photo 1", type: "image", category: "fresher_party_gallery", episode: 1, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-1.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-1.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 202, title: "Photo 2", type: "image", category: "fresher_party_gallery", episode: 2, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-2.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-2.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 203, title: "Photo 3", type: "image", category: "fresher_party_gallery", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-3.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-3.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 204, title: "Photo 4", type: "image", category: "fresher_party_gallery", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-4.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-4.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 205, title: "Photo 5", type: "image", category: "fresher_party_gallery", episode: 5, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-5.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-5.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 206, title: "Photo 6", type: "image", category: "fresher_party_gallery", episode: 6, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-6.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-6.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 207, title: "Photo 7", type: "image", category: "fresher_party_gallery", episode: 7, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-7.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-7.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 208, title: "Photo 8", type: "image", category: "fresher_party_gallery", episode: 8, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-8.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-8.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 209, title: "Photo 9", type: "image", category: "fresher_party_gallery", episode: 9, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-9.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-9.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 210, title: "Photo 10", type: "image", category: "fresher_party_gallery", episode: 10, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-10.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-10.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 211, title: "Photo 11", type: "image", category: "fresher_party_gallery", episode: 11, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-11.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-11.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 212, title: "Photo 12", type: "image", category: "fresher_party_gallery", episode: 12, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-12.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-12.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 213, title: "Photo 13", type: "image", category: "fresher_party_gallery", episode: 13, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-13.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-13.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 214, title: "Photo 14", type: "image", category: "fresher_party_gallery", episode: 14, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-14.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fresher-14.jpeg", date: "Fresher Party", caption: "Fresher party moment" },
  { id: 700, title: "Fest", type: "album", category: "photos", albumKey: "fest_gallery", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/fest-cover.png", date: "Fest", caption: "Fest memories" },
  { id: 701, title: "Photo 1", type: "image", category: "fest_gallery", episode: 1, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-1.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-1.jpeg", date: "Fest", caption: "Fest moment" },
  { id: 702, title: "Photo 2", type: "image", category: "fest_gallery", episode: 2, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-2.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-2.jpeg", date: "Fest", caption: "Fest moment" },
  { id: 703, title: "Photo 3", type: "image", category: "fest_gallery", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-3.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-3.jpeg", date: "Fest", caption: "Fest moment" },
  { id: 704, title: "Photo 4", type: "image", category: "fest_gallery", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-4.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-4.jpeg", date: "Fest", caption: "Fest moment" },
  { id: 705, title: "Photo 5", type: "image", category: "fest_gallery", episode: 5, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-5.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/fest-5.jpeg", date: "Fest", caption: "Fest moment" },
  { id: 300, title: "Retro Pics", type: "album", category: "photos", albumKey: "retro_gallery", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/retro-cover.png", date: "Retro Pics", caption: "Retro pics" },
  { id: 301, title: "Photo 1", type: "image", category: "retro_gallery", episode: 1, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-1.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-1.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 302, title: "Photo 2", type: "image", category: "retro_gallery", episode: 2, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-2.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-2.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 303, title: "Photo 3", type: "image", category: "retro_gallery", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-3.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-3.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 304, title: "Photo 4", type: "image", category: "retro_gallery", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-4.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-4.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 305, title: "Photo 5", type: "image", category: "retro_gallery", episode: 5, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-5.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-5.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 306, title: "Photo 6", type: "image", category: "retro_gallery", episode: 6, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-6.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-6.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 307, title: "Photo 7", type: "image", category: "retro_gallery", episode: 7, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-7.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-7.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 308, title: "Photo 8", type: "image", category: "retro_gallery", episode: 8, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-8.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-8.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 309, title: "Photo 9", type: "image", category: "retro_gallery", episode: 9, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-9.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-9.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 310, title: "Photo 10", type: "image", category: "retro_gallery", episode: 10, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-10.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-10.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 311, title: "Photo 11", type: "image", category: "retro_gallery", episode: 11, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-11.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-11.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 312, title: "Photo 12", type: "image", category: "retro_gallery", episode: 12, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-12.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-12.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 313, title: "Photo 13", type: "image", category: "retro_gallery", episode: 13, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-13.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/retro-13.jpeg", date: "Retro Pics", caption: "Retro vibes" },
  { id: 400, title: "Birthday Pics", type: "album", category: "photos", albumKey: "birthday_gallery", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/birthday-cover.png", date: "Birthday Pics", caption: "Birthday pics" },
  { id: 401, title: "Photo 1", type: "image", category: "birthday_gallery", episode: 1, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-1.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-1.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 402, title: "Photo 2", type: "image", category: "birthday_gallery", episode: 2, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-2.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-2.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 403, title: "Photo 3", type: "image", category: "birthday_gallery", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-3.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-3.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 404, title: "Photo 4", type: "image", category: "birthday_gallery", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-4.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-4.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 405, title: "Photo 5", type: "image", category: "birthday_gallery", episode: 5, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-5.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-5.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 406, title: "Photo 6", type: "image", category: "birthday_gallery", episode: 6, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-6.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-6.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 407, title: "Photo 7", type: "image", category: "birthday_gallery", episode: 7, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-7.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-7.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 408, title: "Photo 8", type: "image", category: "birthday_gallery", episode: 8, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-8.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-8.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 409, title: "Photo 9", type: "image", category: "birthday_gallery", episode: 9, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-9.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-9.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 410, title: "Photo 10", type: "image", category: "birthday_gallery", episode: 10, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-10.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-10.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 411, title: "Photo 11", type: "image", category: "birthday_gallery", episode: 11, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-11.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-11.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 412, title: "Photo 12", type: "image", category: "birthday_gallery", episode: 12, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-12.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-12.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 413, title: "Photo 13", type: "image", category: "birthday_gallery", episode: 13, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-13.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-13.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 414, title: "Photo 14", type: "image", category: "birthday_gallery", episode: 14, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-14.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-14.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 415, title: "Photo 15", type: "image", category: "birthday_gallery", episode: 15, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-15.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-15.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 416, title: "Photo 16", type: "image", category: "birthday_gallery", episode: 16, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-16.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-16.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 417, title: "Photo 17", type: "image", category: "birthday_gallery", episode: 17, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-17.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-17.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 418, title: "Photo 18", type: "image", category: "birthday_gallery", episode: 18, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-18.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-18.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 419, title: "Photo 19", type: "image", category: "birthday_gallery", episode: 19, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-19.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-19.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 420, title: "Photo 20", type: "image", category: "birthday_gallery", episode: 20, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-20.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-20.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 421, title: "Photo 21", type: "image", category: "birthday_gallery", episode: 21, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-21.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-21.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 422, title: "Photo 22", type: "image", category: "birthday_gallery", episode: 22, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-22.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-22.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 423, title: "Photo 23", type: "image", category: "birthday_gallery", episode: 23, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-23.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-23.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 424, title: "Photo 24", type: "image", category: "birthday_gallery", episode: 24, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-24.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-24.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 425, title: "Photo 25", type: "image", category: "birthday_gallery", episode: 25, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-25.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-25.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 426, title: "Photo 26", type: "image", category: "birthday_gallery", episode: 26, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-26.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-26.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 427, title: "Photo 27", type: "image", category: "birthday_gallery", episode: 27, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-27.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-27.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 428, title: "Photo 28", type: "image", category: "birthday_gallery", episode: 28, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-28.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-28.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 429, title: "Photo 29", type: "image", category: "birthday_gallery", episode: 29, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-29.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/birthday-29.jpeg", date: "Birthday Pics", caption: "Birthday vibes" },
  { id: 500, title: "Randoms", type: "album", category: "photos", albumKey: "randoms_gallery", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/randoms-cover.png", date: "Randoms", caption: "Random moments" },
  { id: 501, title: "Photo 1", type: "image", category: "randoms_gallery", episode: 1, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-1.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-1.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 502, title: "Photo 2", type: "image", category: "randoms_gallery", episode: 2, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-2.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-2.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 503, title: "Photo 3", type: "image", category: "randoms_gallery", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-3.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-3.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 504, title: "Photo 4", type: "image", category: "randoms_gallery", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-4.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-4.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 505, title: "Photo 5", type: "image", category: "randoms_gallery", episode: 5, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-5.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-5.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 506, title: "Photo 6", type: "image", category: "randoms_gallery", episode: 6, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-6.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-6.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 507, title: "Photo 7", type: "image", category: "randoms_gallery", episode: 7, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-7.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-7.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 508, title: "Photo 8", type: "image", category: "randoms_gallery", episode: 8, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-8.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-8.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 509, title: "Photo 9", type: "image", category: "randoms_gallery", episode: 9, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-9.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-9.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 510, title: "Photo 10", type: "image", category: "randoms_gallery", episode: 10, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-10.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-10.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 511, title: "Photo 11", type: "image", category: "randoms_gallery", episode: 11, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-11.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-11.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 512, title: "Photo 12", type: "image", category: "randoms_gallery", episode: 12, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-12.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-12.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 513, title: "Photo 13", type: "image", category: "randoms_gallery", episode: 13, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-13.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/random-13.jpeg", date: "Randoms", caption: "Randoms" },
  { id: 514, title: "Video 14", type: "video", category: "randoms_gallery", episode: 14, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/random-video-1.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/silly-thumb.jpg", date: "Randoms", caption: "Randoms video" },
  { id: 515, title: "Video 15", type: "video", category: "randoms_gallery", episode: 15, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/random-video-2.mp4", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/silly-thumb.jpg", date: "Randoms", caption: "Randoms video" },
  { id: 600, title: "First Few", type: "album", category: "photos", albumKey: "first_few_gallery", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-thumbs/first-few-cover.png", date: "First Few", caption: "The first few moments" },
  { id: 601, title: "Photo 1", type: "image", category: "first_few_gallery", episode: 1, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-1.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-1.jpeg", date: "First Few", caption: "First few" },
  { id: 602, title: "Photo 2", type: "image", category: "first_few_gallery", episode: 2, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-2.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-2.jpeg", date: "First Few", caption: "First few" },
  { id: 603, title: "Photo 3", type: "image", category: "first_few_gallery", episode: 3, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-3.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-3.jpeg", date: "First Few", caption: "First few" },
  { id: 604, title: "Photo 4", type: "image", category: "first_few_gallery", episode: 4, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-4.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-4.jpeg", date: "First Few", caption: "First few" },
  { id: 605, title: "Photo 5", type: "image", category: "first_few_gallery", episode: 5, src: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-5.jpeg", thumb: "https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-photos/firstfew-5.jpeg", date: "First Few", caption: "First few" }
];

const rowMap = {
  mylist: 'row-mylist',
  continue: 'row-continue',
  top10: 'row-top10',
  edits: 'row-edits',
  photos: 'row-photos',
  dates: 'row-dates',
  trips: 'row-trips',
  throwbacks: 'row-throwbacks',
  new: 'row-new',
  secret: 'row-secret'
};

let myFavorites = JSON.parse(localStorage.getItem('ourflix-favorites')) || [];

function toggleFavorite(e, id) {
  e.stopPropagation();
  if (myFavorites.includes(id)) {
    myFavorites = myFavorites.filter(fId => fId !== id);
  } else {
    myFavorites.push(id);
  }
  localStorage.setItem('ourflix-favorites', JSON.stringify(myFavorites));
  Object.entries(rowMap).forEach(([category, containerId]) => {
    if (document.getElementById(containerId)) {
      renderRow(containerId, category);
    }
  });
}

/* ---------- rendering ---------- */

function placeholderStyle(seed) {
  const hues = [350, 20, 260, 190, 40, 300, 160, 210];
  const h = hues[seed % hues.length];
  return `background:linear-gradient(135deg, hsl(${h} 45% 22%), hsl(${(h + 40) % 360} 40% 12%));`;
}

function episodeRowHTML(item) {
  if (item.comingSoon) {
    return `
      <div class="episode-row disabled" data-id="${item.id}">
        <span class="episode-number">${item.episode}</span>
        <div class="episode-thumb" style="${placeholderStyle(item.id)}"></div>
        <div class="episode-info">
          <div class="episode-title-line">
            <span class="episode-title">${item.title}</span>
            <span class="episode-duration">—</span>
          </div>
          <span class="episode-soon-tag">COMING SOON</span>
          <p class="episode-desc">${item.caption}</p>
        </div>
      </div>`;
  }
  return `
    <div class="episode-row" data-id="${item.id}">
      <span class="episode-number">${item.episode}</span>
      <div class="episode-thumb" style="background-image:url('${item.thumb}');">
        <span class="ep-play"><div class="ep-play-icon">▶</div></span>
      </div>
      <div class="episode-info">
        <div class="episode-title-line">
          <span class="episode-title">${item.title}</span>
          <span class="episode-duration">${item.duration || ''}</span>
        </div>
        <p class="episode-desc">${item.caption}</p>
      </div>
    </div>`;
}

// renderEpisodeList removed since it's now dynamically inserted into modal

function cardHTML(item) {
  if (item.comingSoon) {
    const epBadge = item.episode ? `E${item.episode}` : 'SOON';
    return `
      <div class="card teaser-card" data-id="${item.id}">
        <span class="card-badge">${epBadge}</span>
        <div class="teaser-content">
          <div class="teaser-badge">COMING SOON</div>
          <div class="teaser-title">${item.title}</div>
          <div class="teaser-subtitle">Filming soon 🎬</div>
        </div>
      </div>`;
  }
  let progress = item.progress;
  const savedPct = localStorage.getItem('ourflix-pct-' + item.id);
  if (savedPct) progress = parseFloat(savedPct);

  const progressBar = progress
    ? `<div class="card-progress"><span style="width:${progress}%"></span></div>`
    : '';
  const badgeLabel = item.episode ? `E${item.episode}` : '';
  
  const isFav = myFavorites.includes(item.id);
  const heartClass = isFav ? 'active' : '';
  const favBtn = `<div class="card-favorite-btn ${heartClass}" onclick="toggleFavorite(event, ${item.id})">♥</div>`;

  return `
    <div class="card" data-id="${item.id}"
         style="${item.thumb ? `background-image:url('${item.thumb}');` : placeholderStyle(item.id)}">
      ${favBtn}
      ${badgeLabel ? `<span class="card-badge">${badgeLabel}</span>` : ''}
      <div class="card-overlay"><p>${item.title}</p></div>
      ${progressBar}
    </div>`;
}

function renderRow(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  
  let items = [];
  if (category === 'mylist') {
    items = media.filter(m => myFavorites.includes(m.id));
    const section = document.getElementById('mylist');
    if (section) section.style.display = items.length > 0 ? 'block' : 'none';
  } else {
    items = media.filter(m => m.category === category);
  }

  if (items.length === 0) {
    if (category === 'trips') {
      el.innerHTML = `
        <div class="card teaser-card">
          <div class="teaser-content">
            <div class="teaser-badge">COMING SOON</div>
            <div class="teaser-title">Season 1 Coming Soon</div>
            <div class="teaser-subtitle">Filming soon 🎬</div>
          </div>
        </div>`;
    } else {
      const section = el.closest('section.row');
      if (section) section.style.display = 'none';
    }
    return;
  }
  if (category === 'top10') {
    el.innerHTML = items.map((item, i) => `
      <div class="num-card" title="${item.title}">
        <span class="num-bg">${i + 1}</span>
        <div class="card top10-card" data-id="${item.id}"
             style="${item.thumb ? `background-image:url('${item.thumb}');` : placeholderStyle(item.id)}">
          ${i < 3 ? '<div class="new-episodes-badge">NEW EPISODES</div>' : ''}
        </div>
      </div>
    `).join('');
  } else {
    el.innerHTML = items.map(cardHTML).join('');
  }
}

Object.entries(rowMap).forEach(([category, containerId]) => {
  renderRow(containerId, category);
});

/* ---------- modal ---------- */

let previewTimeout;
document.querySelectorAll('.row-track').forEach(track => {
  track.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (!card || card.classList.contains('teaser-card')) return;
    openModal(parseInt(card.dataset.id));
  });

  track.addEventListener('mouseover', e => {
    const card = e.target.closest('.card');
    if (!card || card.classList.contains('teaser-card')) return;
    const id = parseInt(card.dataset.id);
    const item = media.find(m => m.id === id);
    if (!item || item.type !== 'video' || !item.src) return;

    previewTimeout = setTimeout(() => {
      if (!card.querySelector('.preview-video')) {
        const vid = document.createElement('video');
        vid.className = 'preview-video';
        vid.src = item.src;
        vid.muted = true;
        vid.loop = true;
        card.appendChild(vid);
        vid.play().then(() => vid.classList.add('active')).catch(() => {});
      }
    }, 600);
  });

  track.addEventListener('mouseout', e => {
    const card = e.target.closest('.card');
    if (!card) return;
    clearTimeout(previewTimeout);
    const vid = card.querySelector('.preview-video');
    if (vid) {
      vid.classList.remove('active');
      setTimeout(() => vid.remove(), 400);
    }
  });
});

document.getElementById('modalEpisodeList').addEventListener('click', e => {
  const row = e.target.closest('.episode-row');
  if (!row || row.classList.contains('disabled')) return;
  openModal(parseInt(row.dataset.id));
});

let introAudio = null;
let introTimeout1 = null;
let introTimeout2 = null;

function openModal(id) {
  const item = media.find(m => m.id === id);
  if (!item) return;

  let activeMedia = item;
  if (item.type === 'series') {
    const epsCat = (item.seriesKey || item.category) + '_episodes';
    activeMedia = media.find(m => m.category === epsCat && m.episode === 1) || item;
  } else if (item.type === 'album') {
    const albumCat = item.albumKey;
    activeMedia = media.find(m => m.category === albumCat && m.episode === 1) || item;
  }

  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalMeta').textContent = item.date;
  document.getElementById('modalCaption').textContent = item.caption;

  const slot = document.getElementById('modalMediaSlot');

  if (introAudio) { introAudio.pause(); introAudio = null; }
  clearTimeout(introTimeout1);
  clearTimeout(introTimeout2);

  if (activeMedia.type === 'letter') {
    slot.innerHTML = `
      <div class="envelope-container">
        <div class="envelope" id="loveEnvelope">
          <div class="flap"></div>
          <div class="letter-paper">
            <div class="letter-text">the moments that we just had will always be so special for me babe and soo much close to my heart ❤️</div>
          </div>
        </div>
      </div>
    `;
    const env = document.getElementById('loveEnvelope');
    env.addEventListener('click', () => {
      if (!env.classList.contains('open')) {
        env.classList.add('open');
        setTimeout(() => {
          triggerHearts();
        }, 2000);
      }
    });
  } else if (activeMedia.type === 'video') {
    slot.innerHTML = `
      <div class="video-container">
        <div id="introOverlay" class="intro-overlay">
          <div class="intro-logo">HAPPY ANNIVERSARY BABE</div>
        </div>
        <video class="modal-media" src="${activeMedia.src}" controls></video>
        <button id="nextEpBtn" class="next-ep-btn">Next Episode ▶</button>
      </div>
    `;

    const videoEl = slot.querySelector('video');
    const introOverlay = slot.querySelector('#introOverlay');

    const playOutroSmoothly = (onComplete) => {
      if (videoEl.src.includes('outro.mp4')) return;
      videoEl.style.transition = 'opacity 0.4s ease';
      videoEl.style.opacity = '0';
      setTimeout(() => {
        videoEl.src = 'https://github.com/jaibabbarfbd/ourflix/releases/download/v1.0-media/outro.mp4';
        videoEl.play().catch(e => console.log('Outro block:', e));
        videoEl.addEventListener('loadeddata', () => {
          videoEl.style.opacity = '1';
        }, { once: true });
        videoEl.onended = onComplete;
      }, 400);
    };

    introAudio = new Audio('/media/intro-tudum.mp3');
    introAudio.play().catch(e => console.log('Audio autoplay blocked:', e));

    introTimeout1 = setTimeout(() => {
      if (introOverlay) {
        introOverlay.style.opacity = '0';
        introTimeout2 = setTimeout(() => {
          introOverlay.style.display = 'none';
          if (document.getElementById('modalBackdrop').classList.contains('open')) {
            videoEl.play().catch(e => console.log('Video autoplay blocked:', e));
          }
        }, 500);
      }
    }, 3500);

    const nextEp = media.find(m => m.category === activeMedia.category && m.episode === activeMedia.episode + 1 && !m.comingSoon);

    const savedTime = localStorage.getItem('ourflix-progress-' + activeMedia.id);
    if (savedTime) {
      videoEl.currentTime = parseFloat(savedTime);
    }

    if (activeMedia.category && activeMedia.category.endsWith('_episodes')) {
      if (nextEp) {
        const nextBtn = slot.querySelector('#nextEpBtn');

        videoEl.addEventListener('timeupdate', () => {
          localStorage.setItem('ourflix-progress-' + activeMedia.id, videoEl.currentTime);
          if (videoEl.duration) {
            localStorage.setItem('ourflix-pct-' + activeMedia.id, (videoEl.currentTime / videoEl.duration) * 100);
          }
          if (videoEl.src.includes('outro.mp4') || (videoEl.duration && videoEl.duration - videoEl.currentTime <= 10)) {
            nextBtn.classList.add('visible');
          } else {
            nextBtn.classList.remove('visible');
          }
        });

        videoEl.addEventListener('ended', () => {
          playOutroSmoothly(() => {
            triggerHearts();
            openModal(nextEp.id);
          });
        });

        nextBtn.addEventListener('click', () => {
          openModal(nextEp.id);
        });
      } else {
        videoEl.addEventListener('timeupdate', () => {
          localStorage.setItem('ourflix-progress-' + activeMedia.id, videoEl.currentTime);
          if (videoEl.duration) localStorage.setItem('ourflix-pct-' + activeMedia.id, (videoEl.currentTime / videoEl.duration) * 100);
        });
        videoEl.addEventListener('ended', () => {
          playOutroSmoothly(triggerHearts);
        });
      }
    } else {
      videoEl.addEventListener('timeupdate', () => {
        localStorage.setItem('ourflix-progress-' + activeMedia.id, videoEl.currentTime);
        if (videoEl.duration) localStorage.setItem('ourflix-pct-' + activeMedia.id, (videoEl.currentTime / videoEl.duration) * 100);
      });
      videoEl.addEventListener('ended', () => {
        playOutroSmoothly(triggerHearts);
      });
    }
  } else {
    slot.innerHTML = `<img class="modal-media" src="${activeMedia.src || activeMedia.thumb}" alt="${item.title}">`;
  }

  if (activeMedia.category && activeMedia.category.endsWith('_gallery')) {
    const allPhotos = media.filter(m => m.category === activeMedia.category).sort((a,b) => (a.episode||0) - (b.episode||0));
    const currentIndex = allPhotos.findIndex(m => m.id === activeMedia.id);
    if (currentIndex > 0) {
       const prevBtn = document.createElement('button');
       prevBtn.className = 'gallery-nav prev-btn';
       prevBtn.innerHTML = '◀';
       prevBtn.onclick = () => openModal(allPhotos[currentIndex - 1].id);
       slot.appendChild(prevBtn);
    }
    if (currentIndex < allPhotos.length - 1) {
       const nextBtn = document.createElement('button');
       nextBtn.className = 'gallery-nav next-btn';
       nextBtn.innerHTML = '▶';
       nextBtn.onclick = () => openModal(allPhotos[currentIndex + 1].id);
       slot.appendChild(nextBtn);
    }
  }

  const modalEpisodeList = document.getElementById('modalEpisodeList');
  if (item.type === 'series' || (item.category && item.category.endsWith('_episodes'))) {
    const seriesCategory = item.type === 'series' ? (item.seriesKey || item.category) + '_episodes' : item.category;
    const seriesItems = media
      .filter(m => m.category === seriesCategory)
      .sort((a, b) => (a.episode || 0) - (b.episode || 0));

    modalEpisodeList.innerHTML = `
      <div class="episode-panel">
        <div class="episode-panel-header">
          <h3 class="episode-panel-title">Episodes</h3>
          <select class="season-select">
            <option>Season 1</option>
          </select>
        </div>
        <div class="episode-list">
          ${seriesItems.map(episodeRowHTML).join('')}
        </div>
      </div>
    `;
  } else {
    modalEpisodeList.innerHTML = '';
  }

  document.getElementById('modalBackdrop').classList.add('open');
}

function closeModal() {
  if (introAudio) { introAudio.pause(); introAudio = null; }
  clearTimeout(introTimeout1);
  clearTimeout(introTimeout2);
  document.getElementById('modalBackdrop').classList.remove('open');
  document.getElementById('modalMediaSlot').innerHTML = '';
  // Re-render rows to update progress bars
  Object.entries(rowMap).forEach(([category, containerId]) => {
    renderRow(containerId, category);
  });
}

document.getElementById('modalBackdrop').addEventListener('click', e => {
  if (e.target.id === 'modalBackdrop') closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ---------- nav + hero scroll ---------- */

document.getElementById('searchIcon').addEventListener('click', () => {
  document.getElementById('searchSlate').classList.remove('hidden');
});
document.getElementById('searchSlate').addEventListener('click', () => {
  document.getElementById('searchSlate').classList.add('hidden');
});

window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);

  const heroVideo = document.querySelector('.hero-video-bg');
  if (heroVideo) {
    heroVideo.style.transform = `translateY(${window.scrollY * 0.4}px)`;
  }
});

function scrollToRows() {
  document.querySelector('.rows').scrollIntoView({ behavior: 'smooth' });
}

/* ---------- New Features Initialization & Logic ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const savedProfile = sessionStorage.getItem('ourflix-profile');
  if (savedProfile) {
    document.getElementById('profileGate').classList.add('hidden');
    document.querySelector('.avatar').textContent = savedProfile;
  }
  


  // Row reveal animations
  const rows = document.querySelectorAll('.row');
  rows.forEach(row => row.classList.add('reveal-row'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  rows.forEach(row => observer.observe(row));
});

function selectProfile(name) {
  sessionStorage.setItem('ourflix-profile', name);
  document.querySelector('.avatar').textContent = name;
  document.getElementById('profileGate').classList.add('hidden');
}

function playRandom() {
  const playable = media.filter(m => m.type !== 'series' && !m.comingSoon);
  if (playable.length > 0) {
    let count = 0;
    const heroTitle = document.querySelector('.hero-title');
    const originalTitle = heroTitle.textContent;
    
    const interval = setInterval(() => {
      const randomItem = playable[Math.floor(Math.random() * playable.length)];
      heroTitle.textContent = randomItem.title;
      count++;
      if (count >= 20) {
        clearInterval(interval);
        heroTitle.textContent = originalTitle;
        openModal(randomItem.id);
      }
    }, 75);
  }
}



function triggerHearts() {
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.classList.add('aesthetic-particle');
    
    const type = Math.random();
    if (type < 0.5) {
      // Bokeh circle
      p.classList.add('bokeh-circle');
      const size = Math.random() * 120 + 80;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
    } else {
      // Soft heart
      p.classList.add('soft-heart');
      p.textContent = '❤';
      p.style.fontSize = (Math.random() * 40 + 20) + 'px';
      p.style.color = Math.random() > 0.5 ? 'rgba(255, 182, 193, 0.9)' : 'rgba(255, 105, 180, 0.7)';
      p.style.filter = `blur(${Math.random() * 2}px)`;
    }

    p.style.left = (Math.random() * 120 - 10) + 'vw';
    p.style.animationDuration = (Math.random() * 4 + 4) + 's';
    p.style.animationDelay = (Math.random() * 1.5) + 's';
    document.body.appendChild(p);
    
    setTimeout(() => p.remove(), 8000);
  }
}

// Secret Code
let secretCode = ['l', 'o', 'v', 'e'];
let keyBuffer = [];
document.addEventListener('keydown', (e) => {
  if (document.getElementById('pinOverlay') && document.getElementById('pinOverlay').classList.contains('active')) return;
  
  keyBuffer.push(e.key.toLowerCase());
  if (keyBuffer.length > secretCode.length) keyBuffer.shift();
  if (keyBuffer.join('') === secretCode.join('')) {
    openPinModal();
    keyBuffer = []; // reset
  }
});

const correctPin = "2403"; // Set your desired PIN here

function openPinModal() {
  document.getElementById('pinOverlay').classList.add('active');
  const inputs = document.querySelectorAll('.pin-digit');
  inputs.forEach(input => input.value = '');
  if (inputs.length > 0) inputs[0].focus();
  const errorEl = document.getElementById('pinError');
  if (errorEl) errorEl.textContent = '';
}

function closePinModal() {
  document.getElementById('pinOverlay').classList.remove('active');
}

function verifyPin() {
  const inputs = document.querySelectorAll('.pin-digit');
  let enteredPin = '';
  inputs.forEach(input => enteredPin += input.value);
  
  if (enteredPin === correctPin) {
    closePinModal();
    
    // Show success message
    const alertEl = document.getElementById('customAlert');
    if (alertEl) {
      alertEl.innerHTML = '<p>Hello babe 😘</p>';
      alertEl.classList.remove('hidden');
      alertEl.classList.add('show');
      setTimeout(() => {
        alertEl.classList.remove('show');
        setTimeout(() => alertEl.classList.add('hidden'), 300);
      }, 3000);
    }

    document.getElementById('secret').style.display = 'block';
    setTimeout(() => {
      document.getElementById('secret').classList.add('visible');
    }, 100);
    triggerHearts();
  } else {
    const errorEl = document.getElementById('pinError');
    if (errorEl) errorEl.textContent = 'you are not my babe 😡';
    inputs.forEach(input => input.value = '');
    if (inputs.length > 0) inputs[0].focus();
    
    // Add shake animation to modal
    const modal = document.querySelector('.pin-modal');
    modal.classList.add('shake');
    setTimeout(() => modal.classList.remove('shake'), 400);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const pinInputs = document.querySelectorAll('.pin-digit');
  pinInputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && input.value === '') {
        if (index > 0) {
          pinInputs[index - 1].focus();
        }
      } else if (e.key === 'Enter') {
        verifyPin();
      }
    });
    input.addEventListener('input', (e) => {
      if (input.value.length === 1) {
        if (index < pinInputs.length - 1) {
          pinInputs[index + 1].focus();
        } else {
          setTimeout(verifyPin, 100);
        }
      }
    });
  });
});



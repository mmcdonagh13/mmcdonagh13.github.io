export const SITE = {
  website: "https://mmcdonagh13.github.io/", // replace this with your deployed domain
  author: "Michael McDonagh",
  profile: "https://mmcdonagh13.github.io/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Naming is Hard",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/mmcdonagh13/mmcdonagh13.github.io/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

module.exports = {
    base: "/",
    title: "Careers",
    description: "Hire Talents from your OctoberCMS Website",
    head: [
      ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
    ],
    themeConfig: {
      logo: '/assets/img/userconnect.svg',
      sidebar: [
        {
          title: "Getting Started",
          children: [
              "/getting-started/installation",
              "/getting-started/configuration",
          ]
        },
        {
          title: "Components",
          children: [
              "/components/joblist",
              "/components/jobdetails",
          ]
        },
        ['features', 'Upcoming Features !'],
        ['screenshots', 'Screenshots']
      ],
      nav: [
        { text: "Guide", link: "/" },
        {
          text: "Marketplace",
          link: "https://octobercms.com/plugin/fytinnovations-careers"
        }
      ],
      docsRepo: "fytinnovations/oc-careers",
      editLinks: true,
      editLinkText: "Help us improve this page!"
    }
  };

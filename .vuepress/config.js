module.exports = {
    base: "/",
    title: "User Connect",
    description: "OctoberCMS Plugin to Manage Subcriptions",
    head: [
      ['link', { rel: 'icon', href: '/assets/img/userconnect.svg' }]
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
        }
      ],
      nav: [
        { text: "Guide", link: "/" },
        {
          text: "Marketplace",
          link: "https://octobercms.com/plugin/fytinnovations-userconnect"
        }
      ],
      docsRepo: "fytinnovations/oc-user-connect",
      editLinks: true,
      editLinkText: "Help us improve this page!"
    }
  };

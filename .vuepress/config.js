module.exports = {
    base: "/",
    title: "User Connect - Plugin for OctoberCMS",
    description: "Open Source Plugin to Manage Subcriptions on your website",
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
              "/components/subscriptionForm.md" 
          ]
        }
      ],
      nav: [
        { text: "Guide", link: "/" },
        {
          text: "Marketplace",
          link: "https://octobercms.com/plugin/fytinnovations-userconnect"
        },
        {
          text: "FYT innovations",
          link: "https://www.fytinnovations.com/"
        }
      ],
      docsRepo: "fytinnovations/oc-user-connect",
      editLinks: true,
      editLinkText: "Help us improve this page!"
    }
  };

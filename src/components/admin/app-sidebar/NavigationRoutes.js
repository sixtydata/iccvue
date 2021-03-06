export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [

    {
      name: 'home',
      displayName: 'menu.home',
      meta: {
        iconClass: 'glyphicon glyphicon-home',
      },
    },
    {
      name: 'travel',
      displayName: 'menu.travel',
      meta: {
        iconClass: 'glyphicon glyphicon-briefcase',
      },
      disabled: true,
      children: [
        {
          name: 'travel-global',
          displayName: 'menu.travel-global',
        },
        {
          name: 'travel-region',
          displayName: 'menu.travel-region',
        },
        {
          name: 'travel-advice',
          displayName: 'menu.travel-advice',
        },

      ],
    },
    {
      name: 'advisory',
      displayName: 'menu.advisory',
      meta: {
        iconClass: 'glyphicon glyphicon-bullhorn',
      },
      disabled: true,
      children: [
        {
          name: 'adv-demo',
          displayName: 'menu.adv-demo',
        },
        {
          name: 'adv-security',
          displayName: 'menu.adv-security',
        },
        {
          name: 'adv-weather',
          displayName: 'menu.adv-weather',
        },
        {
          name: 'adv-disaster',
          displayName: 'menu.adv-disaster',
        },
        {
          name: 'adv-traffic',
          displayName: 'menu.adv-traffic',
        },
        {
          name: 'adv-travel',
          displayName: 'menu.adv-travel',
        },
        {
          name: 'adv-special',
          displayName: 'menu.adv-special',
        },
      ],
    },
    {
      name: 'guideline',
      displayName: 'menu.guideline',
      meta: {
        iconClass: 'glyphicon glyphicon-book',
      },
      disabled: true,
      children: [
        {
          name: 'guide-bcoc',
          displayName: 'menu.guide-bcoc',
        },
        {
          name: 'guide-policy',
          displayName: 'menu.guide-policy',
        },
      ],
    },
    {
      name: 'emergency',
      displayName: 'menu.emergency',
      meta: {
        iconClass: 'glyphicon glyphicon-plus-sign',
      },
      children: [
        {
          name: 'emergency-airport',
          displayName: 'menu.emergency-airport',
        },
        {
          name: 'emergency-fire-dept',
          displayName: 'menu.emergency-fire-dept',
        },
        {
          name: 'emergency-hospital',
          displayName: 'menu.emergency-hospital',
        },
        {
          name: 'emergency-police',
          displayName: 'menu.emergency-police',
        },
      ],
    },
    {
      name: 'tool',
      displayName: 'menu.tool',
      meta: {
        iconClass: 'glyphicon glyphicon-th-large',
      },
      disabled: true,
      children: [
        {
          name: 'tool-rm3',
          displayName: 'menu.tool-rm3',
        },
        {
          name: 'tool-gemba',
          displayName: 'menu.tool-gemba',
        },

      ],
    },
    {
      name: 'map',
      displayName: 'menu.map',
      meta: {
        iconClass: 'glyphicon glyphicon-map-marker',
      },
      disabled: true,
      children: [
        {
          name: 'map-risk',
          displayName: 'Risk Map',
        },
      ],
    },
    {
      name: 'calendar',
      displayName: 'menu.calendar',
      meta: {
        iconClass: 'glyphicon glyphicon-calendar',
      },
    },
    {
      name: 'contact',
      displayName: 'menu.contact',
      meta: {
        iconClass: 'glyphicon glyphicon-headphones',
      },
    },
  ],
}

type ChildObject = {
  id: number;
  className: string[];
  hasInfo: boolean;
  title?: string;
};

type ParentObject = {
  id: number;
  className: string[];
  title?: string;
  hasInfo?: boolean;
  isMain?: boolean;
  children?: ChildObject[];
};

export const data: ParentObject[][] = [
  [
    {
      id: 1,
      className: ['left-line'],
      hasInfo: false,
    },
    {
      id: 2,
      className: [''],
      hasInfo: false,
    },
    {
      id: 3,
      className: [''],
      hasInfo: false,
    },
    {
      id: 5,
      className: ['bottom-line'],
      hasInfo: true,
      title: '',
      isMain: true,
    },
    {
      id: 4,
      className: [''],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['left'],
      hasInfo: true,
      title: '',
    },
    {
      id: 6,
      className: ['visually-hidden'],
      hasInfo: false,
      // isVisible: false,
    },
  ],
  [
    {
      id: 1,
      className: ['top-line top-right-line'],
      hasInfo: true,
      title: '',
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 222,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 3,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 221,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 5,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 221,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 52,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 4,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 6,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 6,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['top-line'],
      hasInfo: true,
    },
  ],
  [
    {
      id: 1,
      className: ['top-line top-right-line left-line main'],
      hasInfo: true,
      title: '',
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      isMain: false,
      children: [
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
        },
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
        },
      ],
    },
    {
      id: 6,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 6,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['top-line'],
      hasInfo: true,
    },
  ],
  [
    {
      id: 1,
      className: ['top-line top-right-line left-line main'],
      hasInfo: true,
      title: '',
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      isMain: false,
      children: [
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
        },
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
        },
      ],
    },
    {
      id: 6,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      isMain: false,
      children: [
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
        },
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
        },
      ],
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['top-line'],
      hasInfo: true,
    },
  ],
  [
    {
      id: 1,
      className: ['top-line top-right-line left-line main'],
      hasInfo: true,
      title: '',
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      isMain: false,
      children: [
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
        },
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
        },
      ],
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['top-line'],
      hasInfo: true,
    },
  ],
  [
    {
      id: 1,
      className: ['left-line main'],
      hasInfo: true,
      title: '',
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 2,
      className: ['left-line'],
      hasInfo: true,
      isMain: false,
      children: [
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-left-line'],
          hasInfo: true,
          title: '',
        },
        {
          id: 22,
          className: ['visually-hidden'],
          hasInfo: false,
        },
        {
          id: 1,
          className: ['top-line top-left-line'],
          hasInfo: true,
          title: '',
        },
      ],
    },
  ],
  [
    {
      id: 1,
      className: ['top-line top-right-line left-line main'],
      hasInfo: true,
      title: '',
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      isMain: false,
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      isMain: false,
    },
    {
      id: 22,
      className: ['visually-hidden'],
      hasInfo: false,
    },
    {
      id: 7,
      className: ['top-line'],
      hasInfo: true,
    },
  ],
];

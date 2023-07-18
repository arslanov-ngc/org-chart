type ChildObject = {
  id: number;
  className?: string[];
  hasInfo: boolean;
  title?: string;
};

type ParentObject = {
  id: number;
  className?: string[];
  title?: string;
  hasInfo?: boolean;
  isMain?: boolean;
  isSecondary?: boolean;
  isNextChild?: boolean;
  children?: ChildObject[];
};

export const data: ParentObject[][] = [
  [
    {
      id: 5,
      hasInfo: true,
      title: '',
      isMain: true,
    },
    {
      id: 7,
      isNextChild: true,
      hasInfo: true,
      title: '',
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
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 3,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 5,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 52,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 7,
      className: ['top-line top-right-line'],
      hasInfo: true,
    },
    {
      id: 7,
      className: ['top-line top-right-line'],
      hasInfo: true,
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
      isSecondary: true,
      hasInfo: true,
      title: '',
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      children: [
        {
          id: 1,
          hasInfo: true,
          title: '',
        },
        {
          id: 1,
          hasInfo: true,
          title: '',
        },
      ],
    },
    {
      id: 7,
      className: ['top-line top-right-line'],
      hasInfo: true,
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
      className: [''],
      isSecondary: true,
      hasInfo: true,
      title: '',
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      children: [
        {
          id: 1,
          hasInfo: true,
          title: '',
        },
        {
          id: 1,
          hasInfo: true,
          title: '',
        },
      ],
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      children: [
        {
          id: 1,
          hasInfo: true,
          title: '',
        },
        {
          id: 1,
          hasInfo: true,
          title: '',
        },
      ],
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
      className: [''],
      isSecondary: true,
      hasInfo: true,
      title: '',
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      children: [
        {
          id: 1,
          className: ['top-line top-right-line top-left-line'],
          hasInfo: true,
          title: '',
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
      id: 7,
      className: ['top-line'],
      hasInfo: true,
    },
  ],
  [
    {
      id: 1,
      isSecondary: true,
      hasInfo: true,
      title: '',
    },
    {
      id: 2,
      isNextChild: true,
      hasInfo: true,
      children: [
        {
          id: 1,
          hasInfo: true,
          title: '',
        },
        {
          id: 1,
          hasInfo: true,
          title: '',
        },
      ],
    },
  ],
  [
    {
      id: 1,
      className: [''],
      isSecondary: true,
      hasInfo: true,
      title: '',
    },
    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      isMain: false,
    },

    {
      id: 2,
      className: ['top-line top-right-line'],
      hasInfo: true,
      isMain: false,
    },
    {
      id: 7,
      className: ['top-line'],
      hasInfo: true,
    },
  ],
];

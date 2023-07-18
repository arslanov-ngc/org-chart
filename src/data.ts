type ChildObject = {
  id: number;
  title?: string;
};

type ParentObject = {
  id: number;
  title?: string;
  children?: ChildObject[];
};

export const data: ParentObject[][] = [
  [
    {
      id: 1,
      title: '',
    },
    {
      id: 2,
      title: '',
    },
  ],
  [
    {
      id: 3,
      title: '',
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ],
  [
    {
      id: 11,
      title: '',
    },
    {
      id: 12,
      children: [
        {
          id: 13,
          title: '',
        },
        {
          id: 14,
          title: '',
        },
      ],
    },
    {
      id: 15,
    },

    {
      id: 16,
    },
  ],
  [
    {
      id: 17,
      title: '',
    },
    {
      id: 18,
      children: [
        {
          id: 19,
          title: '',
        },
        {
          id: 20,
          title: '',
        },
      ],
    },
    {
      id: 21,
      children: [
        {
          id: 22,
          title: '',
        },
        {
          id: 23,
          title: '',
        },
      ],
    },
    {
      id: 24,
    },
  ],
  [
    {
      id: 26,
      title: '',
    },
    {
      id: 27,
      children: [
        {
          id: 28,
          title: '',
        },
        {
          id: 29,
          title: '',
        },
      ],
    },
    {
      id: 32,
    },
  ],
  [
    {
      id: 1,
      title: '',
    },
    {
      id: 2,
      children: [
        {
          id: 1,
          title: '',
        },
        {
          id: 1,
          title: '',
        },
      ],
    },
  ],
  [
    {
      id: 334,
      title: '',
    },
    {
      id: 554433,
    },
    {
      id: 5542433,
    },
  ],
  [
    {
      id: 33,
      title: '',
    },
    {
      id: 34,
    },

    {
      id: 53,
    },
    {
      id: 654,
    },
  ],
];

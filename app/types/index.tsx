export type optionType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type forecastType = {
  name: string;
  country: string;
  list: forecastList[];
  sunrise: number;
  sunset: number;
};

export type forecastList = {
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      main: string;
      icon: string;
      description: string;
    }
  ];
  wind: {
    speed: number;
    gust: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  pop: number;
  visibility: number;
};

export type forecastColor = {
  id: string;
  d: string;
  n: string;
};

export const forecastColors: forecastColor[] = [
  {
    id: "01",
    d: "from-amber-500 to-amber-300",
    n: "from-blue-900 to-indigo-900",
  },
  {
    id: "02",
    d: "from-sky-700 to-cyan-500 ",
    n: "from-blue-900 to-indigo-900",
  },
  {
    id: "03",
    d: "from-sky-900 to-neutral-500",
    n: "from-indigo-900 to-gray-800",
  },
  {
    id: "04",
    d: "from-sky-900 to-neutral-500",
    n: "from-indigo-900 to-gray-800",
  },
  {
    id: "09",
    d: "from-blue-600 to-sky-700",
    n: "from-blue-900 to-sky-800",
  },
  {
    id: "10",
    d: "from-blue-600 to-sky-700",
    n: "from-blue-900 to-sky-800",
  },
  {
    id: "11",
    d: "from-violet-900 to-stone-500",
    n: "from-violet-900 to-stone-800",
  },
  {
    id: "13",
    d: "from-neutral-400 to-neutral-300",
    n: "from-neutral-600 to-neutral-400",
  },
  {
    id: "50",
    d: "from-sky-900 to-neutral-500",
    n: "from-indigo-900 to-gray-800",
  },
];

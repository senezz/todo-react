export const BASE_URL = import.meta.env.BASE_URL;

export const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  DONE: "done",
};

export const FILTER_OPTIONS = [
  { value: FILTERS.ALL, label: "All" },
  { value: FILTERS.ACTIVE, label: "Active" },
  { value: FILTERS.DONE, label: "Done" },
];

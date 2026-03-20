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

export const PRIORITIES = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

export const PRIORITY_OPTIONS = [
  { value: PRIORITIES.HIGH, label: "High" },
  { value: PRIORITIES.MEDIUM, label: "Medium" },
  { value: PRIORITIES.LOW, label: "Low" },
];

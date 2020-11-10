const reportTypes = {
  EXPENSES_FORECAST: 'EXPENSES_FORECAST',
  EXPENSES_BY_MONTHS_BY_DAY: 'EXPENSES_BY_MONTHS_BY_DAY',
  MOVEMENTS: 'MOVEMENTS',
  EXPENSES_BY_MONTHS_BY_CATEGORY: 'EXPENSES_BY_MONTHS_BY_CATEGORY',
};

const reportOptions = [
  { id: 1, name: 'Expenditure projection', key: reportTypes.EXPENSES_FORECAST },
  {
    id: 2,
    name: 'Daily expenses per month',
    key: reportTypes.EXPENSES_BY_MONTHS_BY_DAY,
  },
  { id: 3, name: 'Movements', key: reportTypes.MOVEMENTS },
  {
    id: 4,
    name: 'Expenses by categories per month',
    key: reportTypes.EXPENSES_BY_MONTHS_BY_CATEGORY,
  },
];

export default { reportOptions, reportTypes };

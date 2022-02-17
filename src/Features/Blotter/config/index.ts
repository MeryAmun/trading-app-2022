import {ColDef  } from "ag-grid-community";

export const tradeBlotterColDef = [
    {field: 'ticketId', sortable: true},
    {field: 'startDate', sortable: true, filter: "agDateColumnFilter"},
    {field: 'endDate', sortable: true, filter: "agDateColumnFilter"},
    {field: 'fullName', headerName: 'Cpty Name'},
    {field: 'quantity', filter: "agDateColumnFilter"},
    {field: 'fixed' },
    {field: 'isIn' },
    {field: 'haircut', filter: "agDateColumnFilter"},
    {field: 'dirtyPrice', filter: "agDateColumnFilter"},
    {field: 'cleanPrice', filter: "agDateColumnFilter"},
    {field: 'startCash', filter: "agDateColumnFilter"},
    {field: 'endCash', filter: "agDateColumnFilter"},
    {field: 'repoRate', filter: "agDateColumnFilter"},
    {field: 'repoRateType'},
    {field: 'repoYearBasis'},
    {field: 'settlementCcy'},
    {field: 'trader'},
    {field: 'yieldValue'},
]
<template>

    <div class="px-6 surface-overlay relative">

        <div class="grid">
            <div class="col-12 md:col-12">
                <div class="card p-fluid">
                    <h1>Stock Portfolio</h1>

                    <div class="grid">
                        <div class="col-12 md:col-12">
                            <div class="card p-fluid">
                                <h2>Manage Stocks</h2>

                                <DataTable :value="stocks" :paginator="true" class="p-datatable-gridlines"
                                           :rows="100" dataKey="id"
                                           :rowsPerPageOptions="[10,20,50,100]"
                                           :rowHover="true"
                                           striped-rows
                                           v-model:filters="filters1" filterDisplay="menu" :loading="loading1"
                                           :filters="filters1"
                                           responsiveLayout="scroll"
                                           :globalFilterFields="['exchange', 'name', 'symbol']">

                                    <template #header>
                                        <div class="p-d-flex p-jc-between p-flex-column p-flex-sm-row">
                                            <Button type="button" icon="pi pi-filter-slash" label="Clear"
                                                    class="p-button-outlined p-mb-2"
                                                    @click="clearFilter1()"/>
                                            <br><br>
                                            <span class="p-input-icon-left p-mb-2">
                                                <i class="pi pi-search"/>
                                                <InputText v-model="filters1['global'].value"
                                                           placeholder="Keyword Search on Exchange, Company Name or Symbol"
                                                           style="width: 100%"/>
                                            </span>
                                        </div>
                                    </template>

                                    <template #empty>
                                        No stocks found.
                                    </template>

                                    <template #loading>
                                        Loading stocks. Please wait.
                                    </template>

                                    <Column headerStyle="width:14%; min-width:4rem;">
                                        <template #body="{data}">
                                            <Button v-tooltip="'Add to My Stocks'" icon="pi pi-cart-plus"
                                                    class="p-button-rounded p-button-help m-1"
                                                    @click="callAddToStocks(data)"/>
                                            <Button v-tooltip="'Add to My Watchlist'" icon="pi pi-tag"
                                                    class="p-button-rounded p-button-info m-1"
                                                    @click="callAddToWatchlist(data)"/>
                                            <Button v-tooltip="'Add to My Alerts'" icon="pi pi-bell"
                                                    class="p-button-rounded p-button-warning m-1"
                                                    @click="callAddToAlerts(data)"/>
                                        </template>
                                    </Column>

                                    <Column field="exchange" header="Exchange" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Exchange</span>
                                            {{ data.exchange }}
                                        </template>
                                    </Column>

                                    <Column field="name" header="Company Name" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Company Name</span>
                                            {{ data.name }}
                                        </template>
                                    </Column>

                                    <Column field="symbol" header="Symbol" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Symbol</span>
                                            {{ data.symbol }}
                                        </template>
                                    </Column>

                                    <Column field="averageEpsGrowth" header="Average Eps Growth" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Average Eps Growth</span>
                                            {{ data.averageEpsGrowth }}
                                        </template>
                                    </Column>

                                    <Column field="numberEpsIncreases" header="Number of Eps Increases" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Number of Eps Increases</span>
                                            {{ data.numberEpsIncreases }}
                                        </template>
                                    </Column>

                                    <Column field="averageDividendGrowth" header="Average Dividend Growth" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Average Dividend Growth</span>
                                            {{ data.averageDividendGrowth }}
                                        </template>
                                    </Column>

                                    <Column field="payoutRatio" header="Payout Ratio" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Payout Ratio</span>
                                            {{ data.payoutRatio }}
                                        </template>
                                    </Column>

                                    <Column field="longTermRatio" header="Long Term Ratio" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Long Term Ratio</span>
                                            {{ data.longTermRatio }}
                                        </template>
                                    </Column>

                                    <Column field="annualForwardDividendVsPreviousYear" header="Annual Forward Dividend Vs Previous Year" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Annual Forward Dividend Vs Previous Year</span>
                                            {{ data.annualForwardDividendVsPreviousYear }}
                                        </template>
                                    </Column>

                                    <Column field="shareBuyBack" header="Share Buy Back" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Share Buy Back</span>
                                            {{ data.shareBuyBack }}
                                        </template>
                                    </Column>

                                    <Column field="peRatio" header="PE Ratio" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">PE Ratio</span>
                                            {{ data.peRatio }}
                                        </template>
                                    </Column>

                                    <Column field="undervaluedOrOvervalued" header="Undervalued Or Overvalued" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Undervalued Or Overvalued</span>
                                            {{ data.undervaluedOrOvervalued }}
                                        </template>
                                    </Column>

                                    <Column field="pbRatio" header="PB Ratio" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">PB Ratio</span>
                                            {{ data.pbRatio }}
                                        </template>
                                    </Column>

                                    <Column field="currentDividendYield" header="Current Dividend Yield" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Current Dividend Yield</span>
                                            {{ data.currentDividendYield }}
                                        </template>
                                    </Column>

                                    <Column field="sharePrice" header="Share Price" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Share Price</span>
                                            {{ data.sharePrice }}
                                        </template>
                                    </Column>

                                    <Column field="annualForwardDividend" header="Annual Forward Dividend" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Annual Forward Dividend</span>
                                            {{ data.annualForwardDividend }}
                                        </template>
                                    </Column>

                                    <Column field="yearsOfDividendIncreases" header="Years Of Dividend Increases" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Years Of Dividend Increases</span>
                                            {{ data.yearsOfDividendIncreases }}
                                        </template>
                                    </Column>

                                    <Column field="dividendsPaidSince" header="Dividends Paid Since" :sortable="true">
                                        <template #body="{data}">
                                            <span class="p-column-title">Dividends Paid Since</span>
                                            {{ data.dividendsPaidSince }}
                                        </template>
                                    </Column>


                                </DataTable>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <IsoEvolveFooter/>

    </div>

</template>


<script>

import IsoEvolveFooter from '@/components/IsoEvolveFooter';
import {FilterMatchMode, FilterOperator} from "primevue/api";

export default {
    name: "Table",
    created() {
        this.initFilters1();
    },
    components: {
        IsoEvolveFooter
    },
    mounted() {
        this.loading1 = false;
    },
    data() {
        return {
            filters1: null,
            loading1: true,
            billableAppointments: null,
            stocks: [
                {
                    id: '001',
                    exchange: 'TSX',
                    name: 'Webster Financial Corporation',
                    symbol: 'WBS',
                    averageEpsGrowth: 20.38,
                    numberEpsIncreases: 13,
                    averageDividendGrowth: 557343323.87,
                    payoutRatio: 32.59,
                    longTermRatio: 39.86,
                    annualForwardDividendVsPreviousYear: 'new dividend',
                    shareBuyBack: 'Yes',
                    peRatio: 9.25,
                    undervaluedOrOvervalued: 'undervalued',
                    pbRatio: 0.93,
                    currentDividendYield: 3.52,
                    sharePrice: 45.40,
                    annualForwardDividend: 1.60,
                    yearsOfDividendIncreases: 0,
                    dividendsPaidSince: 1987
                },
                {
                    id: '002',
                    exchange: 'TSX',
                    name: 'SM Energy Company',
                    symbol: 'SM',
                    averageEpsGrowth: 55.29,
                    numberEpsIncreases: 11,
                    averageDividendGrowth: 91.18,
                    payoutRatio: 10.50,
                    longTermRatio: 46.25,
                    annualForwardDividendVsPreviousYear: 132.26,
                    shareBuyBack: 'Yes',
                    peRatio: 7.19,
                    undervaluedOrOvervalued: 'undervalued',
                    pbRatio: 1.58,
                    currentDividendYield: 1.46,
                    sharePrice: 49.11,
                    annualForwardDividend: 0.72,
                    yearsOfDividendIncreases: 2,
                    dividendsPaidSince: 1993
                },
                {
                    id: '003',
                    exchange: 'TSX',
                    name: 'Haverty Furniture Companies Inc.',
                    symbol: 'HVT',
                    averageEpsGrowth: 32.50,
                    numberEpsIncreases: 11,
                    averageDividendGrowth: 57.45,
                    payoutRatio: 35.71,
                    longTermRatio: 58.50,
                    annualForwardDividendVsPreviousYear: 'new dividend',
                    shareBuyBack: 'Yes',
                    peRatio: 9.01,
                    undervaluedOrOvervalued: 'undervalued',
                    pbRatio: 1.58,
                    currentDividendYield: 3.96,
                    sharePrice: 30.27,
                    annualForwardDividend: 1.20,
                    yearsOfDividendIncreases: 0,
                    dividendsPaidSince: 1990
                },
                {
                    id: '004',
                    exchange: 'TSX',
                    name: 'Host Hotels & Resorts Inc.',
                    symbol: 'HST',
                    averageEpsGrowth: 110.06,
                    numberEpsIncreases: 12,
                    averageDividendGrowth: 33.71,
                    payoutRatio: 69.23,
                    longTermRatio: 51.27,
                    annualForwardDividendVsPreviousYear: 10.77,
                    shareBuyBack: 'Yes',
                    peRatio: 18.02,
                    undervaluedOrOvervalued: 'undervalued',
                    pbRatio: 1.82,
                    currentDividendYield: 3.84,
                    sharePrice: 18.74,
                    annualForwardDividend: 0.72,
                    yearsOfDividendIncreases: 2,
                    dividendsPaidSince: 1999
                },
                {
                    id: '005',
                    exchange: 'TSX',
                    name: 'RPC Inc.',
                    symbol: 'RES',
                    averageEpsGrowth: 62.49,
                    numberEpsIncreases: 10,
                    averageDividendGrowth: 26.96,
                    payoutRatio: 17.78,
                    longTermRatio: 2.00,
                    annualForwardDividendVsPreviousYear: 300.00,
                    shareBuyBack: 'Yes',
                    peRatio: 8.50,
                    undervaluedOrOvervalued: 'undervalued',
                    pbRatio: 1.61,
                    currentDividendYield: 2.09,
                    sharePrice: 7.65,
                    annualForwardDividend: 0.16,
                    yearsOfDividendIncreases: 1,
                    dividendsPaidSince: 1999
                },
                {
                    id: '006',
                    exchange: 'TSX',
                    name: 'UFP Inc.',
                    symbol: 'UFPI',
                    averageEpsGrowth: 52.21,
                    numberEpsIncreases: 14,
                    averageDividendGrowth: 23.80,
                    payoutRatio: 16.36,
                    longTermRatio: 12.33,
                    annualForwardDividendVsPreviousYear: 38.95,
                    shareBuyBack: 'Yes',
                    peRatio: 13.83,
                    undervaluedOrOvervalued: 'undervalued',
                    pbRatio: 2.29,
                    currentDividendYield: 1.18,
                    sharePrice: 111.64,
                    annualForwardDividend: 1.32,
                    yearsOfDividendIncreases: 11,
                    dividendsPaidSince: 1999
                },
                {
                    id: '007',
                    exchange: 'TSX',
                    name: 'Columbia Sportswear Company',
                    symbol: 'COLM',
                    averageEpsGrowth: 15.63,
                    numberEpsIncreases: 9,
                    averageDividendGrowth: 19.99,
                    payoutRatio: 29.34,
                    longTermRatio: 17.37,
                    annualForwardDividendVsPreviousYear: 0,
                    shareBuyBack: 'Yes',
                    peRatio: 18.34,
                    undervaluedOrOvervalued: 'undervalued',
                    pbRatio: 2.31,
                    currentDividendYield: 1.60,
                    sharePrice: 75,
                    annualForwardDividend: 1.20,
                    yearsOfDividendIncreases: 0,
                    dividendsPaidSince: 2006
                }
            ]

        }
    },
    methods: {
        initFilters1() {
            this.filters1 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'exchange': {
                    operator: FilterOperator.AND,
                    constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]
                },
                'name': {
                    operator: FilterOperator.AND,
                    constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]
                },
                'symbol': {
                    operator: FilterOperator.AND,
                    constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]
                }
            }
        },
        clearFilter1() {
            this.initFilters1();
        },
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>

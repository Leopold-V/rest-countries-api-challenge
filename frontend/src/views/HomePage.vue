<template>
    <Filters :countries="countries" v-on:update-countries="setCountries" />
    <div v-if="!loading">
        <ListCountry :filteredCountries="filteredCountries" />
    </div>
    <div class="loading_spinner" v-else>
        <GridLoader :loading="true" :size="size"></GridLoader>
    </div>
</template>

<script>
import Filters from '../components/Filters.vue';
import ListCountry from '../components/ListCountry.vue';
import GridLoader from 'vue-spinner/src/GridLoader.vue';

export default {
    components: {
        ListCountry,
        Filters,
        GridLoader
    },
    data() {
        const countries = [];
        const filteredCountries = [];
        let loading = true;
        const size = '30px';
        return {
            countries,
            filteredCountries,
            loading,
            size
        }
    },
    methods: {
        async fetchCountry() {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const json = await response.json();
            console.log(json);
            this.countries = json;
        },
        setCountries(countries) {
            this.filteredCountries = countries;
        }
    },
    async created() {
        await this.fetchCountry();
        this.filteredCountries = this.countries;
        this.loading = false;
    }
}

</script>
<style>
    .loading_spinner {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 0;
        height: 300px;
        /*margin: 0 auto;*/
    }
</style>
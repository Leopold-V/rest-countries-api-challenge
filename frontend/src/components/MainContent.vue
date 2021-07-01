<template>
    <Filters :countries="countries" v-on:update-countries="setCountries" />
    <div v-if="!loading">
        <ListCountry :filteredCountries="filteredCountries" />
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script>
import Filters from './Filters.vue';
import ListCountry from './ListCountry.vue';

export default {
    components: {
        ListCountry,
        Filters
    },
    data() {
        const countries = [];
        const filteredCountries = [];
        let loading = true;
        return {
            countries,
            filteredCountries,
            loading,
        }
    },
    methods: {
        async fetchCountry() {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const json = await response.json();
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
    
</style>
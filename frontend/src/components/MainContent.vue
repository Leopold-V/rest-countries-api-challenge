<template>
    <Filters :countries="countries" v-on:update-countries="setCountries" />
    <div v-if="!loading">
        <ListCountry :countries="countries" :setCountries="setCountries" />
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
        let loading = true;
        return {
            countries,
            loading,
        }
    },
    methods: {
        async fetchCountry() {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const json = await response.json();
            this.countries = json;
            this.loading = false;
        },
        setCountries(array) {
            this.countries = array;
        }
    },
    created() {
        this.fetchCountry();
    }
}

</script>
<style>
    
</style>
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
import { getAllCountry } from '../api/country';

export default {
    components: {
        ListCountry,
        Filters,
        GridLoader
    },
    props: {
        theme: {
            type: String,
            required: true,
        },
    },
    data() {
        const countries = [];
        const filteredCountries = [];
        const size = '30px';
        let loading = true;
        return {
            countries,
            filteredCountries,
            loading,
            size
        }
    },
    methods: {
        setCountries(countries) {
            this.filteredCountries = countries;
        }
    },
    async created() {
        this.countries = await getAllCountry();
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
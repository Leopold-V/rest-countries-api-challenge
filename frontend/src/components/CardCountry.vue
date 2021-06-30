<template>
    <li class="country_item" v-for="country in countries">
        <img class="country_flag" v-bind:src="country.flag" alt="flag"/>
        <div class="country_body">
            <h2>{{ country.name }}</h2>
            <div><span style="font-weight: bold">Population :</span> {{country.population}} </div>
            <div><span style="font-weight: bold">Region :</span> {{country.region}} </div>
            <div><span style="font-weight: bold">Capital :</span> {{country.capital}} </div>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        countries: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style>
    
</style>
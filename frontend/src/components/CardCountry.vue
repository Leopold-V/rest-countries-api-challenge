<template>
    <li class="country_item" v-for="country in countries">
        <router-link :to="{name: 'Country' , params:{ name: country.name }}">
            <img class="country_flag" v-bind:src="country.flag" alt="flag"/>
            <div class="country_body">
                <h2>{{ country.name }}</h2>
                <div><span style="font-weight: bold">Population :</span> {{country.population}} </div>
                <div><span style="font-weight: bold">Region :</span> {{country.region}} </div>
                <div><span style="font-weight: bold">Capital :</span> {{country.capital}} </div>
            </div>
        </router-link>
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
.country_item {
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 .3rem rgba(0, 0, 0, .1);
    margin: 1rem 0;
    overflow: hidden;
    width: 300px;
    height: 400px;
}

.country_body {
    padding: 2rem;
}

.country_body > div {
    padding: .3rem 0;
}

.country_flag {
    width: 100%;
    height: 45%;
}
@media (min-width: 868px) {
    .country_item {
        margin: 1rem 1rem !important;
    }
}
</style>
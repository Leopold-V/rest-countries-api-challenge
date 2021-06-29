<template>
    <div id="container_list">
        <ul class="country_list" v-for="country in countries">
            <li class="country_item">
                <img class="country_flag" v-bind:src="country.flag" alt="flag"/>
                <div class="country_body">
                    <h2>{{ country.name }}</h2>
                    <div><span style="font-weight: bold">Population :</span> {{country.population}} </div>
                    <div><span style="font-weight: bold">Region :</span> {{country.region}} </div>
                    <div><span style="font-weight: bold">Capital :</span> {{country.capital}} </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        const countries = [];
        return {
            countries
        }
    },
    created() {
        this.fetchCountry();
    },
    methods: {
        async fetchCountry() {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const json = await response.json();
            this.countries = json;
            console.log(json);
        },
    },
}

</script>
<style>
#container_list {
    padding: 0 2rem;
}
.country_list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.country_item {
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 .3rem rgba(0, 0, 0, .1);
    margin: 1rem 0;
    overflow: hidden;
    width: 80%;
    max-width: 300px;
}

.country_body {
    padding: 2rem;
}

.country_body > div {
    padding: .3rem 0;
}

.country_flag {
    width: 100%;
}
    
</style>
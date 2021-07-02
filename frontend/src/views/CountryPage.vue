<template lang="">
    <button @click="goBack"><i class="fas fa-arrow-left"></i> Back</button>
    <div v-if="!loading">
        <div class="wrapper">
            <img class="country_flag" :src="country.flag" alt="flag"/>
            <div class="country_information">
                <h2 class="country_title">{{ country.name }}</h2>
                <div class="country_data">
                    <div><span style="font-weight: bold">Native Name:</span> {{country.nativeName}}</div>
                    <div><span style="font-weight: bold">Population:</span> {{country.population}}</div>
                    <div><span style="font-weight: bold">Region:</span> {{country.region}}</div>
                    <div><span style="font-weight: bold">Sub Region:</span> {{country.subregion}}</div>
                    <div><span style="font-weight: bold">Capital:</span> {{country.capital}}</div>
                    <div><span style="font-weight: bold">Top Level Domain:</span> {{country.topLevelDomain}}</div>
                    <div>
                        <span style="font-weight: bold">Currencies: </span>
                        <span v-for="curr in country.currencies">{{curr.name + ' '}}</span>
                    </div>
                    <div>
                        <span style="font-weight: bold">Languages: </span>
                        <span v-for="lang in country.languages">{{ lang.name+ ' '}}</span>
                    </div>
                </div>
                <div class="country_border">
                    <span class="country_border-title">Border Countries: </span>
                    <div>
                        <div v-for="border in country.borders">
                            <router-link :to="{name: 'Country' , params:{ name: getBorders(border) }}">
                                {{ getBorders(border) }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router';
import { getAllCountry, getOneByName } from '../api/country';

export default {
    data() {
        let country = {};
        const countries = [];
        let loading = true;
        return {
            country,
            countries,
            loading
        }
    },
    methods: {
        goBack() {
            router.replace('/')
        },
        getBorders(border) {
            return this.countries.filter((ele) => (ele.alpha3Code === border))[0].name;
        }
    },
    async created() {
        this.countries = await getAllCountry();
        this.country = await getOneByName(router.currentRoute._value.params.name);
        this.loading = false;
    }
}
</script>
<style scoped>
    * {
        font-size: 14px;
    }
    button {
        background: white;
        box-shadow: 0 0 .5rem rgba(0, 0, 0, .1);
        border-radius: 8px;
        padding: .6rem 1.9rem;
        border: none;
        cursor: pointer;
        margin-top: 2rem;
    }
    .wrapper {
        padding: 4rem 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        
    }
    .country_title {
        font-size: 1.8rem;
        font-weight: bold;
    }
    .country_information {
        width: 45%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .country_data {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 170px;
    }
    .country_data > div {
        padding: 1rem 0;
    }
    .country_data > div {
        padding: .4rem 0;
        display: inline-block;
    }
    .country_flag {
        width: 40%;
        /*height: 370px;*/
    }
    .country_border {
        padding: 3rem 0rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .country_border > div {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .country_border > div > div {
        background: white;
        box-shadow: 0 0 .5rem rgba(0, 0, 0, .1);
        border-radius: 4px;
        padding: .5rem 1.7rem;
        border: none;
        cursor: pointer;
        margin: .3rem;
    }
    .country_border-title {
        font-weight: bold;
        margin: .5rem;
    }
    @media (max-width: 868px) {
        .wrapper {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: flex-start;
        }
         .country_flag {
            width: 100%;
        }
        .country_information {
            width: 100%;
            height: auto;
        }
        .country_data {
            height: auto;
        }
        .country_border {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
        .country_border-title {
            margin: 1rem 0;
        }
    }
</style>
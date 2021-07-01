<template lang="">
    <button @click="goBack"><i class="fas fa-arrow-left"></i> Back</button>
    <div class="wrapper">
        <img class="country_flag" :src="country.flag" alt="flag"/>
    </div>
</template>
<script>
import router from '../router';
import { findOneByName } from '../api/country';

export default {
    data() {
        let country = {};
        return {
            country
        }
    },
    methods: {
        goBack() {
            router.back()
        }
    },
    async created() {
        this.country = await findOneByName(router.currentRoute._value.params.name);
    }
}
</script>
<style scoped>
    button {
        background: white;
        box-shadow: 0 0 .5rem rgba(0, 0, 0, .1);
        border-radius: 8px;
        padding: .6rem 1.9rem;
        border: none;
        cursor: pointer;
    }
    .wrapper {
        padding: 4rem 0;
    }
</style>
<template>
    <div id="container_list">
        <ul class="country_list">
            <CardCountry v-bind:countries="filteredCountries" />
        </ul>
    </div>
</template>

<script>
import CardCountry from './CardCountry.vue';

export default {
    components: {
        CardCountry
    },
    props: {
        filteredCountries: {
            type: Object,
            required: true,
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
@media (min-width: 868px) {
    .country_list {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
}

    
</style>
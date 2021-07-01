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
<style scoped>
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
        display: grid;
        grid-gap: 63px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    #container_list {
        padding: 0 4rem;
    }
}

    
</style>
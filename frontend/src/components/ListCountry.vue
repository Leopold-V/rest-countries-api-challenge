<template>
    <div id="container_list">
        <ul class="country_list">
            <CardCountry v-bind:countries="countries" />
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
        countries: {
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
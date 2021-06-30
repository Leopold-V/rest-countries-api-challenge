<template>
<div id="container_filters">
    <form @submit="handleSubmit">
        <div id="search_country">
            <input 
                v-model="input"
                type="text"
                placeholder="Search for a country..."
            />
            <button><i class="fas fa-search"></i></button>
        </div>
    </form>
    <div id="region_filter">
        <select>
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    </div>
</div>

</template>
<script>
export default {
    props: {
        countries: {
            type: Object,
            required: true,
        },
        setCountries: {
            type: Function,
            required: true,
        }
    },
    data() {
        let input = '';
        return {
            input
        }
    },
    methods: {
        handleSubmit: async function(e) {
            e.preventDefault();
            if (this.input) {
                const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.input}`)
                const json = await response.json();
                this.$emit('update-countries', json);
            }
        }
    }
}

</script>
<style>
#container_filters {
    padding: 2rem 1.5rem;
}
#region_filter {
    margin-top: 3rem;
}
input {
    border: none;
    width: 100%;
    padding: 1.4rem 0;
    font-size: 14px;
}

::placeholder {
  color: rgb(143, 143, 143);
}

input:focus {
    outline: none;
}

input:focus + button > i {
    color: rgb(85, 85, 85);
}

i {
    color: rgb(204, 204, 204);
    padding: 1rem 2rem;
    font-size: 18px;
    transition: all .3s;
    cursor: pointer;
}
button {
    border: none;
    background: transparent;
    padding: 0;
}
#search_country {
    background: white;
    box-shadow: 0 0 .5rem rgba(0, 0, 0, .1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding-left: 1rem;
}
    
</style>
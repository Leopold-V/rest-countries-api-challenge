<template>
<div id="container_filters">
    <div id="search_country">
        <input
            v-model="input"
            type="text"
            placeholder="Search for a country..."
        />
        <button><i class="fas fa-search"></i></button>
    </div>
    <div id="region_filter">
        <select v-model="region">
            <option value="">Filter by Region</option>
            <option>Africa</option>
            <option>Americas</option>
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
        }
    },
    data() {
        let input = '';
        let region = '';
        return {
            input,
            region
        }
    },
    methods: {
        filter() {
            let newCountries = [];
            if (this.input && this.region) {
                newCountries = this.countries.filter((country) => country.name.toLowerCase().match(this.input.toLowerCase()) && country.region === this.region);
            }
            if (!this.input) {
                newCountries = this.countries.filter((country) => country.region === this.region);
            }
            if (!this.region) {
                newCountries = this.countries.filter((country) => country.name.toLowerCase().match(this.input.toLowerCase()));
            }
            this.$emit('update-countries', newCountries);
        }
    },
    watch: {
        input: function () {
            this.filter();
        },
        region: function () {
            this.filter();
        },
    },
}

</script>
<style scoped>

#container_filters {
    padding: 2rem 1.5rem;
}

#region_filter {
    margin-top: 3rem;
}
input {
    border: none;
    width: 100%;
    padding: 1.2rem 0;
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
select {
    background: white;
    box-shadow: 0 0 .5rem rgba(0, 0, 0, .1);
    border-radius: 8px;
    padding: 1.2rem 1rem;
    border: none;
    cursor: pointer;
}

@media (min-width: 868px) {
    #container_filters {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 4rem;
    }
    #region_filter {
        margin-top: 0rem;
    }
    input {
        width: 350px;
    }
}
    
</style>
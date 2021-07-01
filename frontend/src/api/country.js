export const filterByName = async () => {
    e.preventDefault();
    if (this.input) {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.input}`)
        const json = await response.json();
        this.$emit('update-countries', json);
    }
};

export const filterByRegion = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/region/${this.region}`)
    const json = await response.json();
    this.$emit('update-countries', json);
};
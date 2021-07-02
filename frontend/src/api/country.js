export const getAllCountry = async () => {
    try {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export const getOneByName = async (name) => {
    try {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        const json = await response.json();
        return json[0];
    } catch (error) {
        console.log(error);   
    }
};
export const findOneByName = async (name) => {
    try {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        const json = await response.json();
        return json[0];
    } catch (error) {
        console.log(error);   
    }
};
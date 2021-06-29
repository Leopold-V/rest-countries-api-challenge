<template>
<div id="container_filters">
    <div id="search_country">
        <input 
            type="text"
            placeholder="Search for a country..."
        />
        <i class="fas fa-search"></i>
    </div>
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

input:focus + i {
    color: rgb(85, 85, 85);
}

i {
    color: rgb(204, 204, 204);
    padding: 0 2rem;
    font-size: 18px;
    transition: all .3s;
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
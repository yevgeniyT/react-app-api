const BASE_API = "https://rickandmortyapi.com/api";

export const getAllCharacters = async ()=>{
    const response = await fetch(`${BASE_API}/character`);
    return response;
};

export const getAllLocations = async () => {
    const response = await fetch(`${BASE_API}/location`);
    return response;
}

export const getAllEpisodes = async () => {
    const response = await fetch(`${BASE_API}/episode`);
    return response;
}
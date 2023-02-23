const BASE_API = "https://rickandmortyapi.com/api";

export const getAllCharacters = async ()=>{
    const response = await fetch(`${BASE_API}/character `)
    return response;
};
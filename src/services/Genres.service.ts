import { API_URL } from "../configs/config";

const getGenres = async () => {
    return await fetch(`${API_URL}/genres`);
};

const getGenreMovies = async (genreId: string) => {
    const response = await fetch(`${API_URL}/genres/${genreId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
    // return await fetch(`${API_URL}/genres/${genreId}`)
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // Convert the response to JSON
    // })
    // .then(data => {
    //     console.log(data); // Use the JSON data here
    // })
    // .catch(error => {
    //     console.error('There was a problem with the fetch operation:', error);
    // });
}

export { getGenres, getGenreMovies };

# Rick and Morty Universe app
Explore the characters of the Rick and Morty Universe, find out their current status, location and episodes, and add or delete characters from the list.
-----
## Before you start using it, don't forget to:
1. Fork this repository and clone using `git clone` 
2. Install all dependencies using `npm install`
3. Run this app using `npm start` 

------
## Technologies

This application was built using the following technologies:

-   React
-   React Hooks
-   HTML
-   CSS
-------
## Components description:

- `Home` - The main page of the application that displays a search bar for filtering the characters and a list of characters. Receives data of all characters as a prop and passes it down to the CharactersList component for rendering. Also handles the state of the characters being displayed and whether or not the search result is found.

- `CharacterList`- Receives an array of character data as props, maps through the data and renders a Character component for each character. Also passes down a getId function to the Character component as a prop, which is used to handle delete events when a character is removed from the list.

- `Craracter`- Responsible for rendering a single character card with their details such as name, status, species, and origin. Includes a button to delete the character and a link to their individual page. Receives character object and getId function as props. When the delete button is clicked, handleCharacterDelete function is called and getId function is invoked with the character's id as an argument.

- `CharacterDetails` - Displays the detailed information of a single character. Uses React Router to get the character's ID from the URL params, and then searches for that character in a data array. Displays the character's name, image, status, species, gender, type, origin, and current location. The component also includes some animations to make the information more visually appealing.

- `Footer` - Displays a footer with links to the homepage, creators' GitHub profiles, and the official Rick and Morty YouTube and Instagram pages. Uses React Icons to display the icons for each link.

- `Header` - A simple navigation bar that contains two links, "Home" and "Create". Provides easy access to different parts of the application and allows users to switch between views by clicking on the links. Uses the Link component from the react-router-dom library to ensure that the navigation is handled client-side without a page refresh.

- `SearchBar` - Provides a search input field along with a search button. When the user types in the search input, the component filters through the given data and displays the filtered data according to the user's input. This component takes in a data and handler prop, where data is the data that needs to be filtered and handler is a callback function that returns the filtered data. Utilizes the useState and useEffect hooks to manage the state of the input field and filter the data respectively. Also uses the Link component from react-router-dom to enable routing to different pages.

- `UploadImages` - Allows users to upload images. Displays an image upload button and previews the selected image. Once an image is selected, it creates a URL object and calls the onUpload function with the URL. Also checks if the image is valid and updates the disabled state of the upload button accordingly.
-----
## Services
- `UseFetch` -  Custom hook is used for fetching data from an API endpoint. It takes a getData parameter which determines which data to fetch, and returns an object containing the fetched data, error if there was any, and a boolean isPending flag indicating whether the request is currently pending or not. It uses useState and useEffect hooks to manage the state and handle side effects respectively, and it also has a fetchData function which is an asynchronous function used to make the actual fetch request. Additionally, it has a fake loading time of 1 second before setting the fetched data, which should not be used in real projects.

- `postServises` - Exports four functions that fetch data from the Rick and Morty API. getCustomData takes an endpoint parameter and returns a promise that resolves to the response of fetching the specified endpoint. The other three functions (getAllCharacters, getAllLocations, getAllEpisodes) return promises that resolve to the responses of fetching the corresponding endpoints for retrieving all characters, locations, and episodes respectively.

## Deploy link:
some info

-------------
## Contributors

This application was created by:

-   [Anna Kononchenko](https://github.com/AnyaKononchenko)
-   [Berk Disli](https://github.com/berkdisli)
-   [Yevgeniy Tolkachev](https://github.com/yevgeniyT)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
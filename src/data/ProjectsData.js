import projImgId1 from "../assets/img/hqdefault.png";

const ProjectsData = [
  {
    id: 1,
    title: "GeoDiscover: Interactive Places Visualization",
    subtitle:
      "Using the Google Places API with a Database and is viualizing Data on Google Map.",
    description:
      "This project aims to enhance the accuracy of user-entered geographic locations of universities by utilizing the Google Geocoding API for data cleansing and visualization. The process begins with the ingestion of geographic data from a text file (where.data), where each university name is checked against a SQLite database (geodata.sqlite) to avoid redundant API calls. If a university's geolocation is not already stored, the project retrieves its latitude and longitude by querying the Google Geocoding API, while also accounting for rate limits by allowing users to pause and resume the process as needed. Once the geolocation data is populated, it is formatted into a JavaScript file (where.js) for visualization. Finally, an HTML file (where.html) is generated, enabling users to view the universities on a Google Map, where they can interact with map pins to reveal additional location details. This project not only demonstrates effective data handling and geocoding but also showcases the integration of web technologies for interactive data visualization. (https://github.com/Anashritam/Projects749)",
    p_card1: "Java Script",
    p_card2: "Python",
    p_card3: "HTML",
    imgUrl: projImgId1,
    githubLink: "https://github.com/Anashritam/Projects749"
  },
];

export default ProjectsData;

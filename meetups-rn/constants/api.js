const fetchMeetups = () => {
  fetch("http://localhost:5000/api/meetups").then(response => response.json());
};

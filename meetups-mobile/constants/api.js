export const fetchMeetups = () => {
  fetch("http://192.168.43.83:5000/api/meetups")
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
};

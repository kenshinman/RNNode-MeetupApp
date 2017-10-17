import Meetup from "./model";

export const createMeetup = (req, res) => {
  const { title, description } = req.body;
  const newMeetup = new Meetup({ title, description });
  newMeetup
    .save()
    .then(result => {
      res.json(result);
      console.log(result);
    })
    .catch(err => console.log(err));
};

export const fetchMeetups = (req, res) => {
  Meetup.find({}).then(result => {
    res.json(result);
  });
};

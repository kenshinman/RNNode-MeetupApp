import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: [5, "Name must be at least 5 characters long"]
    },
    description: {
      type: String,
      required: true,
      minLength: [10, "Name must be at least 10 characters long"]
    },
    category: {
      type: String
    },
    meetups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Meetup"
      }
    ]
  },
  { timestamps: true }
);

//create a meetup and add it to the meetups array in the group
GroupSchema.statics.addMeetup = async function(id, args) {
  const Meetup = mongoose.model("Meetup");

  //add groupId to the meetup group element
  //this is the author of the meetup
  const newMeetup = await new Meetup({ ...args, group: id });

  const group = await this.findByIdAndUpdate(id, {
    $push: { meetups: newMeetup.id }
  });

  return {
    meetup: await newMeetup.save(),
    group
  };
};

export default mongoose.model("Group", GroupSchema);

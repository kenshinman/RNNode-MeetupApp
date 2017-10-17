const bodyParser = require("body-parser");
const morgan = require("morgan");

export default function(app){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan("dev"));
};

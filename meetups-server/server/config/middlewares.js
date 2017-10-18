const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors');
export default function(app){
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan("dev"));
};

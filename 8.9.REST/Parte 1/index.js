const mongoose=require('mongoose');
const app = require('./app');
const port =3000;
const urlMongoDb='mongodb+srv://admin:admin@taskdb.e9odkrz.mongodb.net/mydb';
mongoose.connect(
    urlMongoDb,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err, res) => {
      try {
        if (err) {
          throw err;
        } else {
          console.log("Conexion correcta");
  
          app.listen(port, () => {
            console.log(
              `http://localhost:${port}`
            );
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  );
  
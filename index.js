const app = require("./app");
<<<<<<< HEAD
app.listen(3000, () => {
=======
app.listen(process.env.PORT||3000, () => {
>>>>>>> da4b4bd (wd level 7)
  console.log("Started express server at port 3000");
});

import path from "path";

const __dirname = path.resolve();

export const index = function(req, res){
  res.sendFile(__dirname + "/src/views/index.html"); 
  console.log("SELAMAT");
};
export const about = function(req, res){
  res.sendFile(__dirname + "/src/views/about.html"); 
};


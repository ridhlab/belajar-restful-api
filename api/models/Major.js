// import mongoose 
import mongoose from "mongoose";
 
// Buat Schema
const Major = mongoose.Schema({
  id: {type: Number, required:true},
  jurusan: {type: String, required:true},
  bobot: {
    nilaiRapot:{
      matematika: {type: Number, required:true},
      bahasaIndonesia: {type: Number, required:true},
      bahasaInggris: {type: Number, required:true},
      ppkn: {type: Number, required:true},
      kesenian: {type: Number, required:true},
      olahraga: {type: Number, required:true},
      fisika: {type: Number, required:true},
      kimia: {type: Number, required:true},
      biologi: {type: Number, required:true},
      sejarah: {type: Number, required:true},
      ekonomi: {type: Number, required:true},
      geografi: {type: Number, required:true},
      sosiologi: {type: Number, required:true}
    },
    nilaiKecerdasan:{
      linguistik: {type: Number, required:true},
      logisMatematis: {type: Number, required:true},
      visualSpasial: {type: Number, required:true},
      kinestetik: {type: Number, required:true},
      musikal: {type: Number, required:true},
      interpersonal: {type: Number, required:true},
      intrapersonal: {type: Number, required:true},
      naturalis: {type: Number, required:true}
    }
  }
});
 
// export model
export default mongoose.model('Majors', Major);
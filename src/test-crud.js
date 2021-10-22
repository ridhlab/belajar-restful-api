import {getAll, get, create, update, remove, removeAll, findByTitle} from "./service/service.js"

getAll();

create(
  {
    "bobot": {
        "nilaiRapot": {
            "matematika": 1,
            "bahasaIndonesia": 6,
            "bahasaInggris": 3,
            "ppkn": 1,
            "kesenian": 1,
            "olahraga": 1,
            "fisika": 0,
            "kimia": 0,
            "biologi": 0,
            "sejarah": 3,
            "ekonomi": 2,
            "geografi": 2,
            "sosiologi": 4
        },
        "nilaiKecerdasan": {
            "linguistik": 5,
            "logisMatematis": 2,
            "visualSpasial": 2,
            "kinestetik": 2,
            "musikal": 1,
            "interpersonal": 4,
            "intrapersonal": 2,
            "naturalis": 2
        }
    },
    "id": 5,
    "jurusan": "Coba CRUD",
});



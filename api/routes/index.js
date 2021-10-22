// import express
import express from "express";
// import controllers
import { getMajors, 
  getMajorById, 
  saveMajor, 
  updateMajor,
  deleteMajor } from "../controllers/majorController.js";
 
    // express router
const router = express.Router();
 
// Route get All Majors
router.get('/', getMajors);
// Route get single Major
router.get('/:id', getMajorById);
// Route CREATE Major
router.post('/', saveMajor);
// Route UPDATE Major
router.patch('/:id', updateMajor);
// Route DELETE Major
router.delete('/:id', deleteMajor);
 
// export router
export default router;
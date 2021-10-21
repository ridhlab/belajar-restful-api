// import models
import Major from "../models/Major.js";
 
// function get All Majors
export const getMajors = async (req, res) => {
  try {
    const majors = await Major.find();
    res.json(majors);
  } catch (error) {
    res.status(500).json({message: error.message});
  }     
}
 
// function get single Major
export const getMajorById = async (req, res) => {
  try {
    const major = await Major.findById(req.params.id);
    res.json(major);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
 
// function Create Major
export const saveMajor = async (req, res) => {
  const major = new Major(req.body);
  try {
    const savedMajor = await major.save();
    res.status(201).json(savedMajor);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}
 
// function Update Major
export const updateMajor = async (req, res) => {
  const cekId = await Major.findById(req.params.id);
  if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
  try {
    const updatedMajor = await Major.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json(updatedMajor);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}
 
// function Delete Major
export const deleteMajor = async (req, res) => {
  const cekId = await Major.findById(req.params.id);
  if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
  try {
    const deletedMajor = await Major.deleteOne({_id: req.params.id});
      res.status(200).json(deletedMajor);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}
const express = require('express');
const router = express.Router();

const subject = require('../controllers/subject.controller');
const student = require('../controllers/student.controller');

router.get('/subjects', subject.getSubjects);
router.post('/subject', subject.createSubject);
router.put('/subject/:id', subject.addStudent);
router.delete('/subject/delete/:id', subject.deleteSubject);

router.get('/students', student.getStudent);
router.post('/student',student.createStudent);
router.delete('/student/delete/:id',student.deleteStudent);

module.exports = router;
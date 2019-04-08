const Subject = require('../models/subject');
const Student = require('../models/student');

const subjectCtrl = {};

subjectCtrl.getSubjects = async (req,res)=>{
    const subjects = await Subject.find()
        .populate({path: 'students'});
    res.json(subjects);
}

subjectCtrl.createSubject = async (req,res) => {
    const subject = new Subject({
        name: req.body.name,
        students: req.body.students
    });
    await subject.save();
    res.json({
        'status': 'Saved subject'
    });
}

subjectCtrl.addStudent = async(req,res) => {
    const {id} = req.params;
    const student = req.body.students;
    await Subject.findByIdAndUpdate(id, {$push: {students: student}});
    res.json({status: 'Subject updated'});
}

subjectCtrl.deleteSubject = async (req, res, next) => {
    await Subject.findByIdAndRemove(req.params.id);
    res.json({status: 'Subject Deleted'});
};

module.exports = subjectCtrl;
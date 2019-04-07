const Subject = require('../models/subject');
const Student = require('../models/student');

const studentCtrl = {};

studentCtrl.getStudent = async (req,res) => {
    const student = await Student.find();
    res.json(student);

}

studentCtrl.createStudent = async (req,res)=> {
    const student = new Student({
        name: req.body.name,
        address: req.body.address,
        phones: req.body.phones
    });
    await student.save();
    res.json({
        'status': 'Saved student'
    });
}

studentCtrl.deleteStudent = async (req, res, next) => {
    await Student.findByIdAndRemove(req.params.id);
    res.json({status: 'Student Deleted'});
};

module.exports = studentCtrl;
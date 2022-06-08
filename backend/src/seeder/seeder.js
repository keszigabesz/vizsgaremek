const fsp = require('fs').promises;
const PatientModel = require('../model/patient');
const {join} = require('path');

(async () => {
    const patientJson = await fsp.readFile(
        join(__dirname, 'patients.json'),
        'utf8',
    );
    const patients = JSON.parse(patientJson);
    await PatientModel.insertMany(patients);
})()

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json());

// Create patients in an object with information within an array
let patients = new Object();
patients["999991234"] = ["Jensen", "Watkins", "123-456-7890"]
patients["999995678"] = ["Faizaan", "Patel", "098-765-4321"]

// Create records in an object with status of health within an array
let records = new Object();
records["999991234"] = "Status: Healthy"
records["999995678"] = "Status: Slight Fever"

// Get a Patient Medical Record  
app.get("/records", (req, res) => {
    
    // Verify that the patient exists
        if (records[req.headers.sin] == undefined) {
            res.status(404).send({"msg": "Patient not found."})
            return;
        }
    // Verify that SIN matches First and Last name
    if (req.headers.firstname == patients[req.headers.sin][0] && req.headers.lastname == patients[req.headers.sin][1]) {
        if (req.body.reasonforvisit == "medicalrecords") {
            // first name and last name match, therefor return medical record
            res.status(200).send(records[req.headers.sin])    
            return;
        }
        else {
            // return error
            console.log[req.body.reasonforvisit]
            res.status(501).send({"msg": "Unable to complete request at this time: " + req.body.reasonforvisit})
            return;
        }

    }
    else {
        res.status(403).send({"msg": "First or last name did not match"})
    }

});

// Create a new Patient Record
app.post("/newpatient", (req, res) => {
    
    // Create patient in the database
    patients[req.headers.sin] = [req.headers.firstname, req.headers.lastname, req.headers.phone]
    res.status(200).send(patients)
});

// Update existing Patient Phone Number
app.put("/updatephone", (req, res) => {
    
    // Verify the patient exists
    if (records[req.headers.sin] == undefined) {
        res.status(404).send({"msg": "Patient not found."})
        return;
    }
    
    // Verify that SIN matches First and Last name
    if (req.headers.firstname == patients[req.headers.sin][0] && req.headers.lastname == patients[req.headers.sin][1]) {

        // Update the phone number and return patient info
        patients[req.headers.sin] = [req.headers.firstname, req.headers.lastname, req.body.phone];
        res.status(200).send(patients[req.headers.sin]);
        return;
    }
    else{
        res.status(403).send({"msg": "First or last name did not match SIN. (Trying to update Phone #)"})
        return;
    }

});

// Delete existing Patient Record
app.delete("/deleterecord", (req, res) => {

    // Verify that the patient exists
     if (records[req.headers.sin] == undefined) {
        res.status(404).send({"msg": "Patient not found."})
        return;
    }

    // Verify SIN matches first and last name
    if (req.headers.firstname == patients[req.headers.sin][0] && req.headers.lastname == patients[req.headers.sin][1]) {

        // Delete patient and medical recrods from database

        delete patients[req.headers.sin]
        delete records[req.headers.sin] 

        res.status(200).send(patients);
        return;

    }
    else {
        res.status(401).send({"msg":"First or Last name doesn't match the SIN. (Trying to delete)"})
        return;
    }

});

app.listen(3000);


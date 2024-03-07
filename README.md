<h1>REST API for Medical Clinic Database Project (Node JS & Express)</h1>

<img src="https://imgur.com/dgYs8Ga.png" height="80%" width="80%" alt="diagram"/>
<img src="https://imgur.com/Toy5vt4.png" height="80%" width="80%" alt="diagram"/>

<h2>Description</h2>
In this project, I setup a REST API that tracks a Medical Clinics database. The API will be able to get, create, update, and delete patient information. This lab is done using Python and JSON on Virtual Studio Code. I also use Node JS and Express to run the server, and Postman to send data. This is a step by step guide so feel free to follow along! 
<br />


<h2>Languages and Utilities Used</h2>

- <b>PowerShell</b> 
- <b>Python</b>
- <b>JSON</b>

<h2>Environments Used </h2>

- <b>Virtual Studio Code</b>
- <b>Postman</b>
- <b>Windows 10</b>

<h2>Program walk-through:</h2>

<p align="left">
First we will install some packages that will be needed to complete this project. We will initialize the Node Package Manager (NPM) by using the command "init npm". nmp is used to manage dependencies: <br/>
<img src="https://i.imgur.com/AaXgd51.png" height="80%" width="80%" alt="set up"/>
<br />
<br />
Install the following packages and ensure VS Code is running as adminstrator to use Powershell commands:  <br/>
<img src="https://i.imgur.com/2Es78hA.png" height="80%" width="80%" alt="set up"/>
<br />
<br />
Create a js file named whatever, in our case index.js in your API folder directory. I then built a simple outline of the API running on localhost port 3000 which I will build on to. Use the command "nodemon index.js" to start the Node JS server.: <br/>
<img src="https://i.imgur.com/sUkgw0g.png" height="80%" width="80%" alt="set up"/>
<br />
<br />
<img src="https://i.imgur.com/pDQDvL9.png" height="80%" width="80%" alt="set up"/>
<br />
<br />
Here is the outline of the API and its functionalities, as well as the use of Postman to send API request to our REST API (POST, PUT, DELETE, and GET). We will be using header for authentication and body for miscellaneous purposes (reason why I used bodyParser):  <br/>
<img src="https://i.imgur.com/ZgTFUbn.png" height="80%" width="80%" alt="set up"/>
<br />
<br />
Build the database for the medical records and the patients:  <br/>
<img src="https://i.imgur.com/H6T2o9G.png" height="80%" width="80%" alt="set up"/>
<br />
<br />
Now I will begin working on the functionalities, for the GET method there are a couple things we need to verify as shown below before we can provide the medical records. I've also logged the headers data from Postman to my server to test if the data is being recieved correctly:  <br/>
<img src="https://i.imgur.com/pCCZjSJ.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<img src="https://i.imgur.com/anFldxR.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
I then created a if statement which checks to verify that if the values in the "sin" header does not match then respond with a status 404 code using a JSON message "Patient not found".:  <br/>
<img src="https://i.imgur.com/Aa9veGu.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
Then created another if statement to verify if the firstname and lastname match with the corresponding sin. If successfull return status 200 (OK) with the mediacal record and a JSON message, else return an error JSON message with status 401 (unauthorized):  <br/>
<img src="https://i.imgur.com/VhvIHXB.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
Succesfull Return of the GET method: <br/>
<img src="https://i.imgur.com/WBgqlLL.png" height="80%" width="80%" alt="Cyber Attack Event Management"/>
<br />
<br />
For the next function, We will use the POST method to create a new patient we want to be able to assert a new patient from the header to the database. So if the patients sin match equals the firstname, lastname, and phone. then add the patient to the database with a status 200 (OK):  
<br/>
<img src="https://i.imgur.com/gNb5Nik.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
Next create a funtion for updating a patients phone number, we need to verify the sin, verify if the first and last name match the sin, then we can use the PUT method to update the phone number and return the updated database in the body:  <br/>
<img src="https://i.imgur.com/gNb5Nik.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
Lastly we will create a funtion to delete patients and medical records, again we need to verify if the patients sin exists in the database, verify if the sin matches with the first and last name, then we are able to delete the patient or records from our database using the DELETE Method. Else return error code with JSON message indicating the credentials don't match the sin on file:  <br/>
<img src="https://i.imgur.com/ESORHBw.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />

<br />
This Concludes This REST API for a Medical Clinic Project!
NOTE: You can build on this and add more security layers and conditions as it would be in real life!  <br/>
<br />
</p>

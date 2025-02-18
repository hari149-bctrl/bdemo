function addEducation() {
    let container = document.getElementById("educationContainer");
    let div = document.createElement("div");
    div.classList.add("education-entry");

    div.innerHTML = `
        <div class="label-names">
            <label>College Name</label>
            <p class="confusion-btn" title="Yes, I too have the same feeling of why I joind into this college">🤦</p>
        </div>
        <input type="text" placeholder="Enter your college name" class="collegeName" oninput="updatePreview()">
        <div class="label-names">
            <label>College Address</label>
            <p class="confusion-btn" title="Bro, I don't have the maps integrated in this, but wait I will help you. Fill in this format --> District(Anantapur), State(Write short forms of the states(AP)). It will look like (Anantapur, AP)">📍</p>
        </div>
        <input type="text" placeholder="Enter your college address" class="collegeAddress" oninput="updatePreview()"><br>
        <div class="label-names">
            <label>Degree</label>
            <p class="confusion-btn" title="My uncle decided my future 😏. Fill in the format of ( Bachelors in Computer Science and Engineering )">📚</p>
        </div>
        <input type="text" placeholder="Enter your Degree" class="collegeDegree" oninput="updatePreview()"><br>
        <div class="label-names">
            <label>Start Date</label>
            <p class="confusion-btn" title="Yeah bro, that day we became a master in maintaining attendence. Fill in this format bro --> 12/2020 ">🎒</p>
        </div>
        <input type="text" placeholder="Eg., 12/2020" class="collegeStart" oninput="updatePreview()"><br>
        <div class="label-names">
            <label>End Date</label>
            <p class="confusion-btn" title="This is the best feeling I ever had 😮‍💨. Fill in this format bro --> 04/2024">🤷</p>
        </div>
        <input type="text" placeholder="Eg., 04/2024" class="collegeEnd" oninput="updatePreview()"><br>
        <div class="check-box" style="display: none;">
            <input type="checkbox" class="pursuing" oninput="updatePreview()">
            <p>Not completed yet</p>
        </div>
        <div class="label-names">
            <label>CGPA</label>
            <p class="confusion-btn" title="🥲 I feel sorry for you bro. Fill in this format --> 8.0">🤣🤣</p>
        </div>
        <input type="number" placeholder="Eg., 8.0" class="cumulativeGPA" oninput="updatePreview()"><br>
        
        <button class="remove-btn" type="button" onclick="removeEducation(this)">Remove</button>
    `;

    container.appendChild(div);
    updatePreview();
}

function removeEducation(element) {
    element.parentElement.remove();
    updatePreview();
}



// Add Experience
function addExperience() {
    let container = document.getElementById("experienceContainer");
    let div = document.createElement("div");
    div.classList.add("experience-entry");

    div.innerHTML = `
        <div class="label-names">
            <label>Company Name</label>
            <p class="confusion-btn" title="🫂 You did it bro 💙. Don't worry I will highlight it in your resume 🫂">🏢</p>
        </div>
        <input type="text" placeholder="Enter your company name" class="companyName" oninput="updatePreview()">

        <div class="label-names">
            <label>Comapny Address</label>
            <p class="confusion-btn" title="Don't provide your BF's or GF's address. Fill the office location(District/Area, State) --> Bengaluru, Karnataka ✅ ">🪧</p>
        </div>
        <input type="text" placeholder="Enter your company address" class="companyAddress" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>Position</label>
            <p class="confusion-btn" title="Not the position you'r thinking of bro.... Stop brooo.. (Write the position your company assigned for you. Eg., Junior software developer)">🎚️</p>
        </div>
        <input type="text" placeholder="Enter your Position" class="companyPosition" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>Start Date</label>
            <p class="confusion-btn" title="🫂You made a good choice bro. Fill it in the format of month/year Eg., 04/2020">🕧</p>
        </div>
        <input type="text" placeholder="Eg., 12/2020" class="companyStart" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>End Date</label>
            <p class="confusion-btn" title="🫂Nice to take a new step. Fill it in the format of month/year Eg., 04/2024">👋</p>
        </div>
        <input type="text" placeholder="Eg., 04/2024" class="companyEnd" oninput="updatePreview()"><br>

        <div class="label-names">
            <label>Description</label>
            <p class="confusion-btn" title="You need to write atleast four points. Points will be divided when you press enter.">🌡️</p>
        </div>
        <textarea id="experience" placeholder="Enter lines separated by a new line"></textarea><br><br>
        
        <button class="remove-btn" type="button" onclick="removeExperience(this)">Remove</button>
    `;

    container.appendChild(div);
    updatePreview();
}

function removeExperience(element) {
    element.parentElement.remove();
    updatePreview();
}



// University projects
function addUniversityProject() {
    let container = document.getElementById("universityContainer");
    let div = document.createElement("div");
    div.classList.add("project-entry");

    div.innerHTML = `
        <div class="label-names">
            <label>Project Name</label>
            <p class="confusion-btn" title="Name of the project bro. Eg., Kalki 298D">👨‍💻</p>
        </div>
        <input type="text" placeholder="Enter your Project name" class="projectName" oninput="updatePreview()">
        
        <div class="label-names">
            <label>Start Date</label>
            <p class="confusion-btn" title="When did you start this project. I know somewhere between🧬. Fill in this format bro --> 01/2024 ✅">🕧</p>
        </div>
        <input type="text" placeholder="Eg., 12/2020" class="projectStart" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>End Date</label>
            <p class="confusion-btn" title="Trust me bro, this will never end☠️. Fill in this format bro --> 01/2024 ✅">⚰️</p>
        </div>
        <input type="text" placeholder="Eg., 04/2024" class="projectEnd" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>Project Description</label>
            <p class="confusion-btn" title="Yeah, I know this is one of the messy thing, you have every done🔪">😵</p>
        </div>
        <textarea id="universityExperience" placeholder="Enter bullet points separated by a new line"></textarea><br><br>
        
        <button class="remove-btn" type="button" onclick="removeProject(this)">Remove</button>
    `;

    container.appendChild(div);
    updatePreview();
}

function removeProject(element) {
    element.parentElement.remove();
    updatePreview();
}

// Activities
function addActivitiesContainer() {
    let container = document.getElementById("activitiesContainer");
    let div = document.createElement("div");
    div.classList.add("activities-entry");

    div.innerHTML = `
        <div class="label-names">
            <label>Activity Name</label>
            <p class="confusion-btn" title="Not the Activities you are doing with your life bro.....">👨</p>
        </div>
        <input type="text" placeholder="Enter your activity name" class="activitieName" oninput="updatePreview()">
        
        <div class="label-names">
            <label>Location</label>
            <p class="confusion-btn" title="Where you did the activity. In this format --> Bengaluru, Karnataka ✅">🗺️</p>
        </div>
        <input type="text" placeholder="Enter your activitie address" class="activitieAddress" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>Role</label>
            <p class="confusion-btn" title="I know you will lie in this, your secret is safe🤫. Eg., Head of the department or Organizer etc...">🛼</p>
        </div>
        <input type="text" placeholder="Enter your Position" class="activitiePosition" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>Start Date</label>
            <p class="confusion-btn" title="This is the time you betreyed your friends🪂. Fill in this format bro --> Eg., 12/2020 ✅ ">🕧</p>
        </div>
        <input type="text" placeholder="Eg., 12/2020" class="activitieStart" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>End Date</label>
            <p class="confusion-btn" title="After all the work(Lie used to skip the classes). Fill in this format bro Eg., 12/2020">🔚</p>
        </div>
        <input type="text" placeholder="Eg., 04/2024" class="activitieEnd" oninput="updatePreview()"><br>
        
        <div class="label-names">
            <label>Description</label>
            <p class="confusion-btn" title="Say the same thing you said to your friends(Overacting🛑).  Just need two points bro">🗣️</p>
        </div>
        <textarea id="activities-points" placeholder="Enter bullet points separated by a new line"></textarea><br><br>
        
        <button type="button" onclick="removeActivity(this)">Remove</button>
    `;

    container.appendChild(div);
    updatePreview();
}

function removeActivity(element) {
    element.parentElement.remove();
    updatePreview();
}






// ToDo:- 🕰️Preview part update later
function updatePreview() {
    document.getElementById("previewName").innerText = document.getElementById("name").value || "Your Name";
    document.getElementById("previewContact").innerText = (document.getElementById("address").value || "Your Address") + " | " + (document.getElementById("phone").value || "Your Phone") + " | " + (document.getElementById("email").value || "Your Email");

    let educationContainer = document.querySelector(".educationContainer");
    educationContainer.innerHTML = "<h3>EDUCATION</h3><hr>";
    let educationEntries = document.querySelectorAll(".education-entry");
    educationEntries.forEach(entry => {
        let collegeName = entry.querySelector(".collegeName").value || "College Name";
        let collegeAddress = entry.querySelector(".collegeAddress").value || "College Address";
        let collegeDegree = entry.querySelector(".collegeDegree").value || "Degree";
        let collegeStart = entry.querySelector(".collegeStart").value || "Start Date";
        let collegeEnd = entry.querySelector(".collegeEnd").value || "End Date";
        let pursuing = entry.querySelector(".pursuing").checked ? "(Pursuing)" : `${collegeStart} - ${collegeEnd}`;
        let cumulativeGPA = entry.querySelector(".cumulativeGPA").value || "";
        educationContainer.innerHTML += `<p><b>${collegeName}</b>, ${collegeAddress} - ${collegeDegree} (${pursuing} <b> ${cumulativeGPA})</p>`;
    });


    // Experience
    let experienceContainer = document.querySelector(".experienceContainer");
    experienceContainer.innerHTML = "<h3>WORK EXPERIENCE - INTERNSHIPS</h3><hr>";
    let experienceEntries = document.querySelectorAll(".experience-entry");
    experienceEntries.forEach(entry => {
        let companyName = entry.querySelector(".companyName").value || "Company Name";
        let companyAddress = entry.querySelector(".companyAddress").value || "Company Address";
        let companyPosition = entry.querySelector(".companyPosition").value || "Position";
        let companyStart = entry.querySelector(".companyStart").value || "Start Date";
        let companyEnd = entry.querySelector(".companyEnd").value || "End Date";
        let pursuing = `${companyStart} - ${companyEnd}`;
        educationContainer.innerHTML += `<p><b>${companyName}</b>, ${companyAddress} - ${companyPosition} ${pursuing} </p>`;
    });
}



// async
async function generateResume() {
    const { Document, Paragraph, TextRun, Packer, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle , TabStopPosition, TabStopType} = docx;

    // Fetch user input
    const name = document.getElementById("name").value || "Your Name";
    const address = document.getElementById("address").value || "Your Address";
    const email = document.getElementById("email").value || "Your Email";
    const phone = document.getElementById("phone").value || "Your Phone";
    const technicalSkills = document.getElementById("technicalSkills").value || "Technical skills";
    const verbalLanguages = document.getElementById("verbalLanguages").value || "Verbal Language skills";
    const certificates = document.getElementById("certificates").value || "Certificates skills";
    const hobbies = document.getElementById("hobbies").value || "Hobbies";

    // Fetch multiple education entries dynamically
    // Educarion section ⬇️
    let educationRows = [];
    document.querySelectorAll(".education-entry").forEach(entry => {
        let collegeName = entry.querySelector(".collegeName").value || "College Name";
        let collegeAddress = entry.querySelector(".collegeAddress").value || "College Address";
        let collegeDegree = entry.querySelector(".collegeDegree").value || "Degree";
        let collegeStart = entry.querySelector(".collegeStart").value || "Start Date";
        let collegeEnd = entry.querySelector(".collegeEnd").value || "End Date";
        let pursuing = entry.querySelector(".pursuing").checked ? "(Pursuing)" : `${collegeStart} - ${collegeEnd}`;
        let cumulativeGPA = entry.querySelector(".cumulativeGPA").value || "";

        educationRows.push(
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: collegeName.toUpperCase(), bold: true, font: "Garamond" })],
                        alignment: AlignmentType.LEFT,
                        spacing: { before: 100 } })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE}
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: collegeAddress, font: "Garamond" })],
                        alignment: AlignmentType.RIGHT,
                        spacing: { before: 100 } })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }
                    })
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
                borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }

            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: collegeDegree, font: "Garamond" })],
                        alignment: AlignmentType.LEFT})],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        alignment: AlignmentType.LEFT,
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE }
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: pursuing, font: "Garamond" })],
                        alignment: AlignmentType.RIGHT })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        alignment: AlignmentType.RIGHT,
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE }
                    }),
                    
                ],
                
                width: { size: 100, type: WidthType.PERCENTAGE },
                borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }
            }),
            new TableRow({
                children:[
                    new TableCell({
                        children:[new Paragraph({children: [new TextRun({text: `\tCumulative GPA: ${cumulativeGPA}`,font: "Garamond"})]})]
                    })
                ]
            })
        );
    });
    // Education done✅

    // Experience rows⬇️
    let experienceRows = [];
    document.querySelectorAll(".experience-entry").forEach(entry => {
        let companyName = entry.querySelector(".companyName").value || "Company Name";
        let companyAddress = entry.querySelector(".companyAddress").value || "Company Address";
        let companyPosition = entry.querySelector(".companyPosition").value || "Position";
        let companyStart = entry.querySelector(".companyStart").value || "Start Date";
        let companyEnd = entry.querySelector(".companyEnd").value || "End Date";
        let pursuing = `${companyStart} - ${companyEnd}`;

        let experienceText = entry.querySelector("#experience").value || "";
        let experienceList = experienceText.split("\n").filter(line => line.trim() !== "");
        
        experienceRows.push(
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: companyName.toUpperCase(), bold: true, font: "Garamond" })],
                        alignment: AlignmentType.LEFT,
                        spacing: { before: 100 } })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE}
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: companyAddress, font: "Garamond" })],
                        alignment: AlignmentType.RIGHT,
                        spacing: { before: 100 } })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }
                    })
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
                borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }

            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: companyPosition, font: "Garamond" })],
                        alignment: AlignmentType.LEFT})],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        alignment: AlignmentType.LEFT,
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE }
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: pursuing, font: "Garamond" })],
                        alignment: AlignmentType.RIGHT })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        alignment: AlignmentType.RIGHT,
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE }
                    }),
                    
                ],
                
                width: { size: 100, type: WidthType.PERCENTAGE },
                borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }
            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        children: experienceList.map(item => 
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "•       ", size: 16 }), // Small bullet
                                    new TextRun({ text: item, size: 22, font: "Garamond" }) // Regular text
                                ],
                            })
                        )
                    })
                ]
            })
            
        );
    });
    // Experience done ✅


    // University projects ⬇️
    let universityRows = [];
    document.querySelectorAll(".project-entry").forEach(entry => {
        let projectName = entry.querySelector(".projectName").value || "Company Name";
        let projectStart = entry.querySelector(".projectStart").value || "Start Date";
        let projectEnd = entry.querySelector(".projectEnd").value || "End Date";
        let pursuing = `${projectStart} - ${projectEnd}`;

        let experienceText = entry.querySelector("#universityExperience").value || "";
        let experienceList = experienceText.split("\n").filter(line => line.trim() !== "");
        
        universityRows.push(
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: projectName.toUpperCase(), bold: true, font: "Garamond" })],
                        alignment: AlignmentType.LEFT,
                        spacing: { before: 100 } })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE}
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: pursuing, font: "Garamond" })],
                        alignment: AlignmentType.RIGHT,
                        spacing: { before: 100 } })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }
                    })
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
                borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }

            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        children: experienceList.map(item => 
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "•       ", size: 16 }), // Small bullet
                                    new TextRun({ text: item, size: 22, font: "Garamond" }) // Regular text
                                ],
                            })
                        )
                    })
                ]
            })

            
        );
    });
    // University projects done ✅

    // Activities section ⬇️
    let activitiesRows = [];
    document.querySelectorAll(".activities-entry").forEach(entry => {
        let activitieName = entry.querySelector(".activitieName").value || "activitie Name";
        let activitieAddress = entry.querySelector(".activitieAddress").value || "activitie Address";
        let activitiePosition = entry.querySelector(".activitiePosition").value || "Position";
        let activitieStart = entry.querySelector(".activitieStart").value || "Start Date";
        let activitieEnd = entry.querySelector(".activitieEnd").value || "End Date";
        let pursuing = `${activitieStart} - ${activitieEnd}`;

        let experienceText = entry.querySelector("#activities-points").value || "";
        let experienceList = experienceText.split("\n").filter(line => line.trim() !== "");
        
        activitiesRows.push(
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: activitieName.toUpperCase(), bold: true, font: "Garamond" })],
                        alignment: AlignmentType.LEFT,
                        spacing: { before: 100 } })],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE}
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: activitieAddress, font: "Garamond" })],
                        alignment: AlignmentType.RIGHT,
                        spacing: { before: 100 } })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }
                    })
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
                borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }

            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: activitiePosition, font: "Garamond" })],
                        alignment: AlignmentType.LEFT})],
                        width: { size: 70, type: WidthType.PERCENTAGE },
                        alignment: AlignmentType.LEFT,
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE }
                    }),
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: pursuing, font: "Garamond" })],
                        alignment: AlignmentType.RIGHT })],
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        alignment: AlignmentType.RIGHT,
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE }
                    }),
                    
                ],
                
                width: { size: 100, type: WidthType.PERCENTAGE },
                borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE }
            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        children: experienceList.map(item => 
                            new Paragraph({
                                children: [
                                    new TextRun({ text: "•       ", size: 16 }), // Small bullet
                                    new TextRun({ text: item, size: 22, font: "Garamond" }) // Regular text
                                ],
                            })
                        )
                    })
                ]
            })
            
        );
    });
    // Activiteis done✅

    const doc = new Document({
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 720,
                            bottom: 720,
                            left: 720,
                            right: 720,
                        },
                    },
                },
                children: [
                    new Paragraph({ 
                        children: [new TextRun({ text: name.toUpperCase(), bold: true, size: 32,font: "Garamond" })], 
                        alignment: AlignmentType.CENTER 
                    }),
                    new Paragraph({ 
                        children: [new TextRun({ text: `${address} | ${phone} | ${email}`, size: 22,font: "Garamond"})], 
                        alignment: AlignmentType.CENTER 
                    }),
                    new Paragraph(""),

                    new Paragraph({
                        children: [new TextRun({ text: "EDUCATION", bold: true, size: 22, font: "Garamond" })],
                        border: { bottom: { color: "000000", space: 1, size: 6, style: "single" } }
                    }),
                    new Table({
                        rows: educationRows,
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE },
                        alignment: AlignmentType.Left,
                        margins: {left: 0, right:0},
                        columns: [
                            { width: 70 * 50 }, 
                            { width: 30 * 50, alignment: AlignmentType.RIGHT}
                        ]
                    }),
                    new Paragraph(""),
                    new Paragraph({
                        children: [new TextRun({ text: "WORK EXPERIENCE - INTERNSHIPS", bold: true, size: 22, font: "Garamond" })],
                        border: { bottom: { color: "000000", space: 1, size: 6, style: "single" } }
                    }),
                    new Table({
                        rows: experienceRows,
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE },
                        alignment: AlignmentType.Left,
                        margins: {left: 0, right:0},
                        columns: [
                            { width: 70 * 50 }, 
                            { width: 30 * 50, alignment: AlignmentType.RIGHT}
                        ]
                    }),
                    new Paragraph(""),
                    new Paragraph({
                        children: [new TextRun({ text: "UNIVERSITY PROJECTS", bold: true, size: 22, font: "Garamond" })],
                        border: { bottom: { color: "000000", space: 1, size: 6, style: "single" } }
                    }),
                    new Table({
                        rows: universityRows,
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE },
                        alignment: AlignmentType.Left,
                        margins: {left: 0, right:0},
                        columns: [
                            { width: 70 * 50 }, 
                            { width: 30 * 50, alignment: AlignmentType.RIGHT}
                        ]
                    }),
                    new Paragraph(""),
                    new Paragraph({
                        children: [new TextRun({ text: "ACTIVITIES", bold: true, size: 22, font: "Garamond" })],
                        border: { bottom: { color: "000000", space: 1, size: 6, style: "single" } }
                    }),
                    new Table({
                        rows: activitiesRows,
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: { top: BorderStyle.NONE, bottom: BorderStyle.NONE, left: BorderStyle.NONE, right: BorderStyle.NONE,insideVertical: BorderStyle.NONE,insideHorizontal: BorderStyle.NONE },
                        alignment: AlignmentType.Left,
                        margins: {left: 0, right:0},
                        columns: [
                            { width: 70 * 50 }, 
                            { width: 30 * 50, alignment: AlignmentType.RIGHT}
                        ]
                    }),
                    new Paragraph(""),
                    new Paragraph({
                        children: [new TextRun({ text: "ADDITIONAL", bold: true, size: 22, font: "Garamond" })],
                        border: { bottom: { color: "000000", space: 1, size: 6, style: "single" } }
                    }),

                    // new Paragraph({ 
                    //     children: [new TextRun({ text: `<b>Technical Skills: <b>${technicalSkills} <br> ${phone} | ${email}`, size: 22,font: "Garamond"})], 
                    // }),

                    new Paragraph({
                        children: [
                            new TextRun({ text: "Technical Skills: ", size: 22, bold: true, font: "Garamond"}), // Small bullet
                            new TextRun({ text: technicalSkills, size: 22, font: "Garamond" }) // Regular text
                        ],
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({ text: "Languages: ", size: 22, bold: true, font: "Garamond"}), // Small bullet
                            new TextRun({ text: verbalLanguages, size: 22, font: "Garamond" }) // Regular text
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Certifications & Training: ", size: 22, bold: true, font: "Garamond"}), // Small bullet
                            new TextRun({ text: certificates, size: 22, font: "Garamond" }) // Regular text
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Hobbies: ", size: 22, bold: true, font: "Garamond"}), // Small bullet
                            new TextRun({ text: hobbies, size: 22, font: "Garamond" }) // Regular text
                        ],
                    }),





                ],
            },
        ],
    });

    // Generate and download the Word file
    Packer.toBlob(doc).then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Resume.docx";
        link.click();
        URL.revokeObjectURL(url);
    });
}









// Hamburger menu
function toggleMenu() {
    document.querySelector('.quickAccessLinks').classList.toggle('active');
}

let resultData;

fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRaPiN1rMzLPcz25HssuMuyrQWaA4z0U9u1ElezPTySTx7jvL23KjxjTmQrdMOami8GIxyBIJDwrn4W/pub?output=csv")
  .then(response => response.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        resultData = result.data;
        console.log(resultData);
        updateJobListings(resultData);
      }
    });
  })
  .catch(error => console.error("Error fetching CSV:", error));

function updateJobListings(data) {
  const container = document.querySelector(".hiringContainer");
  container.innerHTML = ""; // Clear existing HTML

  data.forEach((job, index) => {
    const companyLogo = job['Company logo url'] ? job['Company logo url'].trim() : '';
    const jobId = `job-${index}`; // Unique ID for each job

    const jobHTML = `
        <div id="${jobId}" class="card-container">
            <a href="https://brainyvoyage.com/hiring" class="job-link">https://brainyvoyage.com/hiring</a>
            <div class="subContainer">                
                <main class="main-content">
                    <h1 style="text-decoration: none;">*${job['Company Name']}*</h1>
                    <p>${job['Job description']}</p>
                </main>
            </div>
            <div>
                <div class="flex-row">
                    <div class="coin-base"></div>
                    <div class="time-left">
                        <p>${daysLeft(job['Deadline'])} days left</p>
                    </div>
                </div>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${jobId}')">Copy</button>
        </div>
    `;
    container.innerHTML = jobHTML + container.innerHTML; // Prepend new job at the top
  });
}

function daysLeft(targetDateStr) {
  let targetDate = new Date(targetDateStr);
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let diffInMs = targetDate - today;
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24)); // Convert ms to days
}

function copyToClipboard(jobId) {
  const jobDiv = document.getElementById(jobId);
  if (!jobDiv) return;

  const link = jobDiv.querySelector(".job-link").href;
  const text = `*Apply Link*:\n${link}\n\n${jobDiv.innerText}`;

  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy:", err);
  });
}

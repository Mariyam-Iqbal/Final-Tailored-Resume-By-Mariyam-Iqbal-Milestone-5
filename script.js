var _a, _b;
document.getElementById("resumeForm") ? addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (profilePictureInput
        && nameElement && emailElement
        && phoneElement && educationElement
        && experienceElement && skillsElement) {
        usernameElement;
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/ ".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Uploading profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n    <h2>Resume </h2>\n    <P><strong>Profile Picture:</strong> <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\"> </p>\n    <p>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, " </span></p>\n    <p>Email:</strong>  <span id=\"edit-email\" class=\"editable\">").concat(email, " </span> </p>\n    <p>Phone:</strong>  <span id=\"edit-phone\" class=\"editable\">").concat(phone, " </span> </p>\n\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n    ");
        var downloadlink = document.createElement('a');
        downloadlink.href = 'data: text/html;charset-utf-8,' + encodeURIComponent(resumeOutput);
        downloadlink.download = uniquePath;
        downloadlink.textContent = "Download Resume";
        //display resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadlink);
            makeEditable();
            resumeOutputElement.appendChild(downloadlink);
        }
    }
    else {
        console.error("Error: One or more required fields are missing.");
    }
}) : '';
(_a = document.getElementById('save-pdf')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    window.print();
});
(_b = document.getElementById('share-resume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var shareData = {
        title: 'Resume',
        text: 'Check out my resume!',
        url: window.location.href
    };
    if (navigator.share) {
        navigator.share(shareData)
            .then(function () { return console.log('Resume shared successfully!'); })
            .catch(function (error) { return console.error('Error sharing the resume:', error); });
    }
    else {
        alert('Web Share API is not supported in your browser.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        var _a;
        var currentElement = element;
        var currentValue = currentElement.textContent || "";
        //replacing 
        if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
            var editLink_1 = document.createElement('input');
            editLink_1.type = "text";
            editLink_1.value = currentValue;
            editLink_1.classList.add("edit-link");
            editLink_1.addEventListener('blur', function () {
                currentElement.textContent = editLink_1.value;
                currentElement.style.display = "block";
                editLink_1.remove();
            });
            currentElement.style.display = "none";
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(editLink_1, currentElement);
            editLink_1.focus();
        }
    });
}

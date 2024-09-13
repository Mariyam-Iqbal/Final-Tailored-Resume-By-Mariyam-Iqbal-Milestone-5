document.getElementById("resumeForm")? addEventListener ("submit", function(event)  {
    event.preventDefault();


    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;


    const nameElement   = document.getElementById("name") as HTMLInputElement;
    const emailElement   = document.getElementById("email") as HTMLInputElement;
    const phoneElement   = document.getElementById("phone") as HTMLInputElement;
    const educationElement   = document.getElementById("education") as HTMLInputElement;
    const experienceElement   = document.getElementById("experience") as HTMLInputElement;
    const skillsElement   = document.getElementById("skills") as HTMLInputElement;

    const usernameElement = document.getElementById("username") as HTMLInputElement;

        
    


     if (profilePictureInput 
     && nameElement && emailElement
     && phoneElement && educationElement
     && experienceElement && skillsElement) {




        usernameElement
     
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

       const username = usernameElement.value;
       const uniquePath = `resumes/ ${username.replace(/\s+/g, '_')}_cv.html`


        // Uploading profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    



    const resumeOutput = `
    <h2>Resume </h2>
    <P><strong>Profile Picture:</strong> <img src="${profilePictureURL}" alt="Profile Picture" width="100" height="100"> </p>
    <p>Name:</strong> <span id="edit-name" class="editable">${name} </span></p>
    <p>Email:</strong>  <span id="edit-email" class="editable">${email} </span> </p>
    <p>Phone:</strong>  <span id="edit-phone" class="editable">${phone} </span> </p>

    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>
    
    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>

    <h3>Skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>

    ` ;

    const downloadlink = document.createElement('a')
    downloadlink.href = 'data: text/html;charset-utf-8,' + encodeURIComponent(resumeOutput)
    downloadlink.download = uniquePath;
    downloadlink.textContent = "Download Resume";





    //display resume output
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement){
           resumeOutputElement.innerHTML = resumeOutput;

        resumeOutputElement.appendChild(downloadlink);
        

        
      makeEditable(); 

        resumeOutputElement.appendChild(downloadlink);




        }

    } else{
        console.error("Error: One or more required fields are missing.")
    }

}

):'';

document.getElementById('save-pdf')?.addEventListener('click', () => {
    window.print();  
});

document.getElementById('share-resume')?.addEventListener('click', () => {
    const shareData = {
        title: 'Resume',
        text: 'Check out my resume!',
        url: window.location.href 
    };
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Resume shared successfully!'))
            .catch((error) => console.error('Error sharing the resume:', error));
    } else {
        alert('Web Share API is not supported in your browser.');
    }
});


function makeEditable() {
    
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {

        const currentElement = element as HTMLElement;
        const currentValue = currentElement.textContent || ``; 

        //replacing 
        if (currentElement.tagName === "p" || currentElement.tagName === "SPAN"){

            const editLink = document.createElement('input');
            editLink.type = "text";
            editLink.value = currentValue;
            editLink.classList.add("edit-link");



            editLink.addEventListener('blur', function (){
            
                currentElement.textContent = editLink.value;
                currentElement.style.display = "block";
                editLink.remove()




            })
            currentElement.style.display = "none";
            currentElement.parentNode?.insertBefore(editLink, currentElement);
            editLink.focus();




        }



    })
}
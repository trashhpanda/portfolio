document.addEventListener("DOMContentLoaded", function() {
    insertBio();
});

function insertBio() {
    fetch('../content/about.json')
            .then(response => response.json())
            .then(data => {
                console.log("xx");
                const nameElement = document.getElementById('name');
                const bioElement = document.getElementById('bio');

                nameElement.innerHTML = data.name;
                bioElement.innerHTML = data.bio;
            });
}

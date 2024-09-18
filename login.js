function login() {
    // Retrieve username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username and password
    if (username === "your_username" && password === "your_username") {
        // Redirect to the main page (index.html) after successful login
        localStorage.setItem('username', username);
        window.location.href = "index.html";
        return false; // Prevent the form from submitting
    } else {
        // Display an error message
        alert("Invalid username or password. Please try again.");
        return false; // Prevent the form from submitting
    }
}

function addObstacle(latlng, name) {
    const obstacle = L.circle(latlng, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 2.13 // 7 feet in meters
    }).addTo(obstacleLayer);

    obstacles.push({ latlng, name });
    localStorage.setItem('obstacles', JSON.stringify(obstacles));
    updateObstacleList();
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    login();
});



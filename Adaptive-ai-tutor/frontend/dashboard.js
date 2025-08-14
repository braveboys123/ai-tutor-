// Protect page: if no login token/email, redirect to login
document.addEventListener("DOMContentLoaded", () => {
    const userEmail = sessionStorage.getItem('userEmail');
    if (!userEmail) {
        window.location.href = "index.html";
        return;
    }

    // Show user's email in welcome area
    document.getElementById("userName").innerText = `Welcome, ${userEmail}`;

    // Sample categories and tiles (could come from backend)
    const categories = [
        "IIT JEE", "NEET", "UPSC", "GATE", "Bank Exams", "SSC", "Graduation", "BTech"
    ];
    const goals = [
        "IIT JEE Advanced", "NEET UG", "UPSC CSE GS", "GATE", 
        "Bank PO", "SSC CGL", "BSc Computer Science", "BTech Computer Science"
    ];

    // Populate sidebar
    const sidebar = document.getElementById("sidebarList");
    categories.forEach(cat => {
        const li = document.createElement("li");
        li.innerText = cat;
        li.addEventListener("click", () => filterTiles(cat));
        sidebar.appendChild(li);
    });

    // Populate tiles
    const tilesContainer = document.getElementById("tilesContainer");
    function renderTiles(filter = "") {
        tilesContainer.innerHTML = "";
        goals
            .filter(goal => goal.toLowerCase().includes(filter.toLowerCase()))
            .forEach(goal => {
                const div = document.createElement("div");
                div.classList.add("tile");
                div.innerText = goal;
                div.addEventListener("click", () => {
                    alert(`Starting: ${goal}`);
                    // Here you can redirect to exam page e.g.
                    // window.location.href = `exam.html?goal=${encodeURIComponent(goal)}`;
                });
                tilesContainer.appendChild(div);
            });
    }
    renderTiles();

    // Filter tiles via search
    document.getElementById("searchInput").addEventListener("input", (e) => {
        renderTiles(e.target.value);
    });

    // Filter tiles when clicking sidebar
    function filterTiles(category) {
        renderTiles(category);
    }

    // Logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "index.html";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const userEmail = sessionStorage.getItem('userEmail');
    if (!userEmail) {
        // Agar login ke bina aaya to login page bhejo
        window.location.href = "index.html";
        return;
    }

    // Profile name/email set karo
    document.querySelector(".profile span").innerText = userEmail;
});

const searchInput = document.querySelector(".search-box");
    const rows = document.querySelectorAll("tbody tr");
    const notFoundMsg = document.getElementById("notFoundMsg");
    
    searchInput.addEventListener("keyup", function () {
        let searchValue = this.value.toLowerCase();
        let found = false;
    
        rows.forEach(row => {
            let text = row.innerText.toLowerCase();
    
            if (text.includes(searchValue) && searchValue !== "") {
                row.style.display = "";
                row.style.backgroundColor = "#ffe082";
                found = true;
            } else {
                row.style.display = "none";
            }
        });
    
        // If empty input → show all rows
        if (searchValue === "") {
            rows.forEach(row => {
                row.style.display = "";
                row.style.backgroundColor = "";
            });
            notFoundMsg.style.display = "none";
            return;
        }
    
        // Show message if no match
        if (!found) {
            notFoundMsg.style.display = "block";
        } else {
            notFoundMsg.style.display = "none";
        }
    });
function collage(id) {
    // Local Variables
    let width = window.innerWidth,
        landing = document.querySelector(".landing"),
        landingText = document.querySelector(".landing-text"),
        landingTitle = document.querySelector(".landing .title"),
        landingTitleId = document.getElementById("title"),
        landingImg = document.getElementById("title-img"),
        landingDes = document.querySelector(".landing p"),
        landingDes2 = document.getElementById("sub"),
        landingTrans = "background-color 0.15s, color 0.15s, fitler 0.15s",
        landingTransFunc = "cubic-bezier(0, 0, 0, 1)",
        collages = document.querySelector(".collages-grid ul"),
        imgPath = "IMG/Collages/",
        title = document.querySelector("title"),
        cat = document.querySelector(".collages .filter"),
        catSwitch = document.querySelectorAll(".collages .filter li");

    // Title
    title.textContent = `طموح | ${uni[id]["name"]}`;

    // Styling
    landingDes2.style.transition = landingTrans;
    landingDes2.style.transitionTimingFunction = landingTransFunc;
    landingImg.style.transition = landingTrans;
    landingImg.style.transitionTimingFunction = landingTransFunc;
    landingText.style.bottom = "0";
    landingText.style.transform = "translateY(-60%)";
    if (width < 768) {
        landing.style.height = "calc(100vh + 300px)";
    } else {
        landing.style.height = "calc(100vh + 20px)";
        landingText.style.transform = "translateY(-15%)";
    }

    // ================================
    // ===== Dealing With Landing =====
    // ================================
    landing.style.backgroundImage = `url(${uni[id]["img"]})`;
    landingImg.setAttribute("src", uni[id]["logo1"]);
    landingTitle.style.backgroundColor = uni[id]["color1"];
    // Logo
    landingTitleId.onmouseenter = function () {
        landingTitle.style.backgroundColor = uni[id]["color2"];
        landingImg.setAttribute("src", uni[id]["logo2"]);
    };
    landingTitleId.onmouseleave = function () {
        landingTitle.style.backgroundColor = uni[id]["color1"];
        landingImg.setAttribute("src", uni[id]["logo1"]);
    };
    // Description
    landingDes2.onmouseenter = function () {
        landingDes2.style.backgroundColor = "rgba(255, 255, 255, 0.66)";
        landingDes2.style.color = "var(--primary-color)";
    };
    landingDes2.onmouseleave = function () {
        landingDes2.style.backgroundColor = "var(--primary-transparent-color)";
        landingDes2.style.color = "white";
    };
    landingDes.textContent = uni[id]["description"];

    // ===============================
    // ======== Collages Grid ========
    // ===============================

    for (let i = 0; i < uni[id]["collage"].length; i++) {
        // Collage Variables
        let collage = document.createElement("li"),
            collageLogo = document.createElement("i"),
            collageName = document.createElement("h3"),
            logo = uni[id]["collage"][i][1].split(" "),
            a = document.createElement("a");

        // Creating li Collage
        if (uni[id]["collage"][i][0] === "التطبيقية") {
            collageName.textContent = `الكلية ${uni[id]["collage"][i][0]}`;
        } else {
            collageName.textContent = `كلية ${uni[id]["collage"][i][0]}`;
        }
        collageLogo.className = logo;
        collageLogo.className = collageLogo.className.replace(",", " ");
        a.appendChild(document.createElement("span"));
        a.appendChild(collageLogo);
        a.appendChild(collageName);
        a.setAttribute("href", "");
        collage.appendChild(a);
        collage.style.backgroundImage = `url(${imgPath}${uni[id]["collage"][i][2]})`;
        collages.appendChild(collage);

        // Check Filter Exists
        if (typeof cat != "undefined" && cat != "null") {
            // Add Classes
            collage.classList.add("all");
            collage.classList.add(uni[id]["collage"][i][3]);
            // Filtering
            catSwitch.forEach((li) => {
                li.addEventListener("click", removeActive);
                li.addEventListener("click", ManageCollages);
            });
            // Functions
            function removeActive() {
                catSwitch.forEach((li) => {
                    li.classList.remove("active");
                    this.classList.add("active");
                });
            }
            let col = Array.from(collages.children);
            function ManageCollages() {
                col.forEach((li) => {
                    li.style.display = "none";
                });
                document.querySelectorAll(this.dataset.track).forEach((col) => {
                    col.style.display = "block";
                });
            }
        }
    }
}

collage(document.body.id);

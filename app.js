function showSection(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Example otter data
const otters = [
    {
        name: "Willow",
        region: "UK",
        status: "Active",
        lastSeen: "River Wey, Surrey",
        img: "assets/otters/otter1.jpg"
    },
    {
        name: "Hudson",
        region: "Canada",
        status: "Resting",
        lastSeen: "Lake Ontario",
        img: "assets/otters/otter2.jpg"
    },
    {
        name: "Fern",
        region: "UK",
        status: "Active",
        lastSeen: "River Test, Hampshire",
        img: "assets/otters/otter3.jpg"
    }
];

const researchers = [
    "Sarah Bennett – UK Field Researcher",
    "Tom Hughes – UK Data Analyst",
    "Emily Chen – Canada Field Researcher",
    "Daniel Roy – Canada Sensor Technician"
];

// Populate otter cards
const otterList = document.getElementById("otterList");
otters.forEach(o => {
    const card = document.createElement("div");
    card.className = "otter-card";
    card.innerHTML = `
        <img src="${o.img}" alt="${o.name}">
        <h3>${o.name}</h3>
        <p><strong>Region:</strong> ${o.region}</p>
        <p><strong>Status:</strong> ${o.status}</p>
        <p><strong>Last Seen:</strong> ${o.lastSeen}</p>
    `;
    otterList.appendChild(card);
});

// Populate research team
const researchList = document.getElementById("researchList");
researchers.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    researchList.appendChild(li);
});

// Overview stats
document.getElementById("otterCount").textContent = otters.length;

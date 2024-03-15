const invites = document.querySelector("#invites");
const output = document.querySelector(".invites_output");

output.textContent = invites.value;

invites.addEventListener("input", () => {
    output.textContent = invites.value;
});
import "./styles.css";

let input = document.getElementById("inputId");
document.getElementById("submitBtn").addEventListener("submit", handlesubmit);

function handlesubmit() {
    confirm("Email sent successfully!");
}
document.getElementById("button").onclick = function() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const answer = document.getElementById("answer");
    if(num1 && num2) {
        answer.textContent = "Loading";
        var formData = new FormData();
        formData.append("num1", num1);
        formData.append("num2", num2);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "test.php", true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                answer.textContent = "Answer: " + response;
            }
        }
        xhr.send(formData);
    } else {
        alert("Please fill up both fields.");
    }
}
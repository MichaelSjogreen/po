// Crea la función addUser()
function addUser() {
  // Obtén el valor del usuario con id player1_name_input y player2_name_input
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player2_name", player2_name);


  window.location = "game_page_html";
}
  // Almacena los valores en el almacenamiento local
 //Asigna "game_page.html" a window.location



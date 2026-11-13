// users.js
// Gère les utilisateurs autorisés (identifiants)
// Tu peux ajouter/modifier ici les comptes

const users = [
  { username: "admin", password: "white.2674" },
  { username: "LS Custom", password: "LSC3212" },
  { username: "Auto Exotic", password: "AE6047" },
  { username: "South Side Custom", password: "SSC6208" },
  { username: "Flywheels", password: "FWL5032" },
  { username: "LTD Grove Street", password: "GS9412" },
  { username: "LTDLittle Seoul", password: "LS7320" },
  { username: "LTD Grapeseed", password: "G6107" },
  { username: "LTD Paleto", password: "P7296" },
  { username: "Davis Quartz", password: "DQ7132" },
  { username: "Docktease", password: "DBATEAU9212" },  
];

// Fonction pour vérifier les identifiants
function checkUser(username, password) {
  return users.some(
    (u) => u.username === username && u.password === password
  );
}

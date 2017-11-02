const fs = require('fs');
const os = require('os');

const EOL = os.EOL;
let contents = '';
let namespace = '';

function Template(namespace, skill) {
  return `EVENT Projectile_${namespace}_${skill}${EOL}ON${EOL}\tOnFunction("Projectile_${namespace}_${skill}")${EOL}ACTIONS${EOL}\tSet(%ASC_DamageSkill, Projectile_${namespace}_${skill})${EOL}${EOL}`;
}

process.argv.forEach(function (val, index) {
  if (index < 2) return;
  if (index === 2) {
    namespace = val;
    return;
  }

  contents += Template(namespace, val);
});

fs.writeFile('./template.txt', contents, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log('The file was saved!');
}); 

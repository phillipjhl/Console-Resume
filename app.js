

function displayPosition(name, title, description) {
    console.log('* '+ title +' at '+ name + ' - ' + description);
} 

function displaySkill(name, cool) {
    let coolFactor = cool;
    if (coolFactor > 0) {
        console.log('* BAM: ' + name);
    }
    else {
        console.log('* ' + name);
    }
}
let name = 'phillip langland'
console.log('RESUME')
console.log('```````````````````````');
console.log('NAME: ' + name.toUpperCase());
console.log('Career: Front-End Developer');
console.log('Description: I have a two year old daughter');
console.log('');
console.log('My Interests:');
console.log('* Formula One Racing');
console.log('* Liverpool F.C.');
console.log('* Model Building');
console.log('* Video Games')
console.log('');
console.log('My Previous Experience:');
displayPosition('Made up job', 'Title', 'Was super awesome')
displayPosition('Another made up job', 'Position', 'Was even more awesome');
displayPosition('Another Job', 'Title', 'was amazing');
console.log('');
displaySkill('College Nationals Ultimate Player', 1);
displaySkill('Python', 0);
displaySkill('Javascript', 0);
displaySkill('HTML / CSS', 0);
displaySkill('mySQL', 1);
console.log('```````````````````````');

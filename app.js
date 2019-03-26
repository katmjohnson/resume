let name="Kat Johnson";

console.log("Name:  " + name.toUpperCase());
console.log("Career: Events Coordinator/Covalence Student");
console.log("Description: smiley, open minded, and still obsessed w/ Rachel Green.");

console.log("\n");
console.log("Interests: ");
console.log(" * Playing saxaphone");
console.log(" * Reading");
console.log(" * Gaming");
console.log(" * Working Out");
console.log(" * Learning skillz");

function displayPos(companyName, jobTitle, description) {
    console.log("* " + jobTitle + " at" + companyName + " -" + description);
}

console.log("\n");
console.log("Previous Experience:");
displayPos(" Auburn University", " Math Tutor", " Showed students proper functions and formulas.");
displayPos(" Basden Eye Care", " Tech Assistant"," Observed medications, ran tests, and filled out medical charts.");
displayPos(" ARC"," Events Coordinator", " host and plan conferences and other events.");

function displaySkill(skill,soundsCool) {
    if (soundsCool===true) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}

console.log("\n");
console.log("My Skills: ");
displaySkill("Some French",false);
displaySkill("Saxaphone",true);
displaySkill("Plans party for 6,000",true);
displaySkill("Learning JavaScript",false);

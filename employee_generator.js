const gender = ['male', 'female'];
const workload = [10, 20, 30, 40] 
const femaleFirstNames = [
    "Adriana", "Alena", "Alexandra", "Alice", "Amelia",
    "Barbora", "Blanka", "Dagmar", "Dominika", "Elena",
    "Eliška", "Emília", "Eva", "Gabriela", "Hana",
    "Helena", "Irena", "Jana", "Jaroslava", "Jarmila",
    "Kamila", "Karolína", "Katarína", "Klára", "Kristína",
    "Lenka", "Linda", "Lucia", "Ludmila", "Magdaléna",
    "Mária", "Marie", "Markéta", "Martina", "Michaela",
    "Monika", "Natalie", "Nela", "Nikola", "Olga",
    "Patrícia", "Petra", "Radka", "Renáta", "Simona",
    "Soňa", "Veronika", "Zuzana"
  ];
  const maleFirstNames = [
    "Adam", "Aleš", "Alexandr", "Alois", "Andrej",
    "Anton", "Bohumil", "Bohuslav", "Branislav", "David",
    "Dominik", "Dušan", "Emil", "Filip", "František",
    "Gabriel", "Jakub", "Ján", "Jaromír", "Jaroslav",
    "Jiří", "Josef", "Juraj", "Karel", "Karol",
    "Ladislav", "Lukáš", "Marek", "Martin", "Matúš",
    "Michal", "Milan", "Ondrej", "Patrik", "Pavel",
    "Peter", "Radim", "Radek", "Richard", "Robert",
    "Roman", "Šimon", "Stanislav", "Tomáš", "Václav",
    "Viktor", "Vladimír", "Zdeněk"
  ];
const femaleSurnames = [
    "Nováková", "Svobodová", "Dvořáková", "Černá", "Procházková",
    "Kučerová", "Marešová", "Šimková", "Havlová", "Lišková",
    "Králová", "Němcová", "Pospíšilová", "Machová", "Říhová",
    "Benešová", "Horáková", "Konečná", "Malá", "Tomášová",
    "Kolářová", "Fialová", "Veselá", "Urbanová", "Zemanová",
    "Kovaříková", "Holubová", "Štěpánová", "Vlčková", "Křížová",
    "Káňová", "Hrušková", "Novotná", "Dubová", "Kočová",
    "Richterová", "Sýkorová", "Petrášová", "Žáková", "Kudláčková",
    "Jelínková", "Vojtová", "Blažková", "Šťastná", "Mikulášová",
    "Moravcová", "Kratochvílová"
  ];
  const maleSurnames = [
    "Novák", "Svoboda", "Dvořák", "Černý", "Procházka",
    "Kučera", "Mareš", "Šimek", "Havel", "Liška",
    "Kráľ", "Němec", "Pospíšil", "Mach", "Říha",
    "Beneš", "Horák", "Konečný", "Malý", "Tomáš",
    "Kolář", "Fiala", "Veselý", "Urban", "Zeman",
    "Kovařík", "Holub", "Štěpánek", "Vlček", "Kříž",
    "Káňa", "Hruška", "Novotný", "Dub", "Koč",
    "Richter", "Sýkora", "Petráš", "Žák", "Kudláček",
    "Jelínek", "Vojta", "Blážek", "Šťastný", "Mikuláš",
    "Moravec", "Kratochvíl"
  ]; 

  
  function getRandomBirthdate(minAge, maxAge) {
    const today = new Date();
    const minBirthdate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
    const maxBirthdate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  
    const randomBirthdate = new Date(
      minBirthdate.getTime() + Math.random() * (maxBirthdate.getTime() - minBirthdate.getTime())
    );
  
    return randomBirthdate;
  }

function main(dtoIn) {
  const dtoOut = [];

  for (let i = 0; i < dtoIn.count; i++) {
    const randomGender = gender[Math.floor(Math.random() * gender.length)];
    const randomWorkload = workload[Math.floor(Math.random() * workload.length)];
  
    let firstName, lastName;
  
    if (randomGender === "male") {
      firstName = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
      lastName = maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
    } else {
      firstName = femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
      lastName = femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
    }
  
    const randomBirthdate = getRandomBirthdate(dtoIn.age.min, dtoIn.age.max);

    const employee = {
      gender: randomGender,
      birthdate: randomBirthdate,
      name: firstName,
      surname: lastName,
      workload: randomWorkload
     };

    dtoOut.push(employee);
  }

  return dtoOut;
}

// Example usage:
const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35
  }
};

const result = main(dtoIn);
console.log(JSON.stringify(result, null, 2));
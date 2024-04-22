function introduction(name) {
  return `Hi, my name is ${name}.`;
}

console.log(introduction("Ahmad"));

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Ahmad", "JavaScript"));

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Ahmad"));

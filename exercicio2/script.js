const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const stringSemEspaços = minhaString.trim()
const qtdeCaracteresAntes = minhaString.length
const qtdeCaracteresDepois = stringSemEspaços.length
const substituicao = minhaString.replace("________", "sticioso")

console.log(`a) ${stringSemEspaços}
b) Antes: ${qtdeCaracteresAntes}
   Depois: ${qtdeCaracteresDepois}
c) ${substituicao}`)
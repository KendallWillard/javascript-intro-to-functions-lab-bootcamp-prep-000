function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandMa(string) {
  var strcpy = string.toUpperCase();
  if(strcpy === string) {
    return "YES INDEED"
  }
  strcpy = string.toLowerCase()
  if(strcpy === string) {
    return "I can\'t hear you!"
  }
}
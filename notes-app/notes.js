const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) =>{
  const notes = loadNotes()
  const duplicateNote = notes.find((note)=>note.title === title)

  if(!duplicateNote)
  {
    notes.push({
        title: title,
        body: body,
    })
    saveNotes(notes)
    console.log(chalk.green.inverse("New note added!"))
  }
  else{
    console.log(chalk.red.inverse("Note title taken"))
  }
}
const removeNote =(title)=>{
  const notes = loadNotes()
  const notesToKeep = notes.filter((note)=> note.title!==title)
  if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse("Note Removed"))
    saveNotes(notesToKeep)
  }
  else{
    console.log(chalk.red.inverse("No Note found"))
  }
}
const listNotes = ()=>{
  const notes = loadNotes()
  console.log(chalk.inverse("Your Notes!!"))
  notes.forEach((note)=>console.log(note.title+" "+note.body+"\n"))
}
const readNote = (title)=>{
  const notes = loadNotes()
  const findNote = notes.find((note)=>note.title === title)
  if(findNote) {console.log(chalk.inverse(findNote.title)+" "+findNote.body)}
  else {console.log(chalk.red.inverse("No Note found"))}
}
const saveNotes = (notes)=>{
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}
module.exports = {
    getnotes: getnotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}
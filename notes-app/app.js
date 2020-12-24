const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yarg commands
yargs.version('1.1.0')

// add,remove,list,read

// Creating a add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// Creating a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Creating a list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler() {
       notes.listNotes()
    }
})

// Creating a read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)
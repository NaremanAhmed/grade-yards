const yargs = require('yargs')
const grades = require('./grades')
// /add
yargs.command({
    command:'add',
    describe:'add student data',
    builder:{
        id:{
            describe:'This is ID of student ... ',
            type:'number',
            demandOption:true
        },
        name:{
            describe:'This is Name of student',
            type:'string',
            demandOption:true
        },
        subject:{
            describe:'This is Subject of student grade',
            type:'string',
            demandOption:true
        },
        grade:{
            describe:'This is Student Grade',
            type:'number',
            demandOption:true
        },
        comment:{
            describe:'please write your comment if you have',
            type:'string'
        }
    },
    handler:(argv)=>{
        grades.addGrade(argv.id,argv.name,argv.subject,argv.grade,argv.comment)
    }
})
// /list
yargs.command({
    command:'list',
    describe:'list all student data',
    handler:()=>{
        grades.listGrade()
    }
})
// /read
yargs.command({
    command:'read',
    describe:'read student data',
    builder:{
        id:{
            describe:'This is ID of student ... ',
            type:'number',
            demandOption:true
        }
    },
    handler:(argv)=>{
        grades.readGrade(argv.id)
    }
})
// /delete
yargs.command({
    command:'delete',
    describe:'delete student data',
    builder:{
        id:{
            describe:'This is ID of student ... ',
            type:'number',
            demandOption:true
        }
    },
    handler:(argv)=>{
        grades.removeGrade(argv.id)
    }
})
// /end
yargs.parse()
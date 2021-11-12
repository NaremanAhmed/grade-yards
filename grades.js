const fs = require('fs')
// /add
const addGrade = (id, name, subject, grade, comment) => {
    const grades = loadGrade()
    const duplicateID = grades.filter((gradeData) => {
        return gradeData.id === id
    })
    console.log(duplicateID)
    if (duplicateID.length === 0) {
        grades.push({
            id: id,
            name: name,
            subject: subject,
            grade: grade,
            comment: comment
        })
        saveGrades(grades)
        console.log('Saved Successfully')
    }
    else {
        console.log('Error Duplicate ID')
    }

}
// /load
const loadGrade =() =>{
    try{
        const dataBuffer = fs.readFileSync('grades.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}
// /save
const saveGrades =(grades) =>{
    const information = JSON.stringify(grades)  // [{"title":'aaa',"body":'aasd'},{"title":'titl2',"body":'body2'}]
    fs.writeFileSync('grades.json',information)
}
// /remove
const removeGrade = (id) =>{
    const grades = loadGrade()
    const gradesToKeep = grades.filter((gradeData)=>{
        return gradeData.id !== id
    })
    saveGrades(gradesToKeep)
    console.log('Removed')
}
// /read
const readGrade = (id) => {
    var grades = loadGrade()
    const gradesToView = grades.find((gradesData) => {
        return gradesData.id === id
    })
    if (gradesToView) {
        console.log('Id: ' + gradesToView.id)
        console.log('Name: ' + gradesToView.name+'  ||  '+'Subject: ' + gradesToView.subject+'  ||  '+'Grade: ' + gradesToView.grade)
        if (gradesToView.comment){
            console.log('Comments: ' + gradesToView.comment)
        }else {
            console.log('Comment: No Comments')
        }
        console.log('------------------------------------')
        console.log(' ')
    } else {
        console.log('Not found ..Try Again?!')
    }
}

// /list
const listGrade = () =>{
    const grades = loadGrade()
    grades.forEach((gradeData)=>{
        console.log(gradeData.id+'  ||  '+'The name of student is '+gradeData.name+'  ||  '+'The grade is '+gradeData.grade)
        console.log('------------------------------------')
        console.log(' ')
    })
}


// /for app.js
module.exports = {
    addGrade,
    removeGrade,
    readGrade,
    listGrade
}



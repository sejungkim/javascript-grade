const readline = require('readline');

var data = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertGrade(currGrade) {
    var grade = 'FDCBA';
    var score = grade.indexOf(currGrade[0]);
    if(grade[1] === '+' && score !== 0){
        score += 0.5;
    }
    return score;
}

function calculateGradepoint(data) {
    var creditSum = 0 , creditGradeSum = 0;
    var majorCreditSum = 0 , majorCreditGradeSum = 0;
    var gpa = 0,majorGpa = 0;
    var convertGpa = 0;

    data.forEach(function (curr) {
        creditSum += curr.credit;
        creditGradeSum += convertGrade(curr.grade)*curr.credit;
        if(curr.bMajor){
            if(curr.bMajor)
            majorCreditSum += convertGrade(curr.grade);
            majorCreditGradeSum += convertGrade(curr.grade)*curr.credit;
        }
    });

    gpa = (creditGradeSum/creditSum).toFixed(2);
    majorGpa = (majorCreditGradeSum/majorCreditSum).toFixed(2);
    convertGpa = ((creditGradeSum/creditSum) * 4 / 4.5).toFixed(2);

    console.log('총평점 : ' + gpa);
    console.log('전공평점 : ' + majorGpa);
    console.log('이수학점 : ' + creditSum);
    console.log('전공이수학점 : ' + majorCreditSum);
    console.log('4.0으로 변환시 : ' + convertGpa);

}

function addLecture() {
    rl.question('과목을 JSON형태로 입력하세요<종료는 end입력>',function(answer){
        if(answer === 'end'){
            setTimeout(function () {
                calculateGradepoint(data);
            },2000);
            return rl.close();
        }

        data.push(JSON.parse(answer));
        addLecture();
    });

}addLecture();
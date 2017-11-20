var data =  [
    {
        'name' : '데이터베이스',
        'grade' : 'A',
        'credit' : 3,
        'major' : true
    },
    {
        'name' : '교양영어',
        'grade' : 'B+',
        'credit' : 2,
        'major' : false
    },
    {
        'name' : '철학',
        'grade' : 'B+',
        'credit' : 1,
        'major' : false
    },
    {
        'name' : '미디어아트개론',
        'grade' : 'A+',
        'credit' : 3,
        'major' : true
    },
    {
        'name' : '디자인론',
        'grade' : 'B+',
        'credit' : 3,
        'major' : true
    },
    {
        'name' : '그래픽디자인및실습',
        'grade' : 'C+',
        'credit' : 3,
        'major' : true
    }

];

var grades= [];
var creditSum = 0;

function calculateGpa(percentile) {
    grades = [];
    convertGrade(percentile);

    var gpMultiple = 0;
    var gpSum = 0;

    for(var i=0; i<data.length; i++) {
        gpMultiple += (data[i].credit) * (grades[i]);
        gpSum += data[i].credit;
    }

    creditSum = gpSum;
    var res = (gpMultiple / gpSum).toFixed(2);

    return res;
}

function convertGrade(percentile) {
    for(var i=0; i<data.length; i++){
        var grade = data[i].grade;
        switch(grade){
            case 'A+': grades.push(percentile);
                break;
            case 'A': grades.push(percentile-0.5);
                break;
            case 'B+': grades.push(percentile-1);
                break;
            case 'B': grades.push(percentile-1.5);
                break;
            case 'C+': grades.push(percentile-2.0);
                break;
            case 'C': grades.push(percentile-2.5);
                break;
            case 'F': grades.push(0);
                break;
        }
    }
}

function calculateMajor() {
    var gpMultiple = 0;
    var gpSum = 0;

    for(var i=0; i<data.length; i++){
        if(data[i].major){
            gpMultiple += (data[i].credit) * grades[i];
            gpSum += data[i].credit;
        }
    }
    var majorResult = (gpMultiple / gpSum).toFixed(2);
    return majorResult;
}

(function() {
    var result = calculateGpa(4.5);
    var majorResult = calculateMajor();
    var convertResult = calculateGpa(4.0);

    console.log('총평점:'+ result);
    console.log('전공평점:'+ majorResult);
    console.log('이수학점:'+ creditSum);
    console.log('4.0 학점으로 변환하는 경우 총평점은: '+ convertResult);
})();
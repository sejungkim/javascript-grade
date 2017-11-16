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


function convertCredits() {
    for(var i=0; i<data.length; i++){
        var credits = data[i].grade;
        switch(credits){
            case 'A+': data[i].grade = 4.5;
                break;
            case 'A': data[i].grade = 4.0;
                break;
            case 'B+': data[i].grade = 3.5;
                break;
            case 'B': data[i].grade = 3.0;
                break;
            case 'C+': data[i].grade = 2.5;
                break;
            case 'C': data[i].grade = 2.0;
                break;
            case 'F': data[i].grade = 0;
                break;
        }
    }
}convertCredits();

function calculateGpa() {
    var gpMultiple = 0;
    var gpSum = 0;

    for(var i=0; i<data.length; i++) {
        gpMultiple += (data[i].credit) * (data[i].grade);
        gpSum += data[i].credit;
    }

    var result = (gpMultiple / gpSum).toFixed(2);
    var majorResult = calculateMajor();

    console.log('총평점:'+ result);
    console.log('전공평점:'+ majorResult);
    console.log('이수학점:'+ gpSum);


}calculateGpa();


function calculateMajor() {
    var gpMultiple = 0;
    var gpSum = 0;

    for(var i=0; i<data.length; i++){
        if(data[i].major){
            gpMultiple += (data[i].credit) * (data[i].grade);
            gpSum += data[i].credit;
        }

        var majorResult = (gpMultiple / gpSum).toFixed(2);
    }

    return majorResult;
}
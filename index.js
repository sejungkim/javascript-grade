var gpaArr = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2], ['미디어아트개론','A',3]];
var creditsArr = [];
var gpArr = [];

function setScoreArray() {
    for(var i=0; i<gpaArr.length; i++) {
            creditsArr.push(gpaArr[i][1]);
            gpArr.push(gpaArr[i][2]);
    }
}setScoreArray();

function convertCredits() {
    for(var i=0; i<creditsArr.length; i++){
        var credits = creditsArr[i];
        switch(credits){
            case 'A+': creditsArr[i] = 4.5;
                break;
            case 'A': creditsArr[i] = 4.0;
                break;
            case 'B+': creditsArr[i] = 3.5;
                break;
            case 'B': creditsArr[i] = 3.0;
                break;
            case 'C+': creditsArr[i] = 2.5;
                break;
            case 'C': creditsArr[i] = 2.0;
                break;
            case 'F': creditsArr[i] = 0;
                break;
        }
    }
}convertCredits();

function calculateGpa() {
    var gpMultiple = 0;
    var gpSum = 0;

    for(var i=0; i<gpaArr.length; i++) {
        gpMultiple += gpArr[i] * creditsArr[i];
        gpSum += gpArr[i];
    }

    var result = gpMultiple / gpSum;
    console.log('당신의 총학점은 :'+ result);
}calculateGpa();





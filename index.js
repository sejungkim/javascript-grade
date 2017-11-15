var gpaArr = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2], ['미디어아트개론','A',3]];
var creditsArr = [];
var gpArr = [];

function setScoreArray() {
    for(var i=0; i<gpaArr.length; i++) {
        for (var j = 0; j < gpaArr[0].length; j++) {
            creditsArr.push(arr[i][j]);
            gpArr.push(gpaArr[i][j]);
        }
    }
}

function convertCredits() {
    for(var i=0; i<creditArr; i++){
        var credits = creditArr[i];
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
}

function calculateGpa() {
    var gpSum = 0;
    var creditsSum = 0;
    for(var i=0; i<gpaArr.length; i++){
        gpSum += gpArr[i]*creditsArr[i];
        creditsSum += creditsArr[i];
    }

    console.log(creditsSum);
    var result = gpSum / creditsSum;
    console.log('당신의 총학점은 :'+ result);
}



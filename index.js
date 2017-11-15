var gpaArr = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2], ['미디어아트개론','A',3]];
var creditsArr = [];
var gpArr = [];

function setScoreArray(arr) {
    for(var i=0; i<gpaArr.length; i++) {
        for (var j = 0; j < gpaArr[0].length; j++) {
            creditsArr.push(arr[i][j]);
            gpArr.push(arr[i][j]);
        }
    }
}
function getTotalCredit(gradeDataArr) {

  const totalCredit = gradeDataArr.reduce(function (sum, arr) {
    const credit = arr[2];
    sum += credit;
    return sum;
  }, 0);
  return totalCredit;
}

function getScoreFromGrade(grade) {
  const gradeMap = ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'];
  const scoreMap45 = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0];

  const score = scoreMap45[gradeMap.indexOf(grade)];
  return score;
}

function getGPA(gradeDataArr, totalCredit) {

  const sumOfGrade = gradeDataArr.reduce(function (sum, arr) {
    const grade = arr[1];
    const score = getScoreFromGrade(grade);
    const credit = arr[2];
    sum += (score * credit);
    return sum;
  }, 0);

  const GPA = (sumOfGrade / totalCredit).toFixed(2);
  return GPA;
}

function showGrade(gradeDataArr) {
  const totalCredit = getTotalCredit(gradeDataArr);
  const GPA = getGPA(gradeDataArr, totalCredit);
  const resultMsg = `총 평점 ${GPA}, 이수학점 ${totalCredit}`;

  return resultMsg;
}

const data = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]];
console.log(showGrade(data));
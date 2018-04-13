function getTotalCredit(gradeDataArr) {

  const totalCredit = gradeDataArr.reduce(function (sum, arr) {
    const credit = arr[2];
    sum += credit;
    return sum;
  }, 0);
  return totalCredit;
}

function getScoreFromGrade(grade) {
  const gradeMap = {
    'A+': 4.5,
    'A': 4.0,
    'B+': 3.5,
    'B': 3.0,
    'C+': 2.5,
    'C': 2.0,
    'D+': 1.5,
    'D': 1.0,
    'F': 0
  }
  const score = gradeMap[grade];
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
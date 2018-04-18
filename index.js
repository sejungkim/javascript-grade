'use strict';

const data = [
  {
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3,
    'major': true
  },
  {
    'name': '교양영어',
    'grade': 'B',
    'credit': 2,
    'major': false
  },
  {
    'name': '철학',
    'grade': 'C',
    'credit': 1,
    'major': false
  },
  {
    'name': '운영체제',
    'grade': 'B+',
    'credit': 3,
    'major': true
  },
  {
    'name': '알고리즘',
    'grade': 'A+',
    'credit': 3,
    'major': true
  }
];

const gradePointMap = {
  'A+': 4.5,
  'A': 4.0,
  'B+': 3.5,
  'B': 3.0,
  'C+': 2.5,
  'C': 2.0,
  'D+': 1.5,
  'D': 1.0,
  'F': 0
};

function getTotalCredit(gradeDataList) {

  const totalCredit = gradeDataList.reduce(
    (creditSum, gradeData) => creditSum + gradeData.credit,
    0
  );
  return totalCredit;
}

function getGPA(gradeDataList, totalCredit) {

  const totalGradePoint = gradeDataList.reduce((gradeSum, gradeData) => {
    const gradePoint = gradePointMap[gradeData.grade];
    gradeSum += (gradePoint * gradeData.credit);
    return gradeSum;
  }, 0);

  const GPA = (totalGradePoint / totalCredit).toFixed(2);
  return GPA;
}

function getMajorDataList(gradeDataList) {
  const majorDataList = gradeDataList.filter(
    gradeData => gradeData.major === true
  );
  return majorDataList;
}

function showGrade(gradeDataList) {
  // Total
  const totalCredit = getTotalCredit(gradeDataList);
  const GPA = getGPA(gradeDataList, totalCredit);

  // Major
  const majorDataList = getMajorDataList(gradeDataList);
  const majorTotalCredit = getTotalCredit(majorDataList);
  const majorGPA = getGPA(majorDataList, majorTotalCredit);

  const resultMsg = `총 평점 ${GPA}, 전공평점 ${majorGPA}, `
    + `이수학점 ${totalCredit}, 전공이수학점 ${majorTotalCredit}`;

  return resultMsg;
}

console.log(showGrade(data));
// 총 평점 3.67, 전공평점 4.00, 이수학점 12, 전공이수학점 9
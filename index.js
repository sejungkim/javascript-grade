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
    gradeData => gradeData.major
  );
  return majorDataList;
}

function convertGPA(GPA, { stdScore }) {
  const originStd = gradePointMap['A+'];
  const convertedGPA = (GPA * stdScore / originStd).toFixed(2);
  return convertedGPA;
}

function addLecture(gradeDataList, lectureObj) {
  gradeDataList.push(lectureObj);
  console.log(`과목이 추가되었습니다.`);
}

function delayPrint(message, { delayTime }) {
  setTimeout(console.log, delayTime, message);
}

function showGrade(gradeDataList) {
  // Total
  const totalCredit = getTotalCredit(gradeDataList);
  const GPA = getGPA(gradeDataList, totalCredit);

  // Major
  const majorDataList = getMajorDataList(gradeDataList);
  const majorTotalCredit = getTotalCredit(majorDataList);
  const majorGPA = getGPA(majorDataList, majorTotalCredit);

  // GPA conversion
  const GPAFor40 = convertGPA(GPA, { stdScore: 4.0 });

  // Result
  const resultMsg = `총 평점 ${GPA}, 전공평점 ${majorGPA}, `
    + `이수학점 ${totalCredit}, 전공이수학점 ${majorTotalCredit}\n`
    + `4.0 만점 기준 총 평점 ${GPAFor40}`;

  delayPrint(resultMsg, { delayTime: 2000 });
}

addLecture(data, { 'name': '자료구조', 'grade': 'B', 'credit': 3, 'major': true });
showGrade(data);
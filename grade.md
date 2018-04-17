학점계산기
===
### 1. 목표
#### 1.1. 20180412
* 학점 정보가 담긴 배열 데이터에서 총 평점과 이수학점 구하기
```javascript
var data = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]];
showGrade(data);
// "총평점 3.92, 이수학점 6"
```
#### 1.2. 20180416
* 학점 정보 데이터 형식 변경
```javascript
var data = [
  {
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3
  },
  {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 2
  },
  {
    'name': '철학',
    'grade': 'B+',
    'credit': 1
  }
];
showGrade(data);
// "총평점 3.75, 이수학점 6"
```
----------
### 2. 생각
#### 2.1. 해야 할 것
* 생각 및 설계 : grade.md
* 구현 : index.js
#### 2.2. 구해야 하는 것
* 총 평점 : 모든 과목의 (점수 * 학점)의 합 / 총 학점
* 이수 학점 : 모든 학점의 합
#### 2.3. 데이터
* ~~배열-배열 구조 : 과목명, 점수, 학점~~
* 배열-객체 구조
#### 2.4. 고려 사항
* 평점 : 소수점 셋째자리에서 반올림 -> `toFixed(2)`
* 알파벳 점수 : ~~분기문 사용하여 매핑~~ -> 객체 사용
#### 2.5. 예상 함수
* ~~알파벳 점수를 숫자 점수로 바꿔주는 함수 : `getScoreFromGrade()`~~
* 평점 계산 함수 : `getGPA()`
* 총 이수학점 계산 함수 : `getTotalCredit()`
* 최종 결과 출력 함수 : `showGrade()`
----------
### 3. 코드 설계
#### 3.1. 최종 결과 출력 함수
```javascript
function showGrade(data) {
  const totalCredit = getTotalCredit(data);
  // 총 이수학점 구하기
  const GPA = getGPA(data, totalCredit);
  // 평점 구하기
  const resultMsg = '결과 메세지';
  // 구한 값으로 출력할 메세지 만들기
  return resultMsg;
}
```
#### 3.2. ~~알파벳 점수를 숫자 점수로 바꿔주는 함수~~
* 함수에서 객체 데이터로 구조 변경 (20180416)
```javascript
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
```
#### 3.3. 평점 계산 함수
```javascript
function getGPA(data, totalCredit) {
  let sumOfGrade = 0;
  for (i < data.length) {
    // 반복문 사용하여 연산
    const score = getScoreFromGrade(데이터 점수 부분);
    const credit = 데이터 학점 부분;
    sumOfGrade += (score * credit);
  }
  const gpa = (sumOfGrade / totalCredit).toFixed(2);
  return gpa;
}
```
#### 3.4. 총 이수학점 계산 함수
```javascript
function getTotalCredit(data) {
  let totalCredit = 0;
  for (i < data.length) {
    // 반복문 사용하여 연산
    totalCredit += 데이터 학점 부분;
  }
  return totalCredit;
}
```
----------
학점계산기
===
### 1. 목표
```javascript
var data = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]];
showGrade(data);
// "총평점 3.92, 이수학점 6"
```
----------
### 2. 생각
#### 2.1. 해야 할 것
* 생각 및 설계 : `grade.md`
* 구현 : `index.js`
#### 2.2. 구해야 하는 것
* 총 평점 : 모든 과목의 (점수 * 학점) / 총 학점
* 이수 학점 : 모든 학점의 합
#### 2.3. 데이터
* 이중배열 : 과목명(string), 점수(string), 학점(number) 
* 데이터 예
```javascript
var data = [ ['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]];
```
#### 2.4. 고려 사항
* 평점 : 소수점 셋째자리에서 반올림 -> `toFixed()`
* 알파벳 점수 : 분기문 사용하여 매핑
#### 2.5. 예상 함수
* 알파벳 점수를 숫자 점수로 바꿔주는 함수 -> `getScoreFromGrade()`
* 평점 계산 함수 -> `getGPA()`
* 총 이수학점 계산 함수 -> `getTotalCredit()`
* 출력할 결과 문구 만드는 함수 -> `getResultMsg()`
* 최종 결과 출력 함수 -> `showGrade()`
----------
### 3. 코드 설계
```javascript
function showGrade(data) {
  const totalCredit = getTotalCredit(data);
  const GPA = getGPA(data);
  const resultMsg = getResultMsg(totalCredit, GPA);
  return 
}
```

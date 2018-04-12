function getTotalCredit(data) {

  const totalCredit = data.reduce(function (sum, arr) {
    const credit = arr[2];
    sum += credit;
    return sum;
  }, 0);
  return totalCredit;
}

const data = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]];
console.log(getTotalCredit(data));
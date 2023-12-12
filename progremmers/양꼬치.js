function solution(n, k) {
  let answer = 0;

  let num = n / 10;

  n = n * 12000;
  k = k * 2000;

  k = k - num * 2000;

  if(k < 0) {
    console.log('음료수' + num + '개 서비스');
    k = 0;
  }

  answer = n + k;

  return answer;
}

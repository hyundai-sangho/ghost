const ghost = document.querySelector('.ghost');

// 유령 움직이는 소리 넣기
const ghostSound = new Audio('ghostMove.mp3')

document.body.addEventListener('mousemove', (event) => {

  // mousemove 이벤트 값에서 pageX 값과 pageY 값을 활용해
  // 마우스 이동시 유령이 따라오는 효과 주기
  ghost.style.left = event.pageX + 'px';
  ghost.style.top = event.pageY + 'px';

  // 유령 소리 시작
  ghostSound.play();
});

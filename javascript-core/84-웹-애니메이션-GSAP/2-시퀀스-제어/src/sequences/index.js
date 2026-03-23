import "./style.css";

const staggerTitle = document.querySelector('[data-display="stagger-title"]');

const staggerButton = document.querySelector('[data-action="stagger-play"]');
staggerButton?.addEventListener("click", handleStaggerAction);

const timelineButton = document.querySelector('[data-action="timeline-play"]');
timelineButton?.addEventListener("click", handleTimelineAction);

// --------------------------------------------------------------------------
// 텍스트 스플리팅

// TODO 0: 글자를 한 글자씩 나눠 구성하세요.
convertSingleChars(staggerTitle);

// --------------------------------------------------------------------------
// 이벤트 리스너

const chars = Array.from(document.querySelectorAll("[data-char]"));

gsap.set("[data-char]", {
  y: 50,
  opacity: 0,
});

async function handleStaggerAction() {
  console.log("스태거(stagger) 애니메이션");

  // TODO 1: [data-char] 글자마다 0.2초 차이를 두고 트윈 애니메이션을 적용해보세요.
  gsap.to("[data-char]", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "elastic.out(1,0.5)",
    stagger: {
      each: 0.2,
      from: "start",
    },
  });
  // 첫 번째 글자가 y축 아래 방향에서 원래 위치로 떠오름
  // (0.2초 지난 뒤) 두 번째 글자가 y축 아래 방향에서 원래 위치로 떠오름
  // (0.2초 지난 뒤) 세 번째 글자가 y축 아래 방향에서 원래 위치로 떠오름
  // (0.2초 지난 뒤) 네 번째 글자가 y축 아래 방향에서 원래 위치로 떠오름
  // (0.2초 지난 뒤) 다섯 번째 글자가 y축 아래 방향에서 원래 위치로 떠오름
  // (0.2초 지난 뒤) 여섯 번째 글자가 y축 아래 방향에서 원래 위치로 떠오름
  // (0.2초 지난 뒤) 일곱 번째 글자가 y축 아래 방향에서 원래 위치로 떠오름
  // (0.2초 지난 뒤) 여덟 번째 글자가 y축 아래 방향에서 원래 위치로 떠오름
}

function handleTimelineAction() {
  console.log("타임라인(timeline) 애니메이션");

  const box = '[data-element="box"]';

  // TODO 2: box 요소를 다음 순서대로 트윈 애니메이션을 적용해보세요.
  // 1. box 요소가 오른쪽으로 이동
  // 2. box 요소 한바퀴 회전하며 크기가 작아지면서 사라짐
  // 3. box 요소를 순식간에 왼쪽으로 이동
  // 4. box 요소가 회전하며 나타남
  // 5. box 요소가 중앙으로 이동
  // gsap.to(box, { x: 120, duration: 0.25, ease: "power2-out" });
  // gsap.to(
  //   box,
  //   { rotation: 360, scale: 0, duration: 0.4, ease: "power2-out" },
  //   "+=0.1",
  // );
  // gsap.to(box, { x: -120, duration: 0 }, "+=0.1");
  // gsap.to(
  //   box,
  //   { rotation: -360, scale: 1, duration: 0.4, ease: "power2.out" },
  //   "+=0.1",
  // );
  // gsap.to(box, { x: 0, duration: 0.25, ease: "power2.out" }, "+=0.1");

  // TODO 3:동알한 애니메이션을 gsap 타임라인(timeline)을 활용해 구현해보세요.
 const timeline = gsap.timeline({ default: { ease: 'power2.out' } })

  timeline
    .to(box, { x: 120, duration: 0.25, ease: 'power4.out' })
    .to(box, { rotation: 360, scale: 0, duration: 0.4 }, '+=0.2')
    .set(box, { x: -120 })
    .to(box, { rotation: -360, scale: 1, duration: 0.4 }, '+=0.2')
    .to(box, { x: 0, duration: 0.25, ease: 'power4.out' }, '+=0.2')
}


const timeline = gsap.timeline({ default: { ease: 'power2.out' } })

timeline
  .to('[data-element="box"]', { x: 120, duration: 0.25, ease: 'power4.out' })
  .to('[data-element="box"]', { rotation: 360, scale: 0, duration: 0.4 }, '+=0.2')
  .set('[data-element="box"]', { x: -120 })
  .to('[data-element="box"]', { rotation: -360, scale: 1, duration: 0.4 }, '+=0.2')
  .to('[data-element="box"]', { x: 0, duration: 0.25, ease: 'power4.out' }, '+=0.2')

timeline.pause()

setTimeout(() => {
  timeline.play()
}, 1500)

// --------------------------------------------------------------------------
// 유틸리티

function convertSingleChars(element) {
  if (!element || element.nodeType !== document.ELEMENT_NODE) {
    throw new Error(`문서에 존재하는 요소를 설정해야 합니다.`);
  }

  const chars = element.textContent
    .split("")
    .filter((c) => c.trim() && !c.includes("\n"));

  const template = chars.map((c) => `<span data-char>${c}</span>`).join("");
  element.innerHTML = template;
}

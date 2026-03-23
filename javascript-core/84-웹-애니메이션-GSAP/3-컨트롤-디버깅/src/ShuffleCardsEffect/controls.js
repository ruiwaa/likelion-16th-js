const INIT_MESSAGE = '화면을 클릭해 카드를 애니메이션 합니다.'

function initControls(moundElement, message = INIT_MESSAGE) {
  if (!moundElement || moundElement.nodeType !== document.ELEMENT_NODE) {
    throw new Error('문서에 컨트롤을 마운트할 요소가 없습니다.')
  }

  const template = `
      <div data-controls>
        <div data-guide-wrapper>
          <p data-guide>${message ?? initMessage}</p>
        </div>
        <div data-button-group role="group">
          <button type="button" data-ghost-button data-spread-action>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 18h2c4.3 0 6-7 8-7s3.7 7 8 7h2" />
              <path d="M2 6h2c4.3 0 6 7 8 7s3.7-7 8-7h2" />
              <path d="m18 4 4 2-4 2" />
              <path d="m18 20 4-2-4-2" />
            </svg>
            카드 섞기
          </button>
          <button type="button" data-ghost-button data-gather-action>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v20" />
              <path d="m19 15-7 7-7-7" />
            </svg>
            카드 정렬
          </button>
        </div>
      </div>
    `

  moundElement.insertAdjacentHTML('beforeend', template)
}

export default initControls

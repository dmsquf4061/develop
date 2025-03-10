// const { forEach } = require("lodash")

// 네비게이션 바 요소 이벤트
function navigation() {
    let activeToggle = null
    let popup = document.querySelector('.object')
    let colorPalette = document.querySelector('.colorpalette')
    let textField = document.querySelector('.textfield')
    let infortMore = document.querySelector('.infor')


    // 해당 클릭할 요소 선택 및 공통 이벤트 실행
    document.addEventListener('click', function (event) {

        // 변수에 할당된 요소들이 클릭할 때 handleToggle 호출
        let clickedToggle = event.target.closest('.p-b, .painting, .textfielding')
        if (clickedToggle) {
            handleToggle(clickedToggle)
        }

        // scroll 요소 클릭할 때 closeAllPopups 호출
        let isClickInsideScroll = event.target.closest('.scroll')

        let isClickInsidePopup = event.target.closest('.popup')
        let isClickInsideColorPalette = event.target.closest('.color-palette')
        let isClickInsidePaintingElements = event.target.closest('.p-b, .painting, .textfielding, .infor')

        if (isClickInsideScroll ||
            (!isClickInsidePopup &&
                !isClickInsideColorPalette &&
                !isClickInsidePaintingElements)) {
            closeAllPopups()
        }

        // 가구 자세히보기
        if (event.target.closest('.f-button')) {
            infortMore.classList.add('on')
        }
        if (event.target.closest('.close')) {
            infortMore.classList.remove('on')

        }

    })

    //  토글 활성 비활성화
    function handleToggle(toggle) {
        if (activeToggle === toggle) {
            deactivateToggle(toggle)
        } else {
            if (activeToggle) {
                deactivateToggle(activeToggle)
            }
            activateToggle(toggle)
        }
    }

    // on 이벤트
    function activateToggle(toggle) {
        toggle.classList.add('on')
        // painting을 찾고 colorPalette에 on
        if (toggle.classList.contains('painting')) {
            colorPalette.classList.add('on')
        } else {
            popup.classList.add('on')
        }
        if (toggle.classList.contains('textfielding')) {
            textField.classList.add('on')
            textTouch()
            popup.classList.remove('on')
        }
        activeToggle = toggle
    }

    // on 제거
    function deactivateToggle(toggle) {
        toggle.classList.remove('on')
        popup.classList.remove('on')
        // textField.classList.remove('on')
        colorPalette.classList.remove('on')
        activeToggle = null
    }

    //  모든 팝업 전체 on 제거
    function closeAllPopups() {
        popup.classList.remove('on')
        colorPalette.classList.remove('on')
        // textField.classList.remove('on')
        document.querySelectorAll('.p-b, .painting, .textfielding').forEach(toggle => toggle.classList.remove('on'))
        activeToggle = null
    }

}

// 오브젝트 리스트 변환
function objectItem() {
    const popupImages = document.querySelectorAll('.piclist li img')
    const slideImagesMain = document.querySelectorAll('.infor-wrap .slider img')
    const dlideImagesList = document.querySelectorAll('.infor-wrap .slider-list img')


    // 가구, 도자기, 책 이미지
    const imgPaths = {
        furniture: [
            "./image/object/furniture/display-01.webp",
            "./image/object/furniture/display-02.webp",
            "./image/object/furniture/display-03.webp",
            "./image/object/furniture/display-04.webp",
            "./image/object/furniture/display-05.webp",
            "./image/object/furniture/display-06.webp",
            "./image/object/furniture/display-07.webp",
            "./image/object/furniture/display-08.webp",
            "./image/object/furniture/display-09.webp",
        ],
        jar: [
            "./image/object/jar/display-11.webp",
            "./image/object/jar/display-12.webp",
            "./image/object/jar/display-13.webp",
            "./image/object/jar/display-14.webp",
            "./image/object/jar/display-15.webp",
            "./image/object/jar/display-16.webp",
            "./image/object/jar/display-17.webp",
            "./image/object/jar/display-18.webp",
            "./image/object/jar/display-19.webp",
        ],
        book: [
            "./image/object/book/display-20.webp",
            "./image/object/book/display-21.webp",
            "./image/object/book/display-22.webp",
            "./image/object/book/display-23.webp",
            "./image/object/book/display-24.webp",
            "./image/object/book/display-25.webp",
            "./image/object/book/display-26.webp",
            "./image/object/book/display-27.webp",
            "./image/object/book/display-28.webp",
            "./image/object/book/display-29.webp",
        ],
        season: {
            spring: [
                "./image/object/season/spring/display-38.webp",
                "./image/object/season/spring/display-39.webp",
                "./image/object/season/spring/display-40.webp",
                "./image/object/season/spring/display-41.webp",
                "./image/object/season/spring/display-42.webp",
                "./image/object/season/spring/display-43.webp",
                "./image/object/season/spring/display-44.webp",
                "./image/object/season/spring/display-45.webp",
                "./image/object/season/spring/display-46.webp",
            ],
            summer: [
                "./image/object/season/summer/display-47.webp",
                "./image/object/season/summer/display-48.webp",
                "./image/object/season/summer/display-49.webp",
                "./image/object/season/summer/display-50.webp",
                "./image/object/season/summer/display-51.webp",
                "./image/object/season/summer/display-52.webp",
                "./image/object/season/summer/display-53.webp",
                "./image/object/season/summer/display-54.webp",
                "./image/object/season/summer/display-55.webp",
            ],
            autumn: [
                "./image/object/season/autumn/display-65.webp",
                "./image/object/season/autumn/display-66.webp",
                "./image/object/season/autumn/display-67.webp",
                "./image/object/season/autumn/display-68.webp",
                "./image/object/season/autumn/display-69.webp",
                "./image/object/season/autumn/display-70.webp",
                "./image/object/season/autumn/display-71.webp",
                "./image/object/season/autumn/display-72.webp",
                "./image/object/season/autumn/display-73.webp",
            ],
            winter: [
                "./image/object/season/winter/display-56.webp",
                "./image/object/season/winter/display-57.webp",
                "./image/object/season/winter/display-58.webp",
                "./image/object/season/winter/display-59.webp",
                "./image/object/season/winter/display-60.webp",
                "./image/object/season/winter/display-61.webp",
                "./image/object/season/winter/display-62.webp",
                "./image/object/season/winter/display-63.webp",
                "./image/object/season/winter/display-64.webp",
            ]
        }
    }

    // 가구, 도자기, 책 텍스트
    const altPaths = {
        furniture: [
            "소반",
            "뒤주",
            "화탁",
            "탁자",
            "다기장",
            "머릿 장",
            "나주 호족반",
            "수납장",
            "꽃병 상",
        ],
        jar: [
            "백자 청화송죽인물문 항아리",
            "백자 상감모란문 병",
            "백자 병형 주전자",
            "백자 화병",
            "청자 양각죽절문 병",
            "백자 항아리",
            "백자 십각 항아리",
            "청화철화’시’명나비문 팔각연적",
            "분청사기 박지연화문 편병",
        ],
        book: [
            "분홍색 서책",
            "파란색 서책",
            "노란색 서책",
            "초록색 서책",
            "꽃무늬 서책",
            "보라색 서책",
            "봄무늬 서책",
            "여름무늬 서책",
            "펼처진 서책",
        ],
        season: {
            spring: [
                "복숭아",
                "모란꽃",
                "앵화",
                "호랑이·까치",
                "모란·화병",
                "서각통",
                "나비1",
                "나비2",
                "나비3",
            ],
            summer: [
                "물고기",
                "거북이",
                "소나무",
                "석류·석류꽃",
                "연꽃·수반",
                "대나무",
                "영지버섯",
                "수박",
                "고양이",
            ],
            autumn: [
                "호박",
                "수탉",
                "감",
                "불수감",
                "공작새 깃털",
                "국화",
                "접시꽃",
                "어치",
                "단풍",
            ],
            winter: [
                "향로·토끼",
                "옥토끼",
                "조롱박",
                "매화",
                "필통",
                "파초잎",
                "벼루",
                "치자꽃",
                "바둑",
            ],
        }
    }
    const seasonAlt = {
        spring: [
            "젊음과 청춘, 아름다움",
            "봄, 번영",
            "봄, 4월의 꽃",
            "불운을 내쫓는, 좋은 소식",
            "봄, 번영, 지적성취",
            "행복",
            "변화와 불멸, 기쁨",
            "변화와 불멸, 기쁨",
            "변화와 불멸, 기쁨",
        ],
        summer: [
            "번영,역동성,벽사",
            "장수의 상징",
            "불로장생",
            "유월, 자식번성, 번창, 풍요",
            "칠월, 여름, 아름다움",
            "장수를 축하하고 기원",
            "불로장생",
            "다산, 장수, 풍요",
            "장수, 악귀를 쫓는",
        ],
        autumn: [
            "복과 풍요",
            "출세와 성공",
            "번창, 벼슬이 높아짐",
            "부, 신의 가호, 복의상징",
            "벼슬, 관직",
            "시월, 가을, 품위",
            "구월, 승진",
            "관운, 승진",
            "대궐, 조정",
        ],
        winter: [
            "학문, 세상만물, 명예, 지혜",
            "지혜, 부활, 불멸",
            "길상, 선비, 액운 물리침",
            "선비, 겨울, 선비의 기품",
            "학문의 성취",
            "독학, 신선, 기사회생, 부귀",
            "학문",
            "신중함, 11월",
            "학자의 표상",
        ],
    }


    // 카테고리 설정
    const categoryConfig = {
        furniture: {
            buttonStates: { fButton: true, fTwist: false },
            name: 'furniture',
            text: '가구 자세히보기 >'
        },
        jar: {
            buttonStates: { fButton: true, fTwist: false },
            name: 'jar',
            text: '도자기 자세히보기 >'
        },
        book: {
            buttonStates: { fButton: false, fTwist: true },
            name: 'book',
        },
        season: {
            buttonStates: { fButton: true, fTwist: false },
            name: 'furniture',
            text: {
                spring: "봄의 만물 자세히보기 >",
                summer: "여름의 만물 자세히보기 >",
                autumn: "가을의 만물 자세히보기 >",
                winter: "겨울의 만물 자세히보기 >",
            }
        },
    }


    // BUTTON_SELECTORS
    const BUTTON_SELECTORS = {
        fButton: '.f-button',
        fTwist: '.f-twist'
    }

    // 상태 관리
    let seasonValue = 'spring'

    // 네비게이션 클릭 이벤트 핸들러
    function handleNavClick(e) {
        const navElement = e.target.closest('.p-b')
        if (!navElement) return

        const category = findCategory(navElement)
        if (!isValidCategory(category)) return

        updateButtonVisibility(category)
        updateButtonText(category, navElement)
        updateImages(category)
    }

    // 클릭된 요소의 카테고리 찾기
    function findCategory(element) {
        return Object.keys(categoryConfig).find(key =>
            element.classList.contains(key)
        )
    }

    // 카테고리 유효성 검사
    function isValidCategory(category) {
        if (!category) {
            console.warn('유효하지 않은 카테고리입니다.')
            return false
        }
        return true
    }

    // 버튼 표시/숨김 상태 업데이트
    function updateButtonVisibility(category) {
        const buttonStates = categoryConfig[category].buttonStates

        Object.entries(BUTTON_SELECTORS).forEach(([key, selector]) => {
            const element = document.querySelector(selector)
            if (element) {
                element.style.display = buttonStates[key] ? 'block' : 'none'
            }
        })
    }


    seasonValue = Object.keys(categoryConfig.season.text)[0]

    // 버튼 텍스트 업데이트
    function updateButtonText(category, navElement) {
        const fButton = document.querySelector(BUTTON_SELECTORS.fButton)
        const textElements = document.querySelectorAll('.f-s-13')
        if (!fButton) return

        if (category === 'season') {
            const clickedSeason = navElement.dataset.season || navElement.value
            if (clickedSeason) {
                fButton.textContent = categoryConfig.season.text[clickedSeason]
                seasonValue = clickedSeason

                fButton.setAttribute('data-season', 'season')
                textElements.forEach((textEl, index) => {
                    textEl.textContent = seasonAlt[seasonValue][index]
                    textEl.classList.add('on')
                })
            }
        } else {
            fButton.textContent = categoryConfig[category].text

            fButton.setAttribute('data-season', '')
            textElements.forEach(textEl => {
                textEl.textContent = ''
                textEl.classList.remove('on')
            })
        }
    }

    // 이벤트 리스너 등록
    document.addEventListener('click', handleNavClick)

    // 팝업 리스트 스크롤시 클릭 방지
    function ClickDuringScroll() {
        let isScrolling = false
        let clickTimeout

        const dragUls = document.querySelectorAll('.popup ul li img')
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

        // 이미지 클릭 시도할 때만 잠시 클릭 허용
        dragUls.forEach((img) => {
            img.parentElement.addEventListener('touchstart', function () {
                if (!isScrolling) {
                    img.classList.add('allow-click')
                }
            })
        })

        // 스크롤 시작하면 즉시 클릭 방지
        document.addEventListener("touchmove", function () {
            isScrolling = true
            if (clickTimeout) {
                clearTimeout(clickTimeout)
            }
            dragUls.forEach((img) => {
                img.classList.remove('allow-click')
            })
        })

        // 스크롤 끝나면 상태 초기화
        document.addEventListener("touchend", function () {
            clickTimeout = setTimeout(() => {
                isScrolling = false
                dragUls.forEach((img) => {
                    img.classList.remove('allow-click')
                })
            }, 50)
        })

        // 마우스 이벤트
        if (!isMobile) {
            dragUls.forEach((img) => {
                img.classList.add('allow-click')
            })
        }
    }
    ClickDuringScroll()

    // 이미지 이벤트
    function updateImages(category) {

        // 좌우반전 이벤트 s
        const fTwist = document.querySelector('.f-twist')
        let isRotate = false

        fTwist.removeEventListener('click', handleRotation)

        function handleRotation() {
            if (fTwist.style.display === 'block') {
                isRotate = !isRotate
                popupImages.forEach(img => {
                    if (isRotate) {
                        img.classList.add('rotated')
                    } else {
                        img.classList.remove('rotated')
                    }
                })
            }
        }
        fTwist.addEventListener('click', handleRotation)


        // 메뉴 카테고리별 이미지 교체
        function updateImagesByCategory(imageElements, category) {
            imageElements.forEach((img, index) => {
                img.classList.remove('rotated')

                const paths = category === 'season' ?
                    {
                        images: imgPaths.season[seasonValue],
                        alts: altPaths.season[seasonValue]
                    } :
                    {
                        images: imgPaths[category],
                        alts: altPaths[category]
                    }

                if (index < paths.images.length) {
                    img.src = paths.images[index]
                    img.alt = paths.alts[index]

                    const slideElement = img.closest('.swiper-slide')

                    if (slideElement) {
                        const nameElement = slideElement.querySelector('.s-15')
                        if (nameElement) {
                            nameElement.textContent = paths.alts[index]
                        }
                    }
                } else {
                    img.src = ''
                    img.alt = ''

                    if (slideElement) {
                        const nameElement = slideElement.querySelector('.s-15')
                        if (nameElement) {
                            nameElement.textContent = ''
                        }
                    }
                }
            })
        }

        // 사용
        updateImagesByCategory(popupImages, category)
        updateImagesByCategory(slideImagesMain, category)
        updateImagesByCategory(dlideImagesList, category)
    }

    return { imgPaths, altPaths, seasonAlt, categoryConfig }
}

// 팔레트 색상 전환
function palettebg() {
    const paletList = [
        'b-1',
        'b-2',
        'b-3',
        'b-4',
    ]
    const seasonPalette = [
        'spring',
        'summer',
        'autumn',
        'winter',
    ]
    const decoBg = document.querySelector('.deco-box')

    seasonPalette.forEach((season) => {

        paletList.forEach(className => {
            const element = document.querySelector(`.palette.${season} .${className}`)
            if (element) {
                element.addEventListener('click', function () {
                    switch (season) {
                        case 'spring':
                            switch (className) {
                                case 'b-1':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(255 236 244 / 68%) 60%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-2':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(255 230 225 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-3':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(250 255 199 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-4':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break
                            }
                            break
                        case 'summer':
                            switch (className) {
                                case 'b-1':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(224 242 255 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-2':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(219 231 255 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-3':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(230 242 255 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-4':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break
                            }
                            break
                        case 'autumn':
                            switch (className) {
                                case 'b-1':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(246 243 225 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-2':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(255 241 204 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-3':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(251 255 227 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-4':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgba(255, 255, 255, 0.00) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break
                            }
                            break
                        case 'winter':
                            switch (className) {
                                case 'b-1':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(216 230 232 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-2':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(238 249 255 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-3':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40%, rgb(220 226 246 / 68%) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break

                                case 'b-4':
                                    decoBg.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 100%), url("./image/main/visaul_bg.webp") 50% / cover no-repeat'
                                    break
                            }
                            break
                    }
                })
            }
        })
    })
}

// 텍스트 선택시 지우기
function textTouch() {
    const text = document.querySelector('.text')
    console.log(text)
    if (text) {

        text.textContent = '문구를 작성해보세요'

        const clearPlaceholder = () => {
            if (text.textContent === '문구를 작성해보세요') {
                text.textContent = ''
                text.removeEventListener('click', clearPlaceholder);
                text.removeEventListener('touchstart', clearPlaceholder);
            }
        }
        
        text.addEventListener('click', clearPlaceholder);
        text.addEventListener('touchstart', clearPlaceholder);
    }
}
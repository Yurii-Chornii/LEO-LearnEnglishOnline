 //smoothScroll
    let linkNav = document.querySelectorAll('[href^="#"]'), V = 0.2;
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) {
            e.preventDefault();
            let w = window.pageYOffset,
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
            let t = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);

            function step(time) {
                if (start === null) start = time;
                let progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r !== w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash
                }
            }
        }, false);
    }
    //smoothScroll

    //more questions button
    const questionsBtn = document.querySelector('#showMoreQuestionsBtn');
    let isQuestions = false;
    questionsBtn.addEventListener('click', () => {
        const questions = document.querySelectorAll('.hiddenQuestion');
        const firstQuestion = document.querySelectorAll('.question-box')[0];
        if (!isQuestions) {
            for (const question of questions) {
                question.style.display = 'block';
                question.style.borderBottom = '1px solid #404040';
                firstQuestion.style.borderBottom = '1px solid #404040';
                isQuestions = true;
                questionsBtn.style.transform = 'rotate(180deg)';
            }
        } else {
            for (const question of questions) {
                question.style.display = 'none';
                question.style.borderBottom = '';
                firstQuestion.style.borderBottom = '';
                isQuestions = false;
                questionsBtn.style.transform = '';
            }
        }
    })
    //more questions button

    //dropdown menu
    const getElement = (element) => document.querySelector(`${element}`);

    getElement('#openMenuBtn').addEventListener('click', () => {
        openMenu();
    })
    const blurBackgroundWrapper = getElement("#blurBackgroundWrapper");
    const phoneNav = getElement('#phoneNav');
    const closeBtn = getElement('#closeBtn');
    closeBtn.addEventListener('click', () => {
        closeMenu();
    })

    function openMenu() {
        blurBackgroundWrapper.style.display = 'block';
        setTimeout(() => {
            blurBackgroundWrapper.classList.add('blurBackground');
        }, 0)

        setTimeout(() => {
            phoneNav.style.top = '0';
        }, 0)

    }

    function closeMenu() {
        phoneNav.style.top = '';
        blurBackgroundWrapper.classList.remove('blurBackground');
        setTimeout(() => {
            blurBackgroundWrapper.style.display = 'none';
        }, 500)
    }

    document.querySelectorAll('#phoneNav li').forEach(elem => elem.onclick = closeMenu);
    //dropdown menu



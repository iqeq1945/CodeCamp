const startWord = () => {
    console.log('hihi');
    let myword = document.getElementById('myword').value;
    let word = document.getElementById('word').innerText;

    let lastword = word[word.length - 1];
    let firstword = myword[0];

    if (lastword === firstword) {
        document.getElementById('result').innerText = '정답!';
        document.getElementById('word').innerText = myword;
        document.getElementById('myword').value = '';
    } else {
        document.getElementById('result').innerText = '오답!';
        document.getElementById('myword').value = '';
    }
};

const startLotto = () => {
    let lotto = [];
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 45) + 1;

        for (let j in lotto) {
            while (num == lotto[j]) {
                num = Math.floor(Math.random() * 45) + 1;
            }
        }

        lotto.push(num);
    }
    lotto.sort(function (a, b) {
        return a - b;
    });
    console.log(document.getElementsByClassName('game__lotto__number')[0]);
    document.getElementsByClassName('game__lotto__number')[0].innerHTML = '';
    for (let k = 0; k < 6; k++) {
        document.getElementsByClassName('game__lotto__number')[0].innerHTML += '<span>' + lotto[k] + '</span>';
    }
};

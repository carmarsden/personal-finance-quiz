'use strict';

const questionArray = [
    {
        id: 1,
        text: `Who needs an emergency fund?`,
        ans1: 'People with low or unsteady income',
        ans2: 'People with dangerous hobbies (e.g. rock climbing or drag racing)',
        ans3: 'Adults with dependents (e.g. children or elderly parents)',
        ans4: 'Everyone',
        correctans: 'Everyone',
        img: 'images/question1.png',
        alt: 'umbrella over gold coins',
    },
    {
        id: 2,
        text: `How large should an emergency fund be?`,
        ans1: '$1,000',
        ans2: '1 month living expenses',
        ans3: '3-6 months living expenses',
        ans4: '1 year living expenses',
        correctans: '3-6 months living expenses',
        img: 'images/question2.png',
        alt: 'gold coin in piggy bank',
    },
    {
        id: 3,
        text: `Which of the following is <strong>not</strong> a tax-advantaged investment account?`,
        ans1: 'High-yield savings account',
        ans2: '401(k) or 403(b)',
        ans3: 'Roth IRA',
        ans4: 'HSA',
        correctans: 'High-yield savings account',
        img: 'images/question3.png',
        alt: 'bank doors',
    },
    {
        id: 4,
        text: `What is the annualized average historical return of the stock market, after adjusting for inflation?`,
        ans1: '3-4%',
        ans2: '7-8%',
        ans3: '11-12%',
        ans4: '14-15%',
        correctans: '7-8%',
        img: 'images/question4.png',
        alt: 'gold coin with graph trending up',
    },
    {
        id: 5,
        text: `Which of the following is <strong>not</strong> considered high-interest debt (i.e., "hair on fire" debt which you'd want to pay off before all other saving or investing)?`,
        ans1: 'Student loan: 6%',
        ans2: 'Credit card debt: 18%',
        ans3: 'Payday loan: 400%',
        ans4: 'All of the above are "hair on fire" debt',
        correctans: 'Student loan: 6%',
        img: 'images/question5.png',
        alt: 'pie chart with percent sign',
    },
    {
        id: 6,
        text: `What is the best debt payoff method?`,
        ans1: 'Avalanche method: pay off your debts from the highest interest rate to the lowest',
        ans2: 'Snowball method: pay off your debts from the smallest principal balance to the largest',
        ans3: 'Hybrid method: go for quick wins on some small balance debts, then prioritize highest interest rates',
        ans4: 'Whichever method motivates you the most',
        correctans: 'Whichever method motivates you the most',
        img: 'images/question6.png',
        alt: 'gold coin with bar graph and trendline downwards',
    },
    {
        id: 7,
        text: `Which of the following correctly ranks the asset classes from least to most risky?`,
        ans1: '(Least Risky) Treasury Bonds, Savings Account, Individual Stocks, Stock Market Index Funds (Most Risky)',
        ans2: '(Least Risky) Treasury Bonds, Savings Account, Stock Market Index Funds, Individual Stocks (Most Risky)',
        ans3: '(Least Risky) Savings Account, Treasury Bonds, Individual Stocks, Stock Market Index Funds (Most Risky)',
        ans4: '(Least Risky) Savings Account, Treasury Bonds, Stock Market Index Funds, Individual Stocks (Most Risky)',
        correctans: '(Least Risky) Savings Account, Treasury Bonds, Stock Market Index Funds, Individual Stocks (Most Risky)',
        img: 'images/question7.png',
        alt: 'clipboard and pencil',
    },
    {
        id: 8,
        text: `Which of the following does <strong>not</strong> help improve your credit score?`,
        ans1: 'Make on-time, in-full payments to a credit card or loan (to show that you are capable of making responsible payments)',
        ans2: 'Decrease your credit card limit (to show that you do not need to rely on credit/debt)',
        ans3: 'Increase your credit card limit (so that you use less of your total credit limit)',
        ans4: 'Keep old credit cards open (to increase your total credit history)',
        correctans: 'Decrease your credit card limit (to show that you do not need to rely on credit/debt)',
        img: 'images/question8.png',
        alt: 'credit card front and back',
    },
    {
        id: 9,
        text: `You just received a hefty cash bonus and want to invest it in the stock market. When is the best time to do so?`,
        ans1: 'Wait until the stock market is rising: you want to invest in a strong market',
        ans2: 'Wait until the stock market is falling: you want to invest when stocks are cheap',
        ans3: 'All at once, today ("lump sum investing"): research shows that this strategy beats out timing the market most of the time',
        ans4: 'Invest in chunks over the next few weeks ("dollar cost averaging"): avoid the risk of putting all your money in at once right before a market crash',
        correctans: 'All at once, today ("lump sum investing"): research shows that this strategy beats out timing the market most of the time',
        img: 'images/question9.png',
        alt: 'potted plant growing a dollar bill',
    },
    {
        id: 10,
        text: `What does "FIRE" stand for?`,
        ans1: 'Financial Investment Return Equation',
        ans2: 'Financial Independence Retirement Equation',
        ans3: 'Financial Independence, Retire Early',
        ans4: 'Fiduciary Investments for Retiring Early',
        correctans: 'Financial Independence, Retire Early',
        img: 'images/question10.png',
        alt: 'glittering diamond',
    },
]

let questionNum = 0;
let totalScore = 0;




function generateQuestionHTML() {
    let thisQuestion = questionArray.find(obj => obj.id === questionNum);
    return `
    <form class="questionform">
        <fieldset class="questionfieldset">
            <legend>${questionNum}. ${thisQuestion.text}</legend>

            <label class="answer">
            <input type="radio" name="answeroption" required>
            <span>${thisQuestion.ans1}</span>
            </label>

            <label class="answer">
            <input type="radio" name="answeroption" required>
            <span>${thisQuestion.ans2}</span>
            </label>

            <label class="answer">
            <input type="radio" name="answeroption" required>
            <span>${thisQuestion.ans3}</span>
            </label>

            <label class="answer">
            <input type="radio" name="answeroption" required>
            <span>${thisQuestion.ans4}</span>
            </label>

            <button type="submit" class="submitquestion">SUBMIT</button>
        </fieldset>
    </form>
    `;
}

function renderNextQuestion() {
    // increment the questionNum
    // update the Question number in header
    // generate the question HTML
    // render it to the DOM

    questionNum++;
    $('.currentquestionnum').text(questionNum);
    $('main').html(generateQuestionHTML());
}

function handleStartQuiz() {
    // when you click "Start Quiz" button
    // render the first question

    $('.start').on('click', '.startbutton', function(event) {
        renderNextQuestion();
    });
}

function rightAnswerSubmitted(thisQuestion) {
    // increase currentScore
    // generate "right answer" HTML
    // render it to the DOM

    totalScore++;
    $('.totalscore').text(totalScore);
    $('main').html(`
    <section class="questionresult wronganswer">
    <img class="answericon" src="${thisQuestion.img}" alt="${thisQuestion.alt}">
    <h2>Great Job!</h2>
    <p>You chose the right answer.</p>
    <button type="submit" class="nextquestion">NEXT</button>
    </section>
    `);
}

function wrongAnswerSubmitted(thisQuestion) {
    // generate "wrong answer" HTML
    // render it to the DOM

    $('main').html(`
    <section class="questionresult wronganswer">
    <img class="answericon" src="${thisQuestion.img}" alt="${thisQuestion.alt}">
    <h2>Oops, wrong answer!</h2>
    <p>The correct answer was: "<span class="correctanswertext">${thisQuestion.correctans}</span>"</p>
    <button type="submit" class="nextquestion">NEXT</button>
    </section>
    `);
}

function handleSubmitAnswer() {
    // when you submit question form
    // prevent default
    // if the answer is right, run right answer function
    // otherwise run wrong answer function

    $('main').on('submit', '.questionform', function(event) {
        event.preventDefault();
        let thisQuestion = questionArray.find(obj => obj.id === questionNum);
        let correctAnswer = thisQuestion.correctans;
        let yourAnswer = $('input:checked').siblings('span').html();
        if (yourAnswer === correctAnswer) {
            rightAnswerSubmitted(thisQuestion);
        } else {
            wrongAnswerSubmitted(thisQuestion);
        }
    });
}



function generateResultsHTML() {
    if (totalScore <= 3) {
        return `
        <section class="endresult">
            <h2>Needs Improvement...</h2>
            <p>You scored ${totalScore}/10</p>
            <p>Perhaps you should hire a financial advisor. Just make sure they're a <a href="https://www.investopedia.com/terms/f/fiduciary.asp" target="_blank">fiduciary</a>!</p>
            <button type="submit" class="restartbutton">RESTART QUIZ</button>
        </section>
        `;    
    } else if (totalScore <= 8) {
        return `
        <section class="endresult">
            <h2>Not Bad!</h2>
            <p>You scored ${totalScore}/10</p>
            <p>Pretty good, but you have more studying to do. How about the <a href="https://www.reddit.com/r/personalfinance/wiki/index" target="_blank">Personal Finance Wiki</a> on Reddit?</p>
            <button type="submit" class="restartbutton">RESTART QUIZ</button>
        </section>
        `;
    } else {
        return `
        <section class="endresult">
            <h2>Wow!</h2>
            <p>You scored ${totalScore}/10</p>
            <p>Are you some sort of <a href="https://www.investopedia.com/articles/personal-finance/020216/top-5-personal-finance-experts-follow-2016.asp" target="_blank">expert</a>?</p>
            <button type="submit" class="restartbutton">RESTART QUIZ</button>
        </section>
        `;    
    };
}

function handleNextQuestion() {
    // handle the user clicking "next"
    // if the question num is already at the max (total number of elements in questionArray), stop and go to final results screen
    // otherwise render next question

    $('main').on('click', '.nextquestion', function(event) {
        if (questionNum >= questionArray.length) {
            $('main').html(generateResultsHTML());
        } else {
            renderNextQuestion();
        };
    });
}

function handleRestartQuiz() {
    // when you click "Restart Quiz" button
    // reload entire page
    
    $('main').on('click', '.restartbutton', function(event) {
        location.reload();
    })
}

function runPrimaryFunctions() {
    handleStartQuiz();
    handleSubmitAnswer();
    handleNextQuestion();
    handleRestartQuiz();
}

$(runPrimaryFunctions);
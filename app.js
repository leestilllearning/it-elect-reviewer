let activeTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    initClock(); 
    initTheme(); 
    renderMainTabs(); 
    renderAllModules();
    if(reviewerData && reviewerData.length > 0) openModule(reviewerData[0].id);
});

function initClock() {
    const clockEl = document.getElementById('real-time-clock');
    setInterval(() => {
        const now = new Date();
        clockEl.innerText = now.toLocaleString('en-PH', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }, 1000);
}

function initTheme() {
    const btn = document.getElementById('theme-toggle');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        btn.innerText = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

function renderMainTabs() {
    const container = document.getElementById('main-tabs-container');
    if (!reviewerData || reviewerData.length === 0) return;
    reviewerData.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = 'tab-link'; btn.id = `tab-btn-${mod.id}`; btn.innerText = mod.title;
        btn.onclick = () => openModule(mod.id);
        container.appendChild(btn);
    });
}

function renderAllModules() {
    const appContainer = document.getElementById('app-container');
    if (!reviewerData || reviewerData.length === 0) {
        appContainer.innerHTML = '<p style="text-align:center; margin-top:50px; font-size:1.2rem;">Waiting for reviewer data...</p>';
        return;
    }
    reviewerData.forEach(mod => {
        const section = document.createElement('section');
        section.id = mod.id; section.className = 'module-content';
        
        section.innerHTML = `
            <nav class="sub-tabs">
                <button class="sub-tab-link active" onclick="openSection('${mod.id}', 'proper')">Reviewer Proper</button>
                <button class="sub-tab-link" onclick="openSection('${mod.id}', 'glossary')">Glossary</button>
                <button class="sub-tab-link" onclick="openSection('${mod.id}', 'quiz')">Assessment</button>
            </nav>
        `;

        const properDiv = document.createElement('div'); properDiv.id = `${mod.id}-proper`; properDiv.className = 'section-content active'; properDiv.innerHTML = mod.proper; section.appendChild(properDiv);
        const glossaryDiv = document.createElement('div'); glossaryDiv.id = `${mod.id}-glossary`; glossaryDiv.className = 'section-content';
        let glossaryHTML = '<h2>Glossary</h2><dl>';
        mod.glossary.forEach(g => { glossaryHTML += `<dt><strong>${g.term}</strong></dt><dd>${g.def}</dd><br>`; });
        glossaryHTML += '</dl>'; glossaryDiv.innerHTML = glossaryHTML; section.appendChild(glossaryDiv);

        const quizDiv = document.createElement('div'); quizDiv.id = `${mod.id}-quiz`; quizDiv.className = 'section-content';
        quizDiv.innerHTML = `
            <div id="setup-${mod.id}" class="setup-panel">
                <h2>Module Assessment</h2>
                <label>Timer:</label>
                <select id="timer-val-${mod.id}">
                    <option value="0">No Timer</option>
                    <option value="5">5 Minutes</option>
                    <option value="15">15 Minutes</option>
                    <option value="30">30 Minutes</option>
                    <option value="60" selected>60 Minutes</option>
                </select><br>
                <label>Exam Type:</label>
                <select id="type-val-${mod.id}">
                    <option value="all">All Types (Mixed)</option>
                    <option value="mcq">Multiple Choice Only</option>
                    <option value="ident">Identification Only</option>
                    <option value="solve">Solving Only</option>
                </select><br>
                <button class="btn-primary" onclick="startExam('${mod.id}')">Start Assessment</button>
            </div>
            <div id="exam-area-${mod.id}" style="display:none;">
                <div id="timer-display-${mod.id}" class="timer-display"></div>
                <form id="form-${mod.id}"></form>
                <button class="btn-primary" id="submit-btn-${mod.id}" onclick="evaluateExam('${mod.id}')" style="width:100%; margin-top:20px;">Submit Exam</button>
                <div id="result-${mod.id}"></div>
            </div>`;
        section.appendChild(quizDiv); appContainer.appendChild(section);
    });
}

function openModule(id) {
    document.querySelectorAll('.module-content, .tab-link').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active'); document.getElementById(`tab-btn-${id}`).classList.add('active');
    openSection(id, 'proper');
}

function openSection(id, type) {
    const mod = document.getElementById(id);
    mod.querySelectorAll('.section-content, .sub-tab-link').forEach(el => el.classList.remove('active'));
    document.getElementById(`${id}-${type}`).classList.add('active');
    const btns = mod.querySelectorAll('.sub-tab-link');
    if(type==='proper') btns[0].classList.add('active'); if(type==='glossary') btns[1].classList.add('active'); if(type==='quiz') btns[2].classList.add('active');
}

function startExam(moduleId) {
    const modData = reviewerData.find(m => m.id === moduleId);
    const timeVal = parseInt(document.getElementById(`timer-val-${moduleId}`).value);
    const typeVal = document.getElementById(`type-val-${moduleId}`).value;
    
    document.getElementById(`setup-${moduleId}`).style.display = 'none';
    document.getElementById(`exam-area-${moduleId}`).style.display = 'block';

    let questions = modData.quiz;
    if(typeVal !== 'all') questions = questions.filter(q => q.type === typeVal);

    const form = document.getElementById(`form-${moduleId}`); form.innerHTML = '';
    questions.forEach((q, i) => {
        let html = `<div class="question-block" data-category="${q.category}" data-type="${q.type}" data-answer="${q.answer}" data-index="${i}">
            <p><strong>${i+1}. [${q.category}]</strong> ${q.question}</p>`;
        
        if(q.type === 'mcq') {
            for(let [k,v] of Object.entries(q.options)) {
                html += `<label style="display:block; margin:5px 0;"><input type="radio" name="q${i}" value="${k}"> ${v}</label>`;
            }
        } else {
            html += `<input type="text" name="q${i}" placeholder="Type your exact answer here...">`;
        }
        html += `<div class="feedback-box" style="display:none;"></div></div>`;
        form.innerHTML += html;
    });

    const timerDisplay = document.getElementById(`timer-display-${moduleId}`);
    if(timeVal > 0) {
        let seconds = timeVal * 60; timerDisplay.style.display = 'block';
        if(activeTimer) clearInterval(activeTimer);
        activeTimer = setInterval(() => {
            seconds--;
            timerDisplay.innerText = `⏱️ ${Math.floor(seconds/60).toString().padStart(2,'0')}:${(seconds%60).toString().padStart(2,'0')}`;
            if(seconds <= 60) timerDisplay.style.backgroundColor = 'var(--danger)';
            if(seconds <= 0) { clearInterval(activeTimer); evaluateExam(moduleId); }
        }, 1000);
    } else {
        timerDisplay.style.display = 'none';
    }
}

function evaluateExam(moduleId) {
    if(activeTimer) clearInterval(activeTimer);
    document.getElementById(`submit-btn-${moduleId}`).disabled = true;

    const form = document.getElementById(`form-${moduleId}`);
    const questions = form.querySelectorAll('.question-block');
    let totalScore = 0;
    let mastery = {};

    questions.forEach(qb => {
        const type = qb.dataset.type;
        const correctAnswer = qb.dataset.answer.toLowerCase();
        const category = qb.dataset.category;
        const feedback = qb.querySelector('.feedback-box');
        
        if(!mastery[category]) mastery[category] = { correct: 0, total: 0 };
        mastery[category].total++;

        let userAnswer = type === 'mcq' ? 
            (qb.querySelector('input:checked') ? qb.querySelector('input:checked').value.toLowerCase() : "") : 
            qb.querySelector('input').value.trim().toLowerCase();

        qb.querySelectorAll('input').forEach(i => i.disabled = true);
        feedback.style.display = 'block';

        if(userAnswer === correctAnswer) {
            totalScore++; mastery[category].correct++;
            feedback.innerHTML = `✅ Correct!`;
            feedback.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
            feedback.style.color = 'var(--success)';
        } else {
            feedback.innerHTML = `❌ Incorrect. The correct answer is: <strong>${correctAnswer}</strong>`;
            feedback.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
            feedback.style.color = 'var(--danger)';
        }
    });

    let masteryHTML = `<div class="mastery-board">`;
    for(const [cat, data] of Object.entries(mastery)) {
        const pct = (data.correct / data.total) * 100;
        masteryHTML += `<div class="mastery-card ${pct >= 80 ? 'mastery-excellent' : 'mastery-needs-work'}">
            <h4>${cat}</h4><p>Score: ${data.correct}/${data.total} (${pct.toFixed(0)}%)</p>
            <p><strong>${pct >= 80 ? '🌟 Mastery Achieved' : '⚠️ Needs Practice'}</strong></p></div>`;
    }
    masteryHTML += `</div>`;

    document.getElementById(`result-${moduleId}`).innerHTML = `<h2 style="text-align:center; margin-top:30px; color:var(--primary-color);">Assessment Complete! Score: ${totalScore} / ${questions.length}</h2>${masteryHTML}`;
}
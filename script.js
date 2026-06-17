let academic= 50;
let mental = 50;
let physical = 50;
let social = 50;

let currentScenario = 0;

const scenarios = [

    {
        day:"Monday - School Stress",
        question:"Tomorrow you have an important exam. What do you do?",

        options:[

            {
                text:"Study until 2 AM",
                academic:15,
                mental:-10,
                physical:-10,
                social:0
            },

            {
                text:"Study until 10 PM and sleep well",
                academic:10,
                mental:5,
                physical:5,
                social:0
            },

            {
                text:"Don't study",
                academic:-15,
                mental:5,
                physical:0,
                social:0
            }

        ]
    },

    {
        day:"Tuesday - Physical Activity",
        question:"After school you have free time.",

        options:[

            {
                text:"Scroll social media for 4 hours",
                academic:0,
                mental:-5,
                physical:-10,
                social:0
            },

            {
                text:"Go out with friends",
                academic:0,
                mental:10,
                physical:0,
                social:15
            },

            {
                text:"Exercise or play sports",
                academic:0,
                mental:10,
                physical:15,
                social:0
            }

        ]
    },

    {
        day:"Wednesday - Cyberbullying",
        question:"Someone posts a rude comment about you online.",

        options:[

            {
                text:"Reply with another rude comment",
                academic:0,
                mental:-10,
                physical:0,
                social:-10
            },

            {
                text:"Ignore it",
                academic:0,
                mental:5,
                physical:0,
                social:0
            },

            {
                text:"Report it and talk to someone you trust",
                academic:0,
                mental:10,
                physical:0,
                social:10
            }

        ]
    },

    {
        day:"Thursday - Sleep Habits",
        question:"You have been sleeping only 5 hours a night.",

        options:[

            {
                text:"Keep the same routine",
                academic:0,
                mental:-10,
                physical:-15,
                social:0
            },

            {
                text:"Go to bed earlier",
                academic:0,
                mental:10,
                physical:15,
                social:0
            },

            {
                text:"Drink energy drinks to stay awake",
                academic:0,
                mental:-5,
                physical:-10,
                social:0
            }

        ]
    },
    {
        day:"Friday - Social Support",
        question:"You are having a difficult day.",

        options:[

            {
                text:"Talk to a friend",
                academic:0,
                mental:10,
                physical:0,
                social:15
            },

            {
                text:"Talk to a parent",
                academic:0,
                mental:15,
                physical:0,
                social:5
            },

            {
                text:"Keep everything to yourself",
                academic:0,
                mental:-15,
                physical:0,
                social:-10
            }

        ]
    },
    {
        day:"Saturday - Digital Wellbeing",
        question:"You spent 5 hours on social media today.",

        options:[

            {
                text:"Continue scrolling",
                academic:0,
                mental:-10,
                physical:-10,
                social:0
            },

            {
                text:"Take a break and go outside",
                academic:0,
                mental:10,
                physical:10,
                social:5
            },

            {
                text:"Read a book",
                academic:5,
                mental:5,
                physical:0,
                social:0
            }

        ]
    },
    {
        day:"Sunday - Life Balance",
        question:"You need to finish homework and still have time to relax.",

        options:[

            {
                text:"Work all day without breaks",
                academic:15,
                mental:-10,
                physical:-5,
                social:-5
            },

            {
                text:"Do nothing",
                academic:-15,
                mental:0,
                physical:0,
                social:0
            },

            {
                text:"Create a balanced schedule",
                academic:10,
                mental:10,
                physical:5,
                social:5
            }

        ]
    }

];


function chooseOption(index){

    let choice =
        scenarios[currentScenario].options[index];

    academic += choice.academic;
    mental += choice.mental;
    physical += choice.physical;
    social += choice.social;


    academic = Math.max(0, Math.min(100, academic));
    mental = Math.max(0, Math.min(100, mental));
    physical = Math.max(0, Math.min(100, physical));
    social = Math.max(0, Math.min(100, social));

    updateStats();

    currentScenario++;

    if(currentScenario >= scenarios.length){

        showResults();

    }else{

        loadScenario();

    }

}


function updateStats(){

    document.getElementById("academic").innerText =
        academic;

    document.getElementById("mental").innerText =
        mental;

    document.getElementById("physical").innerText =
        physical;

    document.getElementById("social").innerText =
        social;

}


function loadScenario(){

    let scenario =
        scenarios[currentScenario];

    document.getElementById("day").innerText =
        scenario.day;

    document.getElementById("question").innerText =
        scenario.question;

    let optionsDiv =
        document.getElementById("options");

    optionsDiv.innerHTML = "";

    for(let i=0;i<scenario.options.length;i++){

        let button =
            document.createElement("button");

        button.innerText =
            scenario.options[i].text;

        button.onclick =
            function(){

                chooseOption(i);

            };

        optionsDiv.appendChild(button);

    }

    document.getElementById("day-counter").innerText =
        "Day " + (currentScenario + 1) + " of " + scenarios.length;

    updateProgress();

}


function showResults() {

    document.getElementById("progress-bar").style.width = "100%";

    let score =
        (academic + mental + physical + social) / 4;

    let profile = "";


    let strength = "";
    let improvement = "";

    let values = [
        {name: "School Experience", value: academic},
        {name: "Mental Wellbeing", value: mental},
        {name: "Physical Health", value: physical},
        {name: "Social Support", value: social}
    ];

    values.sort((a, b) => b.value - a.value);

    strength = values[0].name;
    improvement = values[3].name;


    if(score >= 85){

        profile = "🌟 Thriving Student";

    }
    else{
        if(strength === "Mental Wellbeing"){

            profile = "🧠 Emotionally Aware Student";

        }
        else if(strength === "Social Support"){

            profile = "👥 Socially Connected Student";

        }
        else if(strength === "Physical Health"){

            profile = "💪 Active Lifestyle Student";

        }
        else{

            profile = "📚 Academically Engaged Student";

        }
    }



    let insight = "";

    if (improvement === "Physical Health") {
        insight =
            "Regular physical activity is associated with better wellbeing.";
    } else if (improvement === "Mental Wellbeing") {
        insight =
            "Managing stress and emotions is important for healthy development.";
    } else if (improvement === "Social Support") {
        insight =
            "Supportive friendships and family relationships are protective factors.";
    } else {
        insight =
            "Positive school experiences contribute to overall wellbeing.";
    }

    document.querySelector(".card").innerHTML =

        `
<h2>📊 Personal Wellbeing Summary</h2>

<h3>${profile}</h3>

<h2 class="final-score">
${score.toFixed(0)}/100
</h2>

<p class="score-description">

Your wellbeing profile was generated based on
your decisions throughout the week.

</p>

<canvas id="resultChart"></canvas>
<br>

<hr>

<p>🏫 School Experience: ${academic}</p>

<p>😌 Mental Wellbeing: ${mental}</p>

<p>💪 Physical Health: ${physical}</p>

<p>👥 Social Support: ${social}</p>

<hr>

<div class="report-cards">

    <div class="report-card strength">

        <h3>⭐ Strongest Area</h3>

        <p>${strength}</p>

    </div>

    <div class="report-card improvement">

        <h3>📈 Improvement Area</h3>

        <p>${improvement}</p>

    </div>

    <div class="report-card recommendation">

        <h3>💡 Recommendation</h3>

        <p>${insight}</p>

    </div>

</div>

<hr>

<p style="font-size:14px; color:#94a3b8;">
This simulation was inspired by themes explored in the HBSC
(Health Behaviour in School-aged Children) study.
</p>


<br><br>

<button onclick="restartGame()">
   🔄 Start New Simulation
</button>


`;


    const ctx = document.getElementById("resultChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "School Experience",
                "Mental Wellbeing",
                "Physical Health",
                "Social Support"
            ],
            datasets: [{
                label: "Score",
                data: [
                    academic,
                    mental,
                    physical,
                    social
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });



}


function restartGame(){

    location.reload();

}


function updateProgress() {

    let progress =
        (currentScenario / scenarios.length) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

}

function startSimulation() {

    document.getElementById("start-screen").style.display =
        "none";

    document.getElementById("game-container").style.display =
        "block";

}
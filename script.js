// Mind Game – Reaction Test
let zenInterval;
let zenMoving = false;

function startZen() {
  const dot = document.getElementById("zenDot");
  const text = document.getElementById("zenText");

  let pos = 0;
  zenMoving = true;
  text.innerText = "Observe slowly...";

  zenInterval = setInterval(() => {
    if (pos < 200) {
      pos += 2;
      dot.style.left = pos + "px";
    } else {
      clearInterval(zenInterval);
      zenMoving = false;
      text.innerText = "Dot stopped. Click Start again.";
    }
  }, 30);
}
function moodColor() {
  const moods = [
    { color: "#71bef5ff", text: "Let your thoughts slow down." },
    { color: "#fa9d95ff", text: "You are safe and calm." },
    { color: "#e7935fff", text: "Breathe naturally and relax." },
    { color: "#f3dd87ff", text: "Lightness brings clarity." }
  ];

  const random = Math.floor(Math.random() * moods.length);
  document.body.style.background = moods[random].color;
  document.getElementById("colorMoodText").innerText = moods[random].text;
}


// Puzzle
function showPuzzleAnswer() {
  document.getElementById("puzzleAnswer").innerText =
    "Answer: 16 (Each number doubles)";
}

// Motivational Quotes
const quotes = [
  "Believe in yourself.",
  "Consistency is more powerful than motivation.",
  "Small progress is still progress."
];

function showQuote() {
  let q = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteText").innerText = quotes[q];
}

// Inspirational Stories
const stories = [
  "A student failed once but kept trying and succeeded.",
  "A small idea became a big innovation through persistence.",
  "Hard work silently creates success."
];

function showStory() {
  let s = Math.floor(Math.random() * stories.length);
  document.getElementById("storyText").innerText = stories[s];
}

// Breathing Exercise
function startBreathing() {
  const text = document.getElementById("breathText");
  text.innerText = "Inhale...";
  setTimeout(() => text.innerText = "Hold...", 4000);
  setTimeout(() => text.innerText = "Exhale...", 7000);
}


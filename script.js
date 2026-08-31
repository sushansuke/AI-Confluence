const events = [
  { title: 'Humanity 2050', type: 'PPT Competition', category: 'creative', icon: '▰', color: '#7b20c4', topic: 'The World We Will Inherit — Imagining Life, Society and Progress in 2050', description: 'Build a thought-provoking presentation that imagines the opportunities, responsibilities and human values that will guide life in 2050.' },
  { title: 'Impact Challenge', type: 'Ideathon', category: 'innovation', icon: '✦', color: '#1370ca', topic: 'Ideas That Can Change Everyday Life', description: 'Bring a practical idea to the table. Frame a real problem, propose an inclusive solution and show the impact it can make every day.' },
  { title: 'Hackathon', type: 'Build for Impact', category: 'innovation', icon: '</>', color: '#e67b13', topic: 'Build for a Better Tomorrow — Technology for Real-World Solutions', description: 'Collaborate, prototype and build technology that responds to a genuine community or societal challenge.' },
  { title: 'Website Designing', type: 'Competition', category: 'creative', icon: '▣', color: '#119568', topic: 'Design the Digital Future', description: 'Design an intuitive and meaningful web experience that makes a clear contribution to tomorrow’s digital world.' },
  { title: 'Startup Pitch', type: 'Competition', category: 'innovation', icon: '➤', color: '#176dd5', topic: 'The Next Big Idea — Innovation with Purpose', description: 'Pitch a venture that pairs a bold idea with a purpose, a realistic path and the potential to make a difference.' },
  { title: 'Drawing', type: 'Competition', category: 'creative', icon: '◉', color: '#d82478', topic: 'When Humans Meet Machines', description: 'Create an original visual interpretation of the encounter between human imagination and intelligent machines.' },
  { title: 'Quiz', type: 'Competition', category: 'communication', icon: '?', color: '#ec5f14', topic: 'Beyond the Classroom — Knowledge, Curiosity & Discovery', description: 'Put your knowledge and quick thinking to the test in a lively, multidisciplinary quiz challenge.' },
  { title: 'Debate', type: 'Competition', category: 'communication', icon: '⚖', color: '#6d25c1', topic: 'Technology Is Changing Us Faster Than We Are Changing It', description: 'Research, reason and present your point of view on one of the most urgent questions of the intelligent age.' },
  { title: 'Digital Poster Making', type: 'Competition', category: 'creative', icon: '✎', color: '#0c9695', topic: 'AI for Good: Solving One Real-World Problem Through Artificial Intelligence', description: 'Make a compelling digital poster that communicates how AI can serve people, communities and the planet.' },
  { title: 'Poetry', type: 'Competition', category: 'creative', icon: '❧', color: '#be175c', topic: 'If an AI Could Feel: A Poem from the Mind of a Machine', description: 'Write an original poem exploring feeling, consciousness and creativity from a machine’s imagined perspective.' },
  { title: 'Essay', type: 'Competition', category: 'communication', icon: '≡', color: '#1c69b7', topic: 'What Does It Mean to Be Human in the Modern World?', description: 'Write a considered essay about human identity, values and connection in a rapidly changing world.' },
  { title: 'Just A Minute', type: 'Competition', category: 'communication', icon: '60', color: '#e8880a', topic: '60 Seconds in the Mind of an AI', description: 'Take the stage for one minute and share a sharp, memorable and original perspective from an AI’s point of view.' }
];

const grid = document.querySelector('#eventsGrid');
const modal = document.querySelector('#eventModal');
const qrModal = document.querySelector('#qrModal');
let activeEvent = events[0];

function renderEvents(filter = 'all') {
  const shown = filter === 'all' ? events : events.filter(event => event.category === filter);
  grid.innerHTML = shown.map(event => {
    const number = String(events.indexOf(event) + 1).padStart(2, '0');
    const pale = `${event.color}14`;
    return `<article class="event-card" data-number="${number}" style="--event-color:${event.color};--event-pale:${pale}">
      <div class="card-top"><span class="event-icon">${event.icon}</span><span class="event-category">${event.type}</span></div>
      <h3>${event.title}</h3><p>${event.topic}</p>
      <footer><span>Registration via QR</span><button data-event="${event.title}">View details →</button></footer>
    </article>`;
  }).join('');
}

function openEvent(title) {
  activeEvent = events.find(event => event.title === title) || events[0];
  document.querySelector('#modalNumber').textContent = String(events.indexOf(activeEvent) + 1).padStart(2, '0');
  document.querySelector('#modalCategory').textContent = `${activeEvent.type} · ${activeEvent.category}`;
  document.querySelector('#modalTitle').textContent = activeEvent.title;
  document.querySelector('#modalDescription').textContent = activeEvent.description;
  document.querySelector('#modalTopic').textContent = activeEvent.topic;
  modal.showModal();
}

renderEvents();
grid.addEventListener('click', (event) => { const button = event.target.closest('[data-event]'); if (button) openEvent(button.dataset.event); });
document.querySelector('.close-modal').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
document.querySelector('[data-open-qr]').addEventListener('click', event => { event.preventDefault(); qrModal.showModal(); });
qrModal.querySelector('.close-modal').addEventListener('click', () => qrModal.close());
qrModal.addEventListener('click', event => { if (event.target === qrModal) qrModal.close(); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); renderEvents(button.dataset.filter); }));

const deadline = new Date('2026-09-02T23:59:00+05:30').getTime();
const timerUnits = { days: 86400000, hours: 3600000, minutes: 60000, seconds: 1000 };

function updateCountdown() {
  let remaining = Math.max(0, deadline - Date.now());
  Object.entries(timerUnits).forEach(([unit, milliseconds]) => {
    const value = Math.floor(remaining / milliseconds);
    remaining %= milliseconds;
    document.querySelector(`#${unit}`).textContent = String(value).padStart(2, '0');
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

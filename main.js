// tracks section js
// multiline string in js
const tracks = [
// AI/ML
`Calling all AI-curious cats and coding wizards! ‍ Rebase&lt;01&gt;'s Machine Learning (ML) track is your chance to dive into the world of artificial intelligence, whether you're a total newbie or a seasoned pro.
Think robots that see, chatbots that chat, and algorithms that predict the next big thing.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>you get a cool swag kit ;)`, 

// IoT/ Hardware
`Dive into the exciting world of hardware and embedded systems by building innovative projects that bridge the gap between the physical and digital worlds.
Imagine controlling your home lights with your voice or creating a robot that follows your commands. That's the power of hardware.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>you get a cool swag kit ;)`,

// Blockchain
`This is your time to explore decentralized finance (DeFi) applications, enabling seamless peer-to-peer financial transactions, decentralized marketplaces, and novel governance models.
One can design secure and transparent systems that empower users with greater control over their digital assets.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br> we've also got a polygon track where you can win upto $350. check out <a href="https://rebase01.devfolio.co/prizes" target="_blank" class="text-gray-400 hover:text-white">our devfolio page<a/> for more details. ;)`,

// Sustainability
`Use your tech skills to tackle real-world challenges and create a more sustainable future.
Build impactful projects and dive into issues you care about, from climate change and renewable energy to social justice and community well-being.
Show your collaborative spirit as you form a team with fellow changemakers and share your knowledge.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>you get a cool swag kit ;)`,

// Open Innovation
`Ever dreamt of using technology to solve a real-world problem? Or maybe you have a unique idea for a game-changing app? If you're brimming with creativity and looking to bring your vision to life, then the Open Innovation track is calling you!
This track is open to everyone, from seasoned developers to complete beginners.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>you get a cool swag kit ;)`,

// `Rebase&lt;06&gt; is a month-long online hackathon extravaganza where you can compete across various categories,This is your chance
// to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
// miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
// Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
// showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
// to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
// miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
// Rebase&lt;01&gt;—where creativity has no bounds.`,

// `Rebase&lt;07&gt; is a month-long online hackathon extravaganza where you can compete across various categories,This is your chance
// to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
// miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
// Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
// showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
// to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
// miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
// Rebase&lt;01&gt;—where creativity has no bounds.`,
]

function addListenersandUpdateText() {
  const tracksTopics = document.getElementsByClassName('tracks-topics').item(0).children;
  const tracksText = document.querySelector('.tracks-body-text');
  for (let i = 0; i < tracksTopics.length; i++) {
    tracksTopics[i].addEventListener('click', function() {
      tracksText.innerHTML = tracks[i];
      console.log(tracks[i]);
      console.log(tracksText);
    });
  }
  console.log(tracksTopics);
}

document.addEventListener('DOMContentLoaded', addListenersandUpdateText);

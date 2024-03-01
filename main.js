// tracks section js
// multiline string in js
const tracks = [
// AI/ML
`Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds.`, 

// IoT/ Hardware
`Calling all tech enthusiasts, from absolute beginners to seasoned coding wizards! Rebase is your chance to dive into the exciting world of hardware and embedded systems by building innovative projects that bridge the gap between the physical and digital worlds.
Imagine controlling your home lights with your voice or creating a robot that follows your commands. That's the power of IoT! In this track, you'll harness the potential of sensors, tiny devices that detect things like temperature, light, and movement. These sensors act as the "eyes and ears" of your projects, allowing them to interact with the environment.`,

// Blockchain
`Calling all tech wizards and future pioneers: Rebase is your gateway to the exciting world of Web3!
Imagine a world where your fridge reorders groceries when you're running low, or your car pays for its own parking. That's the potential of Web3, the next iteration of the internet built on cutting-edge technologies like blockchain and decentralization.
This track is for anyone who wants to be a part of the future, regardless of their experience level. Whether you're a seasoned developer or just curious about this revolutionary space, Rebase has something for you:`,

// Sustainability
`Whether you're a seasoned coder or just starting your coding journey, Rebase's Sustainability Track is your chance to use your tech skills to tackle real-world challenges and create a more sustainable future.
Build impactful projects and dive into issues you care about, from climate change and renewable energy to social justice and community well-being.
Show your collaborative spirit as you form a team with fellow changemakers, share your knowledge, and learn from each other's experiences.
Be a part of a supportive environment as you gain access to workshops, mentors, and resources to help refine your ideas and bring your project to life.`,

// Open Innovation
`Ever dreamt of using technology to solve a real-world problem? Or maybe you have a unique idea for a game-changing app? If you're brimming with creativity and looking to bring your vision to life, then Rebase's Open Innovation track is calling you!
This track is open to everyone, from seasoned developers to complete beginners. Whether you're a coding whiz or just starting your tech journey, we welcome your unique perspective and innovative spirit.
This is your space to unleash your creativity and think outside the box and develop an original idea that tackles a challenge you care about. It could be anything from designing a sustainable energy solution to creating an accessible educational platform.`,

`Rebase&lt;06&gt; is a month-long online hackathon extravaganza where you can compete across various categories,This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds.`,

`Rebase&lt;07&gt; is a month-long online hackathon extravaganza where you can compete across various categories,This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds.`,
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

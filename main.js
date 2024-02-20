// tracks section js
// multiline string in js
const tracks = [
`Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds.`, 

`Rebase&lt;02&gt; is a month-long online hackathon extravaganza where you can compete across various categories,This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds.`,

`Rebase&lt;03&gt; is a month-long online hackathon extravaganza where you can compete across various categories,This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds.`,

`Rebase&lt;04&gt; is a month-long online hackathon extravaganza where you can compete across various categories,This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds.`,

`Rebase&lt;05&gt; is a month-long online hackathon extravaganza where you can compete across various categories,This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds. Rebase&lt;01&gt; is a month-long online hackathon extravaganza where you can compete across various categories,
showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance
to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't
miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into
Rebase&lt;01&gt;—where creativity has no bounds.`,

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

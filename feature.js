//feature video

function toggleFrame() {
  var frame = document.getElementById("myFrame");
  var frameContainer = document.getElementById("myFrameContainer");

  if (frame.style.display === "none") {
    frame.style.display = "block";
    frameContainer.style.display = "block";
  } else {
    frame.style.display = "none";
    frameContainer.style.display = "none";
  }
}

  function toggleFrame2() {
    var frame2 = document.getElementById("myFrame2");
    var frameContainer2 = document.getElementById("myFrameContainer2");

    if (frame2.style.display === "none") {
      frame2.style.display = "block";
      frameContainer2.style.display = "block";
    } else {
      frame2.style.display = "none";
      frameContainer2.style.display = "none";
    }
  }

  function toggleFrame3() {
    var frame3 = document.getElementById("myFrame3");
    var frameContainer3 = document.getElementById("myFrameContainer3");

    if (frame3.style.display === "none") {
      frame3.style.display = "block";
      frameContainer3.style.display = "block";
    } else {
      frame3.style.display = "none";
      frameContainer3.style.display = "none";
    }
  }

  function toggleFrame4() {
    var frame4 = document.getElementById("myFrame4");
    var frameContainer4 = document.getElementById("myFrameContainer4");

    if (frame4.style.display === "none") {
      frame4.style.display = "block";
      frameContainer4.style.display = "block";
    } else {
      frame4.style.display = "none";
      frameContainer4.style.display = "none";
    }
  }

//features lyrics

var lyricsDiv = document.querySelector('.lyrics');
var showButton = document.getElementById('showButton');

showButton.addEventListener('click', function() {
    if (lyricsDiv.style.display === 'none') {
        lyricsDiv.style.display = 'block';
        showButton.textContent = 'Hide Lyrics';
    } else {
        lyricsDiv.style.display = 'none';
        showButton.textContent = 'Show Lyrics';
    }
});

var lyricsDiv2 = document.querySelector('.lyrics2');
var showLyricsBtn2 = document.getElementById('showLyricsBtn2');

showLyricsBtn2.addEventListener('click', function() {
  if (lyricsDiv2.style.display === 'none') {
    lyricsDiv2.style.display = 'block';
    showLyricsBtn2.textContent = 'Hide Lyrics';
  } else {
    lyricsDiv2.style.display = 'none';
    showLyricsBtn2.textContent = 'Show Lyrics';
  }
});

var lyricsDiv3 = document.querySelector('.lyrics3');
var showLyricsBtn3 = document.getElementById('showLyricsBtn3');

showLyricsBtn3.addEventListener('click', function() {
  if (lyricsDiv3.style.display === 'none') {
    lyricsDiv3.style.display = 'block';
    showLyricsBtn3.textContent = 'Hide Lyrics';
  } else {
    lyricsDiv3.style.display = 'none';
    showLyricsBtn3.textContent = 'Show Lyrics';
  }
});

var lyricsDiv4 = document.querySelector('.lyrics4');
var showLyricsBtn4 = document.getElementById('showLyricsBtn4');

showLyricsBtn4.addEventListener('click', function() {
  if (lyricsDiv4.style.display === 'none') {
    lyricsDiv4.style.display = 'block';
    showLyricsBtn4.textContent = 'Hide Lyrics';
  } else {
    lyricsDiv4.style.display = 'none';
    showLyricsBtn4.textContent = 'Show Lyrics';
  }
});




// Get the search form and add an event listener for form submission
const searchForm = document.querySelector('.form-control');
searchForm.addEventListener('submit', handleSearch);

// Get the "Show Lyrics" buttons and add event listeners to toggle the lyrics
const showButtons = document.querySelectorAll('#showButton');
showButtons.forEach(button => {
  button.addEventListener('click', toggleLyrics);
});

// Function to handle the search form submission
function handleSearch(event) {
  event.preventDefault();
  const searchTerm = searchForm.querySelector('input').value;
  // Perform search logic here
  console.log(`Searching for: ${searchTerm}`);
  // Reset the form
  searchForm.reset();
}

// Function to toggle the visibility of lyrics
function toggleLyrics(event) {
  const lyrics = event.target.nextElementSibling;
  lyrics.classList.toggle('show');
}



// functions for comments



        
        var submitBtn = document.getElementById("submitBtn");

        submitBtn.addEventListener("click", function () {
            submitComment();
        });

        function submitComment() {
            var commentText = document.getElementById("commentText").value;
            var timestamp = new Date().toLocaleString();
            var comment = {
                author: "Clarence Vince Razo",
                text: commentText,
                timestamp: timestamp
            };
            displayComment(comment);
            document.getElementById("commentText").value = "";
        }

        function displayComment(comment) {
            var commentList = document.getElementById("comments");
            var commentItem = document.createElement("li");
            commentItem.className = "comment";
            commentItem.innerHTML = `
                <div class="author">${comment.author}</div>
                <div class="timestamp">${comment.timestamp}</div>
                <div class="text">${comment.text}</div>
            `;
            commentList.appendChild(commentItem);
        }

   
        function getRandomName() {
            var names = [
              "JC Reyes",
                "Raymart Cabico",
                "Christian Velbis",
                "Jerico Garcia",
                "Alvin Bascos",
                "Marklee Tadeja",
                "Renz Barrientos",
                "EG Ulbinado",
                "Jan Kenneth Mejia",
                "Emman Llamas",
                "Michael Go"
            ];
            var randomIndex = Math.floor(Math.random() * names.length);
            return names[randomIndex];
        }


        function getRandomResponse() {
            var responses = [
                "Uhaw, grabe ang ganda ng kanta huhuhu",
                "OO nga yong kantang uhaw, sarap pakinggan... btw taga saan ka po?",
                "Kantang Musika, para sa nag mamahal",
                "Sheessh Cupid, yeaah wasayo sharanghida!!",
                "Come inside of  my heart, grabe sarap ulit ulitin to",
                "Shout out sa bebe ko na 4 years na kame",
                "Sa sobrang stress ko buti nalang sensio is here para makapag play ng music hehe",
                "Pasilyo, wow wow!!",
                "I like all the songs in this website",
                "Sana All Masaya, buti nalang may uhaw",
                "Hi po mga guysz, ganda ng mga kanta dito... High Quality!!",
                "Bawal english dito, joke... Musika my favorite songs"
            ];
            var randomIndex = Math.floor(Math.random() * responses.length);
            return responses[randomIndex];
        }


        setInterval(function () {
            var randomComment = {
                author: getRandomName(),
                text: getRandomResponse(),
                timestamp: new Date().toLocaleString()
            };
            displayComment(randomComment);
        }, 10000);


        // feature for musiclist

        var leftSongs = [
          { name: 'Come Inside Of My Heart', author: 'Song by IV of Spades', audioSrc: 'insideof.mp3' },
          { name: 'Uhaw', author: 'Song by Dilaw', audioSrc: 'dilaw.mp3' },
          { name: 'Ang Huling El Bimbo', author: 'Song by Eraeserheads', audioSrc: 'elbimbo.mp3' },
          { name: 'Habang Buhay', author: 'Song by Zack Tabudlo', audioSrc: 'habangbuhay.mp3' },
          { name: 'Pasilyo', author: 'SunKissed Lola', audioSrc: 'pasilyo.mp3' },
        ];
    
        var rightSongs = [
          { name: 'Mahika', author: 'Song by Janine Berdin', audioSrc: 'mahika.mp3' },
          { name: 'Cupid', author: 'Song by FIFTY FIFTY', audioSrc: 'kupido.mp3' },
          { name: 'Ikaw Lang', author: 'Song by Nobita', audioSrc: 'ikawlang.mp3' },
          { name: 'Dito Ka Lang', author: 'Song by Moira Dela Torre', audioSrc: 'ditokalang.mp3' },
          { name: 'Binibini', author: 'Song by Zack Tabudlo', audioSrc: 'Binibini.mp3' },
        ];
    
        function createBox(song, containerId) {
          var box = document.createElement('div');
          box.classList.add('boxq');
    
          var nameElement = document.createElement('span');
          nameElement.classList.add('nameq');
          nameElement.innerText = song.name;
    
          var authorElement = document.createElement('span');
          authorElement.classList.add('authorq');
          authorElement.innerText = song.author;
    
          var audio = document.createElement('audio');
          audio.src = song.audioSrc;
    
          var playButton = document.createElement('button');
          playButton.classList.add('play-buttonq');
          playButton.innerText = 'Play';
          playButton.onclick = function() {
            toggleAudio(this, audio);
          };
    
          box.appendChild(nameElement);
          box.appendChild(authorElement);
          box.appendChild(playButton);
          box.appendChild(audio);
    
          document.getElementById(containerId).appendChild(box);
        }
    
        function toggleAudio(button, audio) {
          if (audio.paused) {
            stopAllAudio(); // Stop other audio if playing
            audio.play();
            button.innerText = 'Stop';
          } else {
            audio.pause();
            audio.currentTime = 0;
            button.innerText = 'Play';
          }
        }
    
        function stopAllAudio() {
          var audioElements = document.getElementsByTagName('audio');
          var playButtons = document.getElementsByClassName('play-buttonq');
    
          for (var i = 0; i < audioElements.length; i++) {
            audioElements[i].pause();
            audioElements[i].currentTime = 0;
            playButtons[i].innerText = 'Play';
          }
        }
    
        // Create boxes dynamically for left container
        for (var i = 0; i < leftSongs.length; i++) {
          createBox(leftSongs[i], 'left-container');
        }
    
        // Create boxes dynamically for right container
        for (var i = 0; i < rightSongs.length; i++) {
          createBox(rightSongs[i], 'right-container');
        }

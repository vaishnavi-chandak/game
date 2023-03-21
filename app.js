      let chance = "p1";
      const playercard = document.getElementById("playcard");
      const gamecard = document.getElementById("gamecard");

      let player1 = document.getElementById("player1");
      let player2 = document.getElementById("player2");

      const player1wincount = document.getElementById("player1wincount");
      const player2wincount = document.getElementById("player2wincount");
      const playerdrewcount = document.getElementById("drawcount");
      const playertotalcount = document.getElementById("totalcount");

      let p1Count = 0,
        p2Count = 0,
        dCount = 0,
        tCount = 0;

      let player1Name, player2name;
      function startGame() {
        player1Name = document.getElementById("p1").value;
        player2Name = document.getElementById("p2").value;
        if (player1Name === "" || player2Name === "") {
          console.log("name reqired");
          document.getElementById("output").innerHTML = `

          <div class="alert alert-danger">please enter your name</div>`;
          setTimeout(() => {
            document.getElementById("output").innerHTML = "";
          }, 2000);
        } else {
          player1.innerHtml = player1Name;
          player2.innerHtml = player2Name;

          gamecard.classList.remove("d-none");
          playercard.classList.add("d-none");
        }
      }
      function game(id) {
        const box = document.getElementById(id);
        const isred = box.classList.contains("bg-danger");
        const isgreen = box.classList.contains("bg-success");
        console.log(chance);
        if (!isred && !isgreen) {
          if (chance === "p1") {
            box.classList.add("bg-danger");
            box.innerHTML = `<h1>x</h1>`;
            chance = "p2";
          } else {
            box.classList.add("bg-success");
            box.innerHTML = `<h1>o</h1>`;
            chance = "p1";
          }
        }

        if (!winner() && checkallfill()) {
          dCount++;
          resetgame();
        }
      }
      function winner() {
        return (
          checkwinner("b1", "b2", "b3", "bg-danger") ||
          checkwinner("b4", "b5", "b6", "bg-danger") ||
          checkwinner("b7", "b8", "b9", "bg-danger") ||
          checkwinner("b1", "b4", "b7", "bg-danger") ||
          checkwinner("b2", "b5", "b8", "bg-danger") ||
          checkwinner("b3", "b6", "b9", "bg-danger") ||
          checkwinner("b1", "b5", "b9", "bg-danger") ||
          checkwinner("b3", "b5", "b7", "bg-danger") ||
          checkwinner("b1", "b2", "b3", "bg-success") ||
          checkwinner("b4", "b5", "b6", "bg-success") ||
          checkwinner("b7", "b8", "b9", "bg-success") ||
          checkwinner("b1", "b4", "b7", "bg-success") ||
          checkwinner("b2", "b5", "b8", "bg-success") ||
          checkwinner("b3", "b6", "b9", "bg-success") ||
          checkwinner("b1", "b5", "b9", "bg-success") ||
          checkwinner("b3", "b5", "b7", "bg-success")
        );

        /* console.log("xxxx");
        const isbox1red = document
          .getElementById("b1")
          .classList.contains("bg-danger");
        const isbox2red = document
          .getElementById("b2")
          .classList.contains("bg-danger");
        const isbox3red = document
          .getElementById("b3")
          .classList.contains("bg-danger");

        console.warn(isbox1red && isbox2red && isbox3red);

        if (isbox1red && isbox2red && isbox3red) {
          console.log("red is winner");
        }
        const isbox1green = document
          .getElementById("b1")
          .classList.contains("bg-danger");
        const isbox2green = document
          .getElementById("b2")
          .classList.contains("bg-danger");
        const isbox3green = document
          .getElementById("b3")
          .classList.contains("bg-danger");
        if (isbox1green && isbox2green && isbox3green) {
          console.log("green is winner");

        }*/
      }
      function checkwinner(id1, id2, id3, color) {
        const isbox1 = document.getElementById(id1).classList.contains(color);
        const isbox2 = document.getElementById(id2).classList.contains(color);
        const isbox3 = document.getElementById(id3).classList.contains(color);
        if (isbox1 && isbox2 && isbox3) {
          console.log(`${color} is winner`);
          document.getElementById("output").innerHTML = `
          <div class="alert alert-success">
            ${color === "bg-danger" ? "player 1" : "player2"}win</div>`;

          setTimeout(function () {
            document.getElementById("output").innerHTML = "";
          }, 3000);

          setTimeout(function () {
            resetgame();
          }, 2000);
          color === "bg-danger" ? p1Count++ : p2Count++;
          stat();
          return true;
        }
        return false;
      }
      function resetgame() {
        for (let i = 1; i <= 9; i++) {
          document.getElementById(`b${i}`).innerHtml = i;
          document.getElementById(`b${i}`).classList.remove("bg-success");
          document.getElementById(`b${i}`).classList.remove("bg-danger");
        }
        tCount++;
        stat();
      }
      function stat() {
        totalcount.innerHTML = tCount;
        drawcount.innerHTML = dCount;
        player1wincount.innerHTML = p1Count;
        player2wincount.innerHTML = p2Count;
      }
      function checkallfill() {
        let boxcount = 0;
        for (let i = 1; i <= 9; i++) {
          const isred = document
            .getElementById(`b${i}`)
            .classList.contains("bg-success");
          const isgreen = document
            .getElementById(`b${i}`)
            .classList.contains("bg-danger");
          if (isred || isgreen) {
            boxcount++;
          }
        }

        return boxcount === 9 ? true : false;
      }
    
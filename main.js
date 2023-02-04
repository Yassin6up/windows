let body = document.querySelector("body");
// start change the background
let bgImage = "./bgImages/deafultImg.jpg";
function changeBG(image) {
  body.style.backgroundImage = `url(${image})`;
}
changeBG(bgImage);
// end the change background

// start time
const time = new Date();
console.log(time.getHours() + ":" + time.getMinutes());
let timeEle = document.getElementById("Time");

const dateEle = document.createElement("span");
dateEle.innerHTML = `${time.getHours()}:${time.getMinutes()}`;
dateEle.classList.add("timee");

const historyEle = document.createElement("span");
historyEle.innerHTML = `${time.getDay() + 1}/${
  time.getMonth() + 1
}/${time.getFullYear()}`;
historyEle.classList.add("date");

timeEle.appendChild(dateEle);
timeEle.appendChild(historyEle);

setInterval(() => {
  dateEle.innerHTML = `${time.getHours() + 1}:${time.getMinutes() + 1}`;
  historyEle.innerHTML = `${time.getDay() + 1}/${
    time.getMonth() + 1
  }/${time.getFullYear()}`;
}, 1000);
// end time

let start = document.getElementById("start");
start.onclick = () => {
  document.getElementById("menu").classList.toggle("active");
};
// turn off pc

document.querySelector("#off").onclick = () => window.close();
document.querySelector("#sleep").onclick = () => {
  if (document.querySelector("#sleep").className === "lol") {
    document.body.style.boxShadow = "inset 0 0 0  0 white";
    document.querySelector("#sleep").classList.remove("lol");
  } else {
    document.querySelector("#sleep").className = "lol";
    document.body.style.boxShadow = "inset 0 0 100000px  99px black";
  }
};

// end the turn of pc

class Table {
  constructor(
    nameFL,
    Logo,
    desc,
    fl1,
    fl2,
    fl3,
    fl4,
    fl5,
    fl6,
    fl7,
    linkF1,
    linkF2,
    linkF3,
    linkF4,
    linkF5,
    linkF6,
    srcF1,
    srcF2,
    srcF3,
    srcF4,
    srcF5,
    srcF6
  ) {
    (this.Title = nameFL),
      (this.Logo = Logo),
      (this.desc = desc),
      (this.folder1 = fl1),
      (this.folder2 = fl2),
      (this.folder3 = fl3),
      (this.folder4 = fl4),
      (this.folder5 = fl5),
      (this.folder6 = fl6),
      (this.folder6 = fl7),
      (this.linkFolderBG_1_ = linkF1),
      (this.linkFolderBG_2_ = linkF2),
      (this.linkFolderBG_3_ = linkF3),
      (this.linkFolderBG_3_ = linkF3),
      (this.linkFolderBG_4_ = linkF4),
      (this.linkFolderBG_5_ = linkF5),
      (this.linkFolderBG_6_ = linkF6),
      (this.src1 = srcF1),
      (this.src2 = srcF2),
      (this.src3 = srcF3),
      (this.src4 = srcF4),
      (this.src5 = srcF5),
      (this.src6 = srcF6);
  }
  format() {
    let table = document.createElement("div");
    table.classList.add("Table");
    table.setAttribute("id", "Table");
    let titleDv = document.createElement("div");
    let titleTXT = document.createTextNode(this.Title);
    titleDv.append(titleTXT);

    titleDv.classList.add("title");
    // closing btn
    let close = document.createElement("div");
    let closeTXT = document.createTextNode("X");
    close.setAttribute("id", "close");
    close.append(closeTXT);
    // full screen btn
    let fullSc = document.createElement("div");
    let fullScTXT = document.createTextNode("[]");
    fullSc.setAttribute("id", "full");
    fullSc.append(fullScTXT);
    // exite btn
    let exit = document.createElement("div");
    let exitTXT = document.createTextNode("-");
    exit.append(exitTXT);
    // TODO set all this div in Table

    let iconeTop = document.createElement("div");
    iconeTop.classList.add("iconTop");

    iconeTop.append(exit);
    iconeTop.append(fullSc);
    iconeTop.append(close);

    titleDv.append(iconeTop);
    let navEle = document.createElement("div");
    navEle.classList.add("navEle");
    let fileTXT = document.createTextNode("Files");
    let fileEle = document.createElement("p");
    fileEle.append(fileTXT);
    let EditTXT = document.createTextNode("Edite");
    let editeEle = document.createElement("p");
    editeEle.append(EditTXT);
    let searchTXT = document.createTextNode("Search");
    let searchEle = document.createElement("p");
    searchEle.append(searchTXT);
    let HelpTXT = document.createTextNode("help");
    let helpEle = document.createElement("p");
    helpEle.append(HelpTXT);
    navEle.append(fileEle);
    navEle.append(editeEle);
    navEle.append(searchEle);
    navEle.append(helpEle);

    let secEle = document.createElement("div");
    secEle.classList.add("selection");
    let arrowLeft = document.createElement("img");
    arrowLeft.setAttribute("src", "./Icons/left.png");
    let arrowLeftDiv = document.createElement("div");
    let arrowLeftTXT = document.createTextNode("Left");
    arrowLeftDiv.append(arrowLeft);
    arrowLeftDiv.append(arrowLeftTXT);
    secEle.append(arrowLeftDiv);
    let arrowRight = document.createElement("img");
    arrowRight.setAttribute("src", "./Icons/raghit.png");
    let arrowRightDiv = document.createElement("div");
    let arrowRightTXT = document.createTextNode("Right");
    arrowRightDiv.append(arrowRight);
    arrowRightDiv.append(arrowRightTXT);
    secEle.append(arrowRightDiv);

    let select = document.createElement("img");
    select.setAttribute("src", "./Icons/Select.ico");
    let selectDiv = document.createElement("div");
    let selectTXT = document.createTextNode("Select");
    selectDiv.append(select);
    selectDiv.append(selectTXT);
    secEle.append(selectDiv);
    let delTmg = document.createElement("img");
    delTmg.setAttribute("src", "./Icons/Delete.ico");
    let deleteDiv = document.createElement("div");
    let deleteTXT = document.createTextNode("Delete");
    deleteDiv.append(delTmg);
    deleteDiv.append(deleteTXT);
    secEle.append(deleteDiv);
    let line = document.createElement("span");
    line.classList.add("line");
    secEle.append(line);

    let cutImg = document.createElement("img");
    cutImg.setAttribute("src", "./Icons/cut.png");
    let cutDiv = document.createElement("div");
    let cutTXT = document.createTextNode("Cut");
    cutDiv.append(cutImg);
    cutDiv.append(cutTXT);
    secEle.append(cutDiv);
    let copyImg = document.createElement("img");
    copyImg.setAttribute("src", "./Icons/Copy.ico");
    let copyDiv = document.createElement("div");
    let copyTXT = document.createTextNode("Copy");
    copyDiv.append(copyImg);
    copyDiv.append(copyTXT);
    secEle.append(copyDiv);
    let pastImg = document.createElement("img");
    pastImg.setAttribute("src", "./Icons/past.ico");
    let pastDiv = document.createElement("div");
    let pastTXT = document.createTextNode("Copy");
    pastDiv.append(pastImg);
    pastDiv.append(pastTXT);
    secEle.append(pastDiv);
    let lin = document.createElement("span");
    lin.classList.add("line");
    secEle.append(lin);

    let undoImg = document.createElement("img");
    undoImg.setAttribute("src", "./Icons/Undo.ico");
    let undoDiv = document.createElement("div");
    let undoTXT = document.createTextNode("Select");
    undoDiv.append(undoImg);
    undoDiv.append(undoTXT);
    secEle.append(undoDiv);
    let viewTmg = document.createElement("img");
    viewTmg.setAttribute("src", "./Icons/View.ico");
    let viewDiv = document.createElement("div");
    let viewTXT = document.createTextNode("Delete");
    viewDiv.append(viewTmg);
    viewDiv.append(viewTXT);
    secEle.append(viewDiv);
    let linee = document.createElement("span");
    linee.classList.add("line");
    secEle.append(linee);
    let prupImg = document.createElement("img");
    prupImg.setAttribute("src", "./Icons/prup.ico");
    let prupDiv = document.createElement("div");
    let prupTXT = document.createTextNode("Properties");
    prupDiv.append(prupImg);
    prupDiv.append(prupTXT);
    secEle.append(prupDiv);

    let content = document.createElement("div");
    let page1Title = document.createElement("div");
    let page2Filles = document.createElement("div");

    content.classList.add("contentTable");
    page1Title.className = "pagesec1";
    page2Filles.className = "page2Filles";

    let logoDIV = document.createElement("div");
    logoDIV.classList.add("logoDiv");
    let logoIMG = document.createElement("img");
    logoIMG.setAttribute("src", `${this.Logo}`);
    let logoTXT = document.createTextNode(this.Title);
    logoDIV.append(logoIMG);
    logoDIV.append(logoTXT);
    let colorNav = document.createElement("div");
    colorNav.classList.add("colors");
    let desc = document.createElement("p");
    let descTXT = document.createTextNode(this.desc);
    desc.append(descTXT);
    let nameOfFile = [
      this.folder1,
      this.folder2,
      this.folder3,
      this.folder4,
      this.folder5,
      this.folder6,
    ];
    let imgLogo = [
      this.linkFolderBG_1_,
      this.linkFolderBG_2_,
      this.linkFolderBG_3_,
      this.linkFolderBG_4_,
      this.linkFolderBG_5_,
      this.linkFolderBG_6_,
    ];
    let srcFiles = [
      this.src1,
      this.src2,
      this.src3,
      this.src4,
      this.src5,
      this.src6,
    ];
    let filesDiv;
    for (let i = 0; i < nameOfFile.length; i++) {
      filesDiv = document.createElement("div");
      filesDiv.setAttribute("src", srcFiles[i]);
      let filesLogo = document.createElement("img");
      filesLogo.setAttribute("src", imgLogo[i]);
      let filesTXT = document.createTextNode(nameOfFile[i]);
      filesDiv.append(filesLogo);
      filesDiv.append(filesTXT);
      page2Filles.append(filesDiv);
      filesDiv.classList = "filebtn";
      console.log(srcFiles[i]);
    }

    page2Filles.querySelectorAll("div").forEach((ele, index) => {
      ele.onclick = () => {
        let regulr = /^www/gi;

        if (index === 0) {
          try {
            if (regulr.test(this.src1)) {
              /* khasni ndir whaed lfonction 3la hsab chno syd wrek
               mtlan wrek 3la about itl3o lih wahed l table akhor fih dakchi li kyn fl about */
            } else {
              five = 10;
            }
          } catch (error) {
            document
              .getElementById("audios")
              .querySelectorAll("audio")
              .forEach((el, inde) => {
                if (inde === 0) {
                  el.play();
                }
              });
          }
        } else if (index === 1) {
          try {
            if (regulr.test(this.src2)) {
              window.open(this.src2);
            } else {
              five = 10;
            }
          } catch (error) {
            document
              .getElementById("audios")
              .querySelectorAll("audio")
              .forEach((el, inde) => {
                if (inde === 1) {
                  el.play();
                }
              });
          }
        } else if (index === 2) {
          try {
            if (regulr.test(this.src3)) {
              window.open(this.src3);
            } else {
              five = 10;
            }
          } catch (error) {
            document
              .getElementById("audios")
              .querySelectorAll("audio")
              .forEach((el, inde) => {
                if (inde === 2) {
                  el.play();
                }
              });
          }
        } else if (index === 3) {
          try {
            if (regulr.test(this.src4)) {
              window.open(this.src4);
            } else {
              five = 10;
            }
          } catch (error) {
            document
              .getElementById("audios")
              .querySelectorAll("audio")
              .forEach((el, inde) => {
                if (inde === 3) {
                  el.play();
                }
              });
          }
        } else if (index === 4) {
          try {
            if (regulr.test(this.src5)) {
              window.open(this.src5);
            } else {
              five = 10;
            }
          } catch (error) {
            document
              .getElementById("audios")
              .querySelectorAll("audio")
              .forEach((el, inde) => {
                if (inde === 4) {
                  el.play();
                }
              });
          }
        } else if (index === 5) {
          try {
            if (regulr.test(this.src5)) {
              window.open(this.src5);
            } else {
              five = 10;
            }
          } catch (error) {
            document
              .getElementById("audios")
              .querySelectorAll("audio")
              .forEach((el, inde) => {
                if (inde === 4) {
                  el.play();
                }
              });
          }
        }
      };
    });

    page1Title.append(logoDIV);
    page1Title.append(desc);
    page1Title.append(colorNav);
    content.append(page1Title);
    content.append(page2Filles);
    table.append(titleDv);
    table.append(navEle);
    table.append(document.createElement("hr"));
    table.append(secEle);
    table.append(content);
    return table;
  }
}

// this is links of imgs
let bgDF = "./Icons/Folders-Windows-Folder-icon.png";
let quranIMG = "./Icons/music.png";
let gameIco = "./Icons/game.png";
let Gallery = "./Icons/Windows-Live-Gallery-icon.png";

function clicks() {
  document.getElementById("close").onclick = () => {
    document.getElementById("Table").remove();
  };
  document.getElementById("full").onclick = () => {
    document.getElementById("Table").classList.toggle("fullTable");
  };
}

const table = new Table();
//let imagesLogo = [table.src1,table.src2,table.src3,table.src4,table.src5,table.src6]
document.getElementById("thisPc").addEventListener("click", () => {
  table.Title = "This Pc";
  table.Logo = "./Icons/windows-7-system-icon.png";
  table.desc = "This filles for  more info about me ";
  table.folder1 = "About";
  table.folder2 = "Projects";
  table.folder3 = "Photos";
  table.folder4 = "musics";
  table.folder5 = "Games";
  table.folder6 = "Downloads";
  table.linkFolderBG_1_ = bgDF;
  table.linkFolderBG_2_ = bgDF;
  table.linkFolderBG_3_ = Gallery;
  table.linkFolderBG_4_ = quranIMG;
  table.linkFolderBG_5_ = gameIco;
  table.linkFolderBG_6_ = bgDF;
  table.src1 = "www.facebook.com";
  table.src2 = "www.xbox.com";
  table.src3 = "www.xbox.com";
  table.src4 = "www.xbox.com";
  table.src5 = "www.xbox.com";
  table.src6 = "www.games.com";

  document.body.append(table.format());
  clicks();
});

// TODO khasni nzid lhwayj lkhrin b7al this pc ndir fihom title o bg li atji m9ada m3a title
// todo khasni ndir wahed l foreach bli ila user wrek 3la chi music tdir wahed l if ila wrek 3la hadik bdabt li b4it ntl9 lih l music li mnasba lmiha

document.getElementById("Gallery").addEventListener("click", () => {
  table.Title = "Gallery";
  table.Logo = "./Icons/Windows-Live-Gallery-icon.png";
  table.desc = "My Projects Yassine";
  table.folder1 = "Image 1";
  table.folder2 = "image 2";
  table.folder3 = "GAMING website";
  table.folder4 = "HQP site";
  table.folder5 = "finito game";
  table.folder6 = "image 3";
  document.body.append(table.format());
  clicks();
});

document.getElementById("media").addEventListener("click", () => {
  table.Title = "Media Player";
  table.Logo = "./Icons/Windows-media-player-icon.png";
  table.desc = "My youtube channels and my vedios";
  table.folder1 = "Surat yassin";
  table.folder2 = "Surat al7a9a ";
  table.folder3 = "Surat alnba2";
  table.folder4 = "Surat arrhman";
  table.folder5 = "Surat almolk";
  table.folder6 = "Surat Ali imraan";
  table.linkFolderBG_1_ = quranIMG;
  table.linkFolderBG_2_ = quranIMG;
  table.linkFolderBG_3_ = quranIMG;
  table.linkFolderBG_4_ = quranIMG;
  table.linkFolderBG_5_ = quranIMG;
  table.linkFolderBG_6_ = quranIMG;

  document.body.append(table.format());
  clicks();
});
document.getElementById("File").addEventListener("click", () => {
  table.Title = "Filles";
  table.Logo = "./Icons/Folders-Windows-Folder-icon.png";
  table.desc = "Local Disk (C:)";
  document.body.append(table.format());
  clicks();
});

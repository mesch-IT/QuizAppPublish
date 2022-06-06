//variables
let count = 0
let home = document.querySelector('.home')
let radioGroup = document.querySelectorAll('.form')
let divs = document.getElementsByClassName('elements')
let div1 = document.querySelector('.div1')
let div2 = document.querySelector('.div2')
let div3 = document.querySelector('.div3')
let div4 = document.querySelector('.div4')
let div5 = document.querySelector('.div5')
let div6 = document.querySelector('.div6')
let div7 = document.querySelector('.div7')
let div8 = document.querySelector('.div8')
let div9 = document.querySelector('.div9')
let div10 = document.querySelector('.div10')
let div11 = document.querySelector('.div11')
let div12 = document.querySelector('.div12')
let div13 = document.querySelector('.div13')
let div14 = document.querySelector('.div14')
let div15 = document.querySelector('.div15')
let succes = document.querySelector('#succes-section')
let fail = document.querySelector('#fail')
let nameSucces = document.getElementById('nameSucces')
let emailSucces = document.getElementById('emailSucces')
let nameFail = document.getElementById('nameFail')
let emailFail = document.getElementById('emailFail')
let printScoreFail = document.getElementById('printScoreFail')
let printScore = document.getElementById('printScore')
let innerbar = document.querySelectorAll('.innerbar')
let text = document.querySelectorAll('.tex')
let btnaccueilSucces = document.getElementById('btn-accueilSucces')
let btnaccueilFail = document.getElementById('btn-accueilFail')
let btnSuivant1 = document.getElementById('btn-suivant1')
let btnSuivant2 = document.getElementById('btn-suivant2')
let btnSuivant3 = document.getElementById('btn-suivant3')
let btnSuivant4 = document.getElementById('btn-suivant4')
let btnSuivant5 = document.getElementById('btn-suivant5')
let btnSuivant6 = document.getElementById('btn-suivant6')
let btnSuivant7 = document.getElementById('btn-suivant7')
let btnSuivant8 = document.getElementById('btn-suivant8')
let btnSuivant9 = document.getElementById('btn-suivant9')
let btnSuivant10 = document.getElementById('btn-suivant10')
let btnSuivant11 = document.getElementById('btn-suivant11')
let btnSuivant12 = document.getElementById('btn-suivant12')
let btnSuivant13 = document.getElementById('btn-suivant13')
let btnSuivant14 = document.getElementById('btn-suivant14')
let btnSuivant15 = document.getElementById('btn-suivant15')
let btnQuitter = document.querySelectorAll('.btn-quitter')
let nameError = document.getElementById('nameError')
let emailError = document.getElementById('emailError')
let input = document.querySelectorAll('.input')
// event listeners
eventlisteners()

function eventlisteners() {
  document.querySelector('#formAccueil').addEventListener('submit', newUser)
  radioGroup[0].addEventListener('click', enableButton1)
  radioGroup[1].addEventListener('click', enableButton2)
  radioGroup[2].addEventListener('click', enableButton3)
  radioGroup[3].addEventListener('click', enableButton4)
  radioGroup[4].addEventListener('click', enableButton5)
  radioGroup[5].addEventListener('click', enableButton6)
  radioGroup[6].addEventListener('click', enableButton7)
  radioGroup[7].addEventListener('click', enableButton8)
  radioGroup[8].addEventListener('click', enableButton9)
  radioGroup[9].addEventListener('click', enableButton10)
  radioGroup[10].addEventListener('click', enableButton11)
  radioGroup[11].addEventListener('click', enableButton12)
  radioGroup[12].addEventListener('click', enableButton13)
  radioGroup[13].addEventListener('click', enableButton14)
  radioGroup[14].addEventListener('click', enableButton15)
  btnSuivant1.addEventListener('click', bttnSuivant1)
  btnSuivant2.addEventListener('click', bttnSuivant2)
  btnSuivant3.addEventListener('click', bttnSuivant3)
  btnSuivant4.addEventListener('click', bttnSuivant4)
  btnSuivant5.addEventListener('click', bttnSuivant5)
  btnSuivant6.addEventListener('click', bttnSuivant6)
  btnSuivant7.addEventListener('click', bttnSuivant7)
  btnSuivant8.addEventListener('click', bttnSuivant8)
  btnSuivant9.addEventListener('click', bttnSuivant9)
  btnSuivant10.addEventListener('click', bttnSuivant10)
  btnSuivant11.addEventListener('click', bttnSuivant11)
  btnSuivant12.addEventListener('click', bttnSuivant12)
  btnSuivant13.addEventListener('click', bttnSuivant13)
  btnSuivant14.addEventListener('click', bttnSuivant14)
  btnSuivant15.addEventListener('click', bttnSuivant15)
  btnaccueilFail.addEventListener('click', acceuilFail)
btnaccueilSucces.addEventListener('click', acceuilSucces)
}
// functions
let timer = null
let names
let emails
let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// management the first question page
function newUser(e) {
  e.preventDefault()
  names = document.getElementById('name').value
  emails = document.getElementById('email').value
    if (names == "") {
    nameError.style.display = 'block'
    nameError.innerText = "N'oubliez pas de renseigner votre nom avant de commencer le Quiz."
    input[0].style.border = '1px solid red'
  }

  if(names.length > 0 && names.length < 2) {
    nameError.innerHTML = 'Veuillez renseigner un nom avec au moins deux caractères.'
    nameError.style.display = 'block'
    input[0].style.border = '1px solid red'
  }
  if (emails  == "") {
    
    emailError.innerText = " N'oubliez pas de renseigner votre email avant de commencer le Quiz."
    emailError.style.display = 'block'
    input[1].style.border = '1px solid red'
  }
   if (!(checkEmail.test(emails)) && emails.length > 0) {
    emailError.innerText = " Veuillez renseigner une adresse mail valide."
    emailError.style.display = 'block'
    input[1].style.border = '1px solid red'
   
  }
  if ((names.length >= 2) && (checkEmail.test(emails))) {
    // add class homepage to home section
    home.style.display = 'none'
    // set timer for the first question
    let width = 60
    let progress
    timer = setInterval(function () {
      progress = (width / 60) * 100
      width--
      innerbar[0].style.width = progress + '%'
      text[0].textContent = width

      if (width == 0) {
        enableButton1()
        btnSuivant1.click()



      }
    }, 1000)
    // display first section
    div1.style.display = 'block'
  }
 
 

}

// management the second question page
function bttnSuivant1() {

  clearInterval(timer)
  timer = null

  div1.style.display = 'none'
  div2.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[1].style.width = progress + '%'
    text[1].textContent = width

    if (width == 0) {
      enableButton2()
      btnSuivant2.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == ".js") {
      count += 1
    }

  }
}
// management the third question page
function bttnSuivant2() {
  clearInterval(timer)
  timer = null
  div2.style.display = 'none'
  div3.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[2].style.width = progress + '%'
    text[2].textContent = width

    if (width == 0) {
      enableButton3()
      btnSuivant3.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "sum()") {
      count += 1
    }
  }
  console.log(count);

}
// manage the four page

function bttnSuivant3() {
  clearInterval(timer)
  timer = null
  div3.style.display = 'none'
  div4.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[3].style.width = progress + '%'
    text[3].textContent = width

    if (width == 0) {
      enableButton4()
      btnSuivant4.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "script") {
      count += 1
    }
  }
  console.log(count);

}
// manage the five question
function bttnSuivant4() {

  clearInterval(timer)
  timer = null
  div4.style.display = 'none'
  div5.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[4].style.width = progress + '%'
    text[4].textContent = width

    if (width == 0) {
      enableButton5()
      btnSuivant5.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "join()") {
      count += 1
    }
  }
  console.log(count);


}
// manage the six question
function bttnSuivant5() {
  clearInterval(timer)
  timer = null
  div5.style.display = 'none'
  div6.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[5].style.width = progress + '%'
    text[5].textContent = width

    if (width == 0) {
      enableButton6()
      btnSuivant6.click()
    }
  }, 1000)

  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "body") {
      count += 1
    }
  }
  console.log(count);

}
// manage the seven question
function bttnSuivant6() {
  clearInterval(timer)
  timer = null
  div6.style.display = 'none'
  div7.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[6].style.width = progress + '%'
    text[6].textContent = width

    if (width == 0) {
      enableButton7()
      btnSuivant7.click()
    }
  }, 1000)


  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "//Ceci est un commentaire") {
      count += 1
    }
  }
  console.log(count);
}
// manage the eight section
function bttnSuivant7() {
  clearInterval(timer)
  timer = null
  div7.style.display = 'none'
  div8.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[7].style.width = progress + '%'
    text[7].textContent = width

    if (width == 0) {
      enableButton8()
      btnSuivant8.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "sort()") {
      count += 1
    }
  }
  console.log(count);
}
// manage the nine section
function bttnSuivant8() {
  clearInterval(timer)
  timer = null
  div8.style.display = 'none'
  div9.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[8].style.width = progress + '%'
    text[8].textContent = width

    if (width == 0) {
      enableButton9()
      btnSuivant9.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "while (i <= 5)") {
      count += 1
    }
  }
  console.log(count);

}

// manage the ten section
function bttnSuivant9() {

  clearInterval(timer)
  timer = null
  div9.style.display = 'none'
  div10.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[9].style.width = progress + '%'
    text[9].textContent = width

    if (width == 0) {
      enableButton10()
      btnSuivant10.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "tab = new Array(10)") {
      count += 1
    }
  }
  console.log(count);

}
//  manage the eleven section
function bttnSuivant10() {
  clearInterval(timer)
  timer = null
  div10.style.display = 'none'
  div11.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[10].style.width = progress + '%'
    text[10].textContent = width

    if (width == 0) {
      enableButton11()
      btnSuivant11.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "Un pour chaque argument") {
      count += 1
    }
  }
  console.log(count);


}
function bttnSuivant11() {
  clearInterval(timer)
  timer = null
  div11.style.display = 'none'
  div12.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[11].style.width = progress + '%'
    text[11].textContent = width

    if (width == 0) {
      enableButton12()
      btnSuivant12.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "Y") {
      count += 1
    }
  }
  console.log(count);


}

// manage the thirteen section
function bttnSuivant12() {
  clearInterval(timer)
  timer = null
  div12.style.display = 'none'
  div13.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[12].style.width = progress + '%'
    text[12].textContent = width

    if (width == 0) {
      enableButton13()
      btnSuivant13.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "keypress") {
      count += 1
    }
  }
  console.log(count);


}

// manage the fourteen section
function bttnSuivant13() {
  clearInterval(timer)
  timer = null
  div13.style.display = 'none'
  div14.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[13].style.width = progress + '%'
    text[13].textContent = width

    if (width == 0) {
      enableButton14()
      btnSuivant14.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "A") {
      count += 1
    }
  }
  console.log(count);

}
// manage the fifteen section
function bttnSuivant14() {
  clearInterval(timer)
  timer = null
  div14.style.display = 'none'
  div15.style.display = 'block'
  let width = 60
  let progress
  timer = setInterval(function () {
    progress = (width / 60) * 100
    width--
    innerbar[14].style.width = progress + '%'
    text[14].textContent = width

    if (width == 0) {
      enableButton15()
      btnSuivant15.click()
    }
  }, 1000)
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "return") {
      count += 1
    }
  }
  console.log(count);

}
// the end section
function bttnSuivant15() {
  clearInterval(timer)
  timer = null
  div15.style.display = 'none'
  let answers = document.querySelector('input[ name="answer"]:checked')
  if (answers) {
    getSelected = answers.value
    if (getSelected == "charAt()") {
      count += 1
    }
  }
  console.log(count);


  if (count > 7) {
    nameSucces.textContent = names
    emailSucces.textContent = emails
    succes.style.display = 'block'
    printScore.textContent = count + '/15'
  } else {
    nameFail.textContent = names
    emailFail.textContent = emails
    fail.style.display = 'block'
    printScoreFail.textContent = count + '/15'
  }

}
btnQuitter.forEach(btn => {
  btn.addEventListener('click', () => {

    if (count > 7) {
      divs[0].style.display = 'none'
      nameSucces.textContent = names
      emailSucces.textContent = emails
      succes.style.display = 'block'
      printScore.textContent = count + '/15'
    } else {
      hideDivs()
      nameFail.textContent = names
      emailFail.textContent = emails
      fail.style.display = 'block'
      printScoreFail.textContent = count + '/15'
    }
    btnaccueilFail.addEventListener('click', acceuilFail)
    btnaccueilSucces.addEventListener('click', acceuilSucces)
  })
})

function hideDivs() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none'

  }
}
function enableButton1() {
    btnSuivant1.removeAttribute('disabled')
    btnSuivant1.style.background = 'green'
  }
  
  function enableButton2() {
    btnSuivant2.removeAttribute('disabled')
    btnSuivant2.style.background = 'green'
  }
  function enableButton3() {
    btnSuivant3.removeAttribute('disabled')
    btnSuivant3.style.background = 'green'
  }
  function enableButton4() {
    btnSuivant4.removeAttribute('disabled')
    btnSuivant4.style.background = 'green'
  }
  function enableButton5() {
    btnSuivant5.removeAttribute('disabled')
    btnSuivant5.style.background = 'green'
  }
  function enableButton6() {
    btnSuivant6.removeAttribute('disabled')
    btnSuivant6.style.background = 'green'
  }
  function enableButton7() {
    btnSuivant7.removeAttribute('disabled')
    btnSuivant7.style.background = 'green'
  }
  function enableButton8() {
    btnSuivant8.removeAttribute('disabled')
    btnSuivant8.style.background = 'green'
  }
  function enableButton9() {
    btnSuivant9.removeAttribute('disabled')
    btnSuivant9.style.background = 'green'
  }
  function enableButton10() {
    btnSuivant10.removeAttribute('disabled')
    btnSuivant10.style.background = 'green'
  }
  function enableButton11() {
    btnSuivant11.removeAttribute('disabled')
    btnSuivant11.style.background = 'green'
  }
  function enableButton12() {
    btnSuivant12.removeAttribute('disabled')
    btnSuivant12.style.background = 'green'
  }
  function enableButton13() {
    btnSuivant13.removeAttribute('disabled')
    btnSuivant13.style.background = 'green'
  }
  function enableButton14() {
    btnSuivant14.removeAttribute('disabled')
    btnSuivant14.style.background = 'green'
  }
  function enableButton15() {
    btnSuivant15.removeAttribute('disabled')
    btnSuivant15.style.background = 'green'
  }
function acceuilSucces() {
  document.location.reload(true)
}
function acceuilFail() {
  
  document.location.reload(true)
}
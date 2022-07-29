/*Fonctions boutons*/

function exp(btnexp){
    const para = document.getElementById('paragraphe');
    para.setAttribute('class', 'experience');
    const paraexp = document.getElementsByClassName('experience');
    paraexp.innerHTML = ""
    const parabg = document.getElementById('fondpara');
    parabg.setAttribute('class', 'expbg');
}
function comp(btncomp){
    const para = document.getElementById('paragraphe');
    para.setAttribute('class', 'competences');
    const paracomp = document.getElementsByClassName('competences');
    paracomp.innerHTML = ""
    const parabg = document.getElementById('fondpara');
    parabg.setAttribute('class', 'compbg');
}
function forma(btnforma){
    const para = document.getElementById('paragraphe');
    para.setAttribute('class', 'formations');
    const paraforma = document.getElementsByClassName('formations');
    paraforma.innerHTML = ""
    const parabg = document.getElementById('fondpara');
    parabg.setAttribute('class', 'formabg');
}
function infos(btninfos){
    const para = document.getElementById('paragraphe');
    para.setAttribute('class', 'informations');
    const parainfos = document.getElementsByClassName('informations');
    parainfos.innerHTML = ""
    const parabg = document.getElementById('fondpara');
    parabg.setAttribute('class', 'infobg');
}

/*Fonctions boutons*/
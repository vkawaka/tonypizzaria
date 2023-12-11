'use strict'

let liked = false

function toggleLike(){
  const coracaoImg = document.getElementById('likeIcon')
  const coracaoDiv = document.getElementById('likeDiv')
 
  liked = !liked

  if(liked){
    coracaoImg.src = '../img/coracaoVermelho.png'
  }else{
    coracaoImg.src = '../img/coracaoVazio.png'
  }
}
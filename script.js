function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dev")

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')

  // }
  // else {
  //   html.classList.add('light')
  // }

  // Uso do Toggle para substituir o if else acima

  // pegar a tag img ; substituir a imagem
  const img = document.querySelector('#profile img')
  //se tiver light add imagem light, caso contrario dark


  if (html.classList.contains('dev')) {
    img.setAttribute("src", "./assets/WZD-Dev.png") 
    
  }
  else {
    img.setAttribute('src', './assets/WZD-Adm.png') 
    
  }
}
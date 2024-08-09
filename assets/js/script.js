//GRUPO: Victoria Azola, Eduardo Garcia, Pablo Cruz

let funcionAutomatica = (() => {
  
  //funcion privada
  let setVIdeo = function (id, url) {
    document.getElementById(id).setAttribute("src", url)
  }

  //retorno funcion como publica, debe tener {}
  return { setVIdeo }
  
})()

class Multimedia {
  #url
  constructor(url) {
    this.#url = url
  }

  get url() {
    return this.#url
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video"
  }
}

class Reproductor extends Multimedia {
  #id
  constructor(id, url) {
    super(url)
    this.#id = id
  }

  playMultimedia() {
    funcionAutomatica.setVIdeo(this.#id, this.url)
  }

  setInicio(tiempo) {
    let nuevoUrl = `${this.url}&amp;start=${tiempo}`
    funcionAutomatica.setVIdeo(this.#id, nuevoUrl)
  }
}

//nuevas instancias
let musica = new Reproductor("musica", "https://www.youtube.com/embed/9hdVzYi1prc?si=de20kL44RPscHrgJ")
let pelicula = new Reproductor("peliculas", "https://www.youtube.com/embed/OVDhmpHiZWU?si=hNKGPi3dftI7emAq")
let serie = new Reproductor("series", "https://www.youtube.com/embed/_1qGhChKL8s?si=lxwFudBITT0k0znT" )

//invocar metodo playMultimedia
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

//usar metodo setInicio
musica.setInicio(30);
pelicula.setInicio(100);
serie.setInicio(50);
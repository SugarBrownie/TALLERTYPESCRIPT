class Serie {

    constructor(
        public id: number,
        public name: string,
        public productora: string,
        public seasons: number,
        public descripcion: string,
        public link: string,
        public imagen: string

    ) {}
}

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
     "https://i.imgur.com/TDCEV1S.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
  ];
   
function meterSeriesEnTabla(series: Serie[]): void {

    const tablaEnHtml = document.getElementById("TabladelasSeries")

    let numseasons: number = 0;
    let totalSeries: number = 0;

    series.forEach((serie) => {


        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${serie.id}</td>
        <td><a href="#" class="serie-link"><u>${serie.name}</u></a></td>
        <td>${serie.productora}</td>
        <td>${serie.seasons}</td>`;
        
        fila.addEventListener('click', () => {
                mostrarDetalleSerie(serie);
        });

        tablaEnHtml?.appendChild(fila);

        numseasons += serie.seasons;
        totalSeries++;



    });

    const promedioTemporadas: number = numseasons/totalSeries;

    const filapromedio = document.createElement('tr');
    filapromedio.innerHTML = `<td colspan="4"> Promedio de temporadas: ${promedioTemporadas} </td>`
    tablaEnHtml?.appendChild(filapromedio)

} 


function mostrarDetalleSerie(serie: Serie): void {
    const detalle = document.getElementById("detalleSerie")

    if (detalle) {
        detalle.innerHTML = `
        
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${serie.imagen} alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title"> ${serie.name}</h5>
        <p class="card-text">${serie.descripcion}</p>
        <a href="${serie.link}" class="btn btn-primary">Ir a verla</a>
        </div>
        </div>
        `
    }
}

meterSeriesEnTabla(series);
class Filme{
    constructor(title, year, genre, director, duration){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
        this.actors = [];
        this.duration = duration;
    }

    Reproduct(){
        console.log("Reproducting")
    }

    Pause(){
        console.log("Pausing ||")
    }

    Resume(){
        console.log("Resuming |>")
    }

    Forward(){
        console.log("Forwarding >>")
    }

    Backward(){
        console.log("Backwarding <<")
    }

    Exit(){
        console.log("Exiting")
    }
}

let stalker = new Filme("Stalker", 1979, "SciFi", "Tarkovsky", "2h43");


console.log("Nome: " + stalker.title);
console.log("Ano: " + stalker.year);
console.log("Gênero: " + stalker.genre);


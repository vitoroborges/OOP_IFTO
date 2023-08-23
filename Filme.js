class Filme{
    constructor(){
        this.title = "";
        this.year = 0;
        this.genre = "";
        this.director = "";
        this.actors = [];
        this.duration = 0;
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

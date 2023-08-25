class Dado{
    static D6(){
        console.log(Math.floor((Math.random() * 6)+1));
    }

    static D12(){
        console.log(Math.floor((Math.random() * 12)+1));
    }

    static D20(){
        console.log(Math.floor((Math.random() * 20)+1));
    }
}

Dado.D6();
Dado.D12();
Dado.D20();

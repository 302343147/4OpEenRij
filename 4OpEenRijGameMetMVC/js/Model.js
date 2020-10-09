class Model
{

    constructor()
    {
        this.vakjes = new Array(6);
        for(let i = 0; i < 6; i++)
        {
            this.vakjes[i] = new Array(7);
        }
        this.leegVakjes();
    }

    leegVakjes()
    {
        for(let rij=0;rij<=5;rij++)
        {
            for(let kolom=0;kolom<=6;kolom++)
            {
                this.vakjes[rij][kolom]="leeg";
            }
        }
    }

    magZet(kolom)
    {
        let playerChange = document.getElementById("playerchange").innerText;
        for(let rij=5;rij>=0;rij--)
        {
            if(this.vakjes[rij][kolom] === "leeg")
            {
                console.log( "Rij : " + rij);
                console.log( "Kolom : " + kolom);
                if(playerChange === "Player1"){
                    this.vakjes[rij][kolom]="rood";
                    return true;
                }
                else{
                    this.vakjes[rij][kolom]="geel";
                    return true;
                }
            }
        }
        return false;
    }

    playerWin(){ //Dit kon slimmer, maar ik had alleen één idee over hoe ik de winsysteem zou kunnen maken.
        let name1 = document.getElementById("player1name").innerText;
        name1 = name1.replace("Points:", "");
        name1 = name1.replace("Player", "");
        name1 = name1.replace(/[0-9]/g, "");

        let name2 = document.getElementById("player2name").innerText;
        name2 = name2.replace("Points:", "");
        name2 = name2.replace("Player", "");
        name2 = name2.replace(/[0-9]/g, "");

        let points1 = Number(document.getElementById("points1").innerText);
        let points2 = Number(document.getElementById("points2").innerText);

        for (let rij = 5; rij >= 0; rij--){
            if(this.vakjes[rij][0] === "rood" && this.vakjes[rij][1] === "rood" && this.vakjes[rij][2] === "rood" && this.vakjes[rij][3] === "rood"){
                alert(name1 + " rood wint!");
                points1++;
                document.getElementById("points1").innerText = points1;
                this.leegVakjes();
            }
            if(this.vakjes[rij][1] === "rood" && this.vakjes[rij][2] === "rood" && this.vakjes[rij][3] === "rood" && this.vakjes[rij][4] === "rood"){
                alert(name1 + " rood wint!");
                points1++;
                document.getElementById("points1").innerText = points1;
                this.leegVakjes();
            }
            if(this.vakjes[rij][2] === "rood" && this.vakjes[rij][3] === "rood" && this.vakjes[rij][4] === "rood" && this.vakjes[rij][5] === "rood"){
                alert(name1 + " rood wint!");
                points1++;
                document.getElementById("points1").innerText = points1;
                this.leegVakjes();
            }
            if(this.vakjes[rij][3] === "rood" && this.vakjes[rij][4] === "rood" && this.vakjes[rij][5] === "rood" && this.vakjes[rij][6] === "rood"){
                alert(name1 + " rood wint!");
                points1++;
                document.getElementById("points1").innerText = points1;
                this.leegVakjes();
            }
            if(this.vakjes[rij][0] === "geel" && this.vakjes[rij][1] === "geel" && this.vakjes[rij][2] === "geel" && this.vakjes[rij][3] === "geel"){
                alert(name2 + " geel wint!");
                points2++;
                document.getElementById("points2").innerText = points2;
                this.leegVakjes();
            }
            if(this.vakjes[rij][1] === "geel" && this.vakjes[rij][2] === "geel" && this.vakjes[rij][3] === "geel" && this.vakjes[rij][4] === "geel"){
                alert(name2 + " geel wint!");
                points2++;
                document.getElementById("points2").innerText = points2;
                this.leegVakjes();
            }
            if(this.vakjes[rij][2] === "geel" && this.vakjes[rij][3] === "geel" && this.vakjes[rij][4] === "geel" && this.vakjes[rij][5] === "geel"){
                alert(name2 + " geel wint!");
                points2++;
                document.getElementById("points2").innerText = points2;
                this.leegVakjes();
            }
            if(this.vakjes[rij][3] === "geel" && this.vakjes[rij][4] === "geel" && this.vakjes[rij][5] === "geel" && this.vakjes[rij][6] === "geel"){
                alert(name2 + " geel wint!");
                points2++;
                document.getElementById("points2").innerText = points2;
                this.leegVakjes();
            }
        }
        for(let kolom = 0; kolom <= 6; kolom++){
            if(this.vakjes[5][kolom] === "rood" && this.vakjes[4][kolom] === "rood" && this.vakjes[3][kolom] === "rood" && this.vakjes[2][kolom] === "rood"){
                alert(name1 + " rood wint!");
                points1++;
                document.getElementById("points1").innerText = points1;
                this.leegVakjes();
            }
            if(this.vakjes[4][kolom] === "rood" && this.vakjes[3][kolom] === "rood" && this.vakjes[2][kolom] === "rood" && this.vakjes[1][kolom] === "rood"){
                alert(name1 + " rood wint!");
                points1++;
                document.getElementById("points1").innerText = points1;
                this.leegVakjes();
            }
            if(this.vakjes[3][kolom] === "rood" && this.vakjes[2][kolom] === "rood" && this.vakjes[1][kolom] === "rood" && this.vakjes[0][kolom] === "rood"){
                alert(name1 + " rood wint!");
                points1++;
                document.getElementById("points1").innerText = points1;
                this.leegVakjes();
            }
            if(this.vakjes[5][kolom] === "geel" && this.vakjes[4][kolom] === "geel" && this.vakjes[3][kolom] === "geel" && this.vakjes[2][kolom] === "geel"){
                alert(name2 + " geel wint!");
                points2++;
                document.getElementById("points2").innerText = points2;
                this.leegVakjes();
            }
            if(this.vakjes[4][kolom] === "geel" && this.vakjes[3][kolom] === "geel" && this.vakjes[2][kolom] === "geel" && this.vakjes[1][kolom] === "geel"){
                alert(name2 + " geel wint!");
                points2++;
                document.getElementById("points2").innerText = points2;
                this.leegVakjes();
            }
            if(this.vakjes[3][kolom] === "geel" && this.vakjes[2][kolom] === "geel" && this.vakjes[1][kolom] === "geel" && this.vakjes[0][kolom] === "geel"){
                alert(name2 + " geel wint!");
                points2++;
                document.getElementById("points2").innerText = points2;
                this.leegVakjes();
            }
        }
    }

    getModel()
    {
        return this.vakjes;
    }

}
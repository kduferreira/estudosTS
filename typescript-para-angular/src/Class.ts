class characters {

    name: string;
    stregth: number;
    skill: number;



    constructor(name: string, stregth:number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill
    }

 attack(): void {
    console.log(`Attack with ${this.stregth} points`);
 }
}

const p1 = new characters("z0mbie", 500, 300);
p1.attack();
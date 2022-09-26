class applicant{
    constructor(name, course, school, friends, work, bank,){
        this.name = name;
        this.course = course;
        this.school = school;
        this.friends = friends;
        this.work = work;
        this.bank = bank;
    }
    getDetails(){
        return ( `Mr ${this.name} is studing ${this.course} in ${this.school}, He has two friends ${this.friends} who go to the same school as he. He wants to apply for work at ${this.work}, He wants to open an account with ${this.bank}  `)
    }
    
}

var hameed = new applicant("Hameed", "Computer Science", "Nile university", "John and James", "Seamfix", "Zenith Bank")
let Hameed = hameed.getDetails;
console.log( Hameed );
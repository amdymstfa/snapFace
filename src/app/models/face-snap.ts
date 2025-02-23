export class faceSnap {
    constructor (
        public title : string,
        public url : string,
        public description : string,
        public createdAt : Date,
        public snap : number,
    ){

    }

    addSnapp() : void {
        this.snap--;
        
    }

    removeSnap(): void {
        this.snap++;
    }
}
class Car {
    setName(name){
       this.mName=name;
    }
    getName(){
        console.log(this.mName);
    }
    setBrand(brand) {
       this.mBrand = brand;
    }
    getBrand() {
        console.log(this.mBrand);
    }
    speed() {
        const sp = prompt("Speed up:");
        console.log(sp);
    }
}
const car1 = new Car();
car1.setName("rathanak");
car1.getName()
car1.setBrand("rathanak99");
car1.getBrand();
car1.speed();

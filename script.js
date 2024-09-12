1.//!Class - Movie
//!The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("Thunivu", "Zee studios", "PG-14");
console.log(movieDetails);



//b)The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided

class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("Thunivu","Zee studios");
console.log(movie1);

    


//c)Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Moviee("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);


    2.//!Convert the UML diagram to Typescript class. - use number for double

    class Circle {
        constructor(radius = 1.0, color = "red") {
          this._radius = radius;
          this._color = color;
        }
      
        get radius() {
          return this._radius;
        }
      
        set radius(radius) {
          this._radius = radius;
        }
      
        get color() {
          return this._color;
        }
      
        set color(color) {
          this._color = color;
        }
      
        toString() {
          return `Circle [radius = ${this._radius} , color = ${this._color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this._radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this._radius;
        }
      }
      
      const circle1 = new Circle(2, "green");
      const circle2 = new Circle(5, "Yellow");
      
      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      
      console.log(circle2.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());


      3.//!Write a “person” class to hold all the details.

      class Person {
        constructor(firstName, lastName, age, department, email, mobile, city){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.department=department;
            this.email=email;
            this.mobile=mobile;
            this.city = city;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}`;
        }
    }
    let person1 = new Person("sowmi","moorthi",23, "bsc cs", "sowjan01@gmail.com", 9876543452, "chennai");
    let person2 = new Person("sai","krish", 25, "bca", "saikrish04@gmail.com", 8765456778, "trichy");
    
    console.log(person1.getPersonDetails());
    console.log(person2.getPersonDetails());

    4.//!write a class to calculate the Uber price.


    class UberPrice {
        constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
          this.distance = distance;
          this.duration = duration;
          this.baseFare = baseFare;
          this.costPerMile = costPerMile;
          this.costPerMinute = costPerMinute;
        }
      
        totalPrice() {
          return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
        }
      }
      
      const myUber = new UberPrice(5, 10, 60, 14, 2);
      console.log(myUber.totalPrice());

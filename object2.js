const course =
{
    coursename: "js tutorial",
    price:"999",
    courseinstructor:"Hitesh"
}
//deconstructing of an oject
const {courseinstructor : cr}=course;
console.log(cr);
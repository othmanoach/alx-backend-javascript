// The Breakdown 😏😉😉
// I know it's long, I was just trying to understand how things work
//
// Here's the short code using generator function
//
export default function createIteratorObject(report) {
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
export default async function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      document.body.classList.remove("overflow");
      resolve("success");
    }, 2000);
  });
}

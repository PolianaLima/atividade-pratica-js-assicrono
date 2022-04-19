async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida!');
    }, 3000);
  });

  let result;

  try {
    result = await myPromise
      .then((result) => result + '\npassando pelo then \n')
      .then((result) => result + 'e agora acabou');
  } catch (err) {
    console.log(err);
    result = err.message;
  }
  console.log(result);
  return result;
}

resolvePromise();

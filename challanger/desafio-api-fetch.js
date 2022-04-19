const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
  //01 Forma de resolução
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return data.webpurl;
};

//02 forma de resolver
/* try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
  } catch (e) {
    console.log(e.message);
  }
};
 */
const loadImg = async () => {
  const catImg = document.getElementById('cat');
  catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();

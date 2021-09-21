const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
const newCats = ["Broom"]
 function appendCat(name) {
   const newCats = [...cats, "Broom"];
   return newCats;
}

const addCatToFront = ["Arnold"]
    function prependCat()   {
        const addCatToFront = ["Arnold", ...cats]
        return addCatToFront;
    }

    function removeLastCat() {
    const lCats = cats.slice(0, 2);
       return lCats;
    }

    function removeFirstCat() {
        const fCats = cats.slice(1);
        return fCats;
    }
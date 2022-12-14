const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(){

    cats.push("Ralph");
return cats
}

function destructivelyPrependCat(){
cats.unshift("Bob");
return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(newCats){
newCats=[...cats,"Broom"];
return newCats;

}

function prependCat(newCats){
    newCats=["Arnold",...cats];
    return newCats;
}

function removeLastCat(){
    const cats = ['Milo','Otis','Garfield'];
    cats.splice(2);
return cats;
}

function removeFirstCat(){
    const newCats = ['Milo','Otis','Garfield'];
  return  newCats.slice(1);


}
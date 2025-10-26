// Version initiale

const uniteUnique = (array1, array2, ...arrays) => {
  let newArray = [...array1, ...array2, ...arrays].join();
  let arrayUnique = [...new Set(newArray)];
  const cleanedArray = arrayUnique.filter(el => el !== ',');
  return cleanedArray.map(Number);
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Version améliorée

const uniteUnique = (array1, array2, ...arrays) => {
  /* fusion des tableaux en un seul avec flat() sans niveau de profondeur pour éviter un tableau de tableaux [[]] */
  const combined = [...array1, ...array2, ...arrays.flat()];

  // Supprime les doublons en gardant l’ordre
  return [...new Set(combined)];
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function favoriteFilm(){
    let film = prompt('Введи название моего любимого фильма: ')
    if (film == 'Матрица') alert('Правильно!')
    else alert('Попробуй еще раз!')
}

let array = [1, 5, 7, 3, 6, 2, 4, 9, 8, 0];
array.sort((a, b) => b - a);
console.log(array);

favoriteFilm()
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app';
}



// Задание 1 Создайте компонент my-table, который будет отображать данные в виде таблицы. Информация для отображения:

// Products = [{ id: 1, name : “product 1”, price : 100 }, 
// { id: 2, name : “product 2”, price : 200 }, 
// { id: 3, name : “product 3”, price : 300 }, 
// { id: 4, name : “product 4”, price : 400 }, 
// { id: 5, name : “product 5”, price : 500 }, 
// { id: 6, name : “product 6”, price : 600 }, 
// { id: 7, name : “product 7”, price : 700 } 
// { id: 8, name : “product 8”, price : 800 } 
// { id: 9, name : “product 9”, price : 900 } 
// { id: 10, name : “product 10”, price : 1000 }];

// Данные должны выводиться в три столбца. Компонент должен использовать параметр rows с помощью, которого можно установить количество строк, которые отображаются в таблице.

// Например: <my-table rows=”3”></my-table> при, таком использовании, в таблице должны отображаться первые три строки.

// Задание 2. Добавьте в компонент my-table оформление с помощью стилей взятых из bootstrap. Используйте класс table и table-stripped

// Задание 3 Добавьте в компонент my-table напротив каждой строки кнопку удалить. Сделайте так, чтобы при нажатии на эту кнопку удалялся элемент из таблицы и происходило событие delete. Событие delete должен фиксировать родительский компонент, при этом в консоль нужно отображать id удаленного компонента.
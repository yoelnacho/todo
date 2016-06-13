'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodosCtrl
 * @description
 * # TodosCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodosCtrl', function () {
    this.todos = ['Item 1', 'Item 2', 'Item 3','Item 4'];

    // Add
    // el formulario tiene un input con ng-model que apunta this.todos
    // Al ingresar un valor y hacer click en el botón submit, este acciona
    // la función addTodo() del ng-submit del form. En el Ctrl TodosCtrl se inicia
    // la función this.addTodo, aplica el nuevo valor al array this.todos y borra el contenido del input.
    this.addTodo = function () {
      this.todos.push(this.todo);
      this.todo = '';
    };

    // Remove
    // el ng-click acciona la función removeTodo($index)
    // pasando el $index del elemento (posición del array) a borrar.
    this.removeTodo = function (index) {
        this.todos.splice(index, 1);
    };
  });

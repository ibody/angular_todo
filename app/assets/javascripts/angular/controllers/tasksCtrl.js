todo.controller('TasksCtrl', function TasksCtrl($scope, $location, Task){
  var tasks = $scope.tasks = Task.query();

  $scope.newTask    = { done: false, title: '' };
  $scope.editedTask = null;

  $scope.editTask = function(task){
    $scope.editedTask = task;
  };

  $scope.updateTask = function(task){
    task.$update();
    $scope.editedTask = false;
  };

  $scope.createTask = function(){
    if (!$scope.newTask.title.length) {
      return;
    }

    Task.save({ task: $scope.newTask }, function(task){
      tasks.push(task);
    });

    $scope.newTask = { done: false, title: '' };
  };

  $scope.destroyTask = function(task) {
    task.$delete(function(){
      tasks.splice(tasks.indexOf(task), 1);
    });
  };

});
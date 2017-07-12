'use strict';

(function(){

class MoviesComponent {
 
 constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.MovieData = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('moviesendpoint');
      });

  }
$onInit() {
      this.$http.get('/api/moviesendpoints').then(response => {
        this.MovieData = response.data;
        this.socket.syncUpdates('moviesendpoint', this.MovieData);
      });

}
      addmovie() {
this.$http.post('/api/moviesendpoints',{
MovieName: this.MovieName,
Year: this.Year,
});
 this.MovieName='';
 this.Year='';
});



remove(Movie){
  var x = confirm('Are u want to delete this movie')
  if (x) {
this.$http.delete('/api/moviesendpoints/' + Movie._id);


}

angular.module('yeomanappApp')
  .component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  });

})();

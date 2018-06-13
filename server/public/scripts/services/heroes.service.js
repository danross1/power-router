app.service('HeroService', function ($http) {
    let vm = this;

    // get all heroes to display
    vm.getHeroes = function(){
        return $http({
            method: 'GET',
            url: '/power'
        }).then( function( response ){
            console.log('Success GET call in getHeroes:', response.data);
            vm.heroArray = response.data
        }).catch( function(error){
            console.log('Error GET call in getHeroes:', error)
        })
    }

    vm.delete = function(id){
        return $http({
            method: 'DELETE',
            url: '/power/id'
        })
        .then( function( response ){
            console.log(`Successful DELETE in heroservice`)
        })
        .catch( function( error ){
            console.log('Error DELETE in heroService', error);
            
        })
    }






    
})
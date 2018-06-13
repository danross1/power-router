app.controller('HeroesController', function( HeroService ){
    let self = this
    self.displayArray = [];
    self.test = 'test';

    self.getHero = function() {
        HeroService.getHeroes()
            .then( function(){
                self.displayArray = HeroService.heroArray;
                console.log(self.displayArray);
            })
    }

    self.deleteButton = function( id ){
        HeroService.delete( id )
            .then(function(response){
                self.getHero();
            })
    }

<<<<<<< HEAD
<<<<<<< HEAD
    self.postHero = function( ) {
        self.submit = {
            hero: HC.heroName,
            power: HC.heroPower
        }
=======
=======
heroPost
>>>>>>> c6f7018b6f604fb00ac3264656230ce4fcd95304
    self.submitButton = function( ) {
        self.submit = {
            hero: self.heroName,
            power: self.heroPower
        }
        HeroService.submitHero = self.submit;
        HeroService.toPost();
<<<<<<< HEAD
>>>>>>> heroPost
=======

    self.postHero = function( ) {
        self.submit = {
            hero: HC.heroName,
            power: HC.heroPower
        }
master
>>>>>>> c6f7018b6f604fb00ac3264656230ce4fcd95304
    }

    self.getHero();
});
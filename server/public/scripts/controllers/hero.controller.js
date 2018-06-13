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

    self.postHero = function( ) {
        self.submit = {
            hero: HC.heroName,
            power: HC.heroPower
        }
    }
    self.submitButton = function( ) {
        self.submit = {
            hero: self.heroName,
            power: self.heroPower
        }
        HeroService.submitHero = self.submit;
        HeroService.toPost();
    }

    self.getHero();
});
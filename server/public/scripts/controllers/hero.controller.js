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


    self.getHero();
});
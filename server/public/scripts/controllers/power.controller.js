app.controller('PowersController', function( HeroService ){
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

    self.submitButton = function() {
        self.postPower = {
            power: self.powerName,
            description: self.powerDescription
        }
        HeroService.submitPower = self.postPower
        HeroService.toPost();
    }

    self.getHero();
});
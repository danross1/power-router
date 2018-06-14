app.controller('HeroesController', function( HeroService ){
    let self = this
    self.displayArray = [];
    self.test = 'test';

    self.getHero = function() {
        HeroService.getHeroes()
            .then( function(){
                self.combinePowers();
            });
    }

    self.combinePowers = function() {
        let sentData = HeroService.heroArray;
        let powerArray = [];
        console.log('sentData:', sentData);
                
        // for each index in the heroArr ...
        for (let i = 0; i < sentData.length; i++) {
            // ... first push the power into the power array
            powerArray.push(sentData[i].power);
            // ... if there is another 
            if(sentData[i+1]){
                if(sentData[i].hero !== sentData[i+1].hero){
                    self.makeRow(sentData[i].hero, powerArray);
                    powerArray = [];
                } 
            } else {
                self.makeRow(sentData[i].hero, powerArray);
            }
        };
    };

    self.makeRow = function(thisHero, powerArray) {
        const heroRow = {
            hero: thisHero,
            power: powerArray
        }
        console.log('heroRow:', heroRow);
        self.displayArray.push(heroRow);
        console.log('displayArray:', self.displayArray);
    }

    self.deleteButton = function( id ){
        HeroService.delete( id )
            .then(function(response){
                self.getHero();
            })
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
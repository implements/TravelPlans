var app = angular.module('TravelPlansApplication', []);

app.controller('TravelPlansController', function($scope) {

    $scope.locations = [
        {
            title: 'Hike the Inca Trail.',
            country: 'Peru',
            url: 'https://en.wikipedia.org/wiki/Inca_Trail_to_Machu_Picchu',
            done: true
        },
        {
            title: 'Walk the Great Wall.',
            country: 'China',
            url: 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
            done: true
        },
        {
            title: 'Visit the Floating Mountains.',
            country: 'China',
            url: 'https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park',
            done: true
        },
        {
            title: 'Dive the Great Barrier Reef.',
            country: 'Australia',
            url: 'https://en.wikipedia.org/wiki/Great_Barrier_Reef',
            done: false
        },
	{
            title: 'Pet a Quokka.',
            country: 'Australia',
            url: 'https://en.wikipedia.org/wiki/Quokka',
            done: false
        }, 
	{
            title: 'Do the Bermondsey Beer Mile.',
            country: 'England',
            url: 'https://secretldn.com/bermondsey-beer-mile-guide',
            done: false
        },
        {
            title: 'Experience Oktoberfest.',
            country: 'Germany',
            url: 'https://en.wikipedia.org/wiki/Oktoberfest',
            done: false
        },
        {
            title: 'Hike the Fimmvörðuháls Trail.',
            country: 'Iceland',
            url: 'https://en.wikipedia.org/wiki/Fimmv%C3%B6r%C3%B0uh%C3%A1ls',
            done: false
        },
        {
            title: 'Walk the Shikoku Pilgrimage.',
            country: 'Japan',
            url: 'https://en.wikipedia.org/wiki/Shikoku_Pilgrimage',
            done: false
        },
        {
            title: 'Do the Gibbon Experience.',
            country: 'Laos',
            url: 'https://www.gibbonexperience.org/',
            done: false
        },
        {
            title: 'Hike to Everest Base Camp.',
            country: 'Nepal',
            url: 'https://en.wikipedia.org/wiki/Everest_Base_Camp',
            done: false
        },  
        {
            title: 'See the Waves in Nazaré.',
            country: 'Portugal',
            url: 'https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal',
            done: false
        },
        {
            title: 'Experience La Tomatina.',
            country: 'Spain',
            url: 'https://en.wikipedia.org/wiki/La_Tomatina',
            done: false
        },
	{
            title: 'Walk the Camino de Santiago.',
            country: 'Spain',
            url: 'https://en.wikipedia.org/wiki/Camino_de_Santiago',
            done: false
        },
        {
            title: 'Climb Mount Kilimanjaro.',
            country: 'Tanzania',
            url: 'https://en.wikipedia.org/wiki/Mount_Kilimanjaro',
            done: false
        },
        {
            title: 'Visit the Zone.',
            country: 'Ukraine',
            url: 'https://en.wikipedia.org/wiki/Chernobyl_Exclusion_Zone',
            done: false
        },
        {
            title: 'Drive the Loneliest Road.',
            country: 'USA',
            url: 'https://en.wikipedia.org/wiki/U.S._Route_50_in_Nevada',
            done: false
        },
        {
            title: 'Hike With a Shelter Dog.',
            country: 'USA',
            url: 'https://kauaihumane.org/service/field-trips/',
            done: false
        },
        {
            title: 'Visit Cortlandt Alley.',
            country: 'USA',
            url: 'https://www.hollywoodreporter.com/news/general-news/why-is-gritty-nyc-alley-featured-tv-shows-movies-1240049/',
            done: false
        },
        {
            title: 'Visit Monument Valley.',
            country: 'USA',
            url: 'https://en.wikipedia.org/wiki/Monument_Valley',
            done: false
        },
        {
            title: 'Visit Prada Marfa.',
            country: 'USA',
            url: 'https://en.wikipedia.org/wiki/Prada_Marfa',
            done: false
        },
        {
            title: 'Explore the Hang Sơn Đoòng Cave.',
            country: 'Vietnam',
            url: 'https://en.wikipedia.org/wiki/Hang_S%C6%A1n_%C4%90o%C3%B2ng',
            done: false
        }
    ]
});

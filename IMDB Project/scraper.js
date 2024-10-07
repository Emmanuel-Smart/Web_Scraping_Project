/* ================     CODE TO SCRAP DATA FROM IMDB WEBSITE       ================ */

import fetch from "node-fetch";
import * as cheerio from "cheerio";



const url = "https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q=";
// const url = "https://www.imdb.com/find/?q=star%20wars&s=tt&ttype=ft&ref_=fn_ft";

function searchMovies(searchTerm) {
    return fetch(`${url}${searchTerm}`)
    .then(response => response.text());
}

// website link. paste this link on your browser ====> "https://www.imdb.com/find?q=star%20wars&s=tt&ttype=ft&ref_=fn_ft"

searchMovies('star wars')
.then(body => {
    const $ = cheerio.load(body);

     //returns elements but skips as it goes
     const movies = [];
     $('section.ipc-page-section.ipc-page-section--base.sc-e8e4ce7-0.fkWWaa').each(function(i, element) {
         const $element = $(element);
         
         $element.find('ul li').each(function() {
             const $li = $(this);
             const movie = {
                 image: $li.find('img.ipc-image').attr('src'),
                 title: $li.find('a.ipc-metadata-list-summary-item__t').text()
             }
             movies.push(movie);
         });
     }); 
     console.log(movies);

})



//  =============== Bringing just one image link from the structure
    // $('section.ipc-page-section.ipc-page-section--base.sc-e8e4ce7-0.fkWWaa').each(function(i, element) {
    //     const $element = $(element);
    //     // const $image = $element.find('div:nth-child(1) ul li div:nth-child(1) img');
    //     const $image = $element.find('ul li img.ipc-image');
    //     console.log($image.attr('src'));
    // });

     //  =============== using the .map method to retrieve all the image links, returns an ARRAY
    /* $('section.ipc-page-section.ipc-page-section--base.sc-e8e4ce7-0.fkWWaa').each(function(i, element) {
        const $element = $(element);
        const $image = $element.find('ul li img.ipc-image');
        const imageSources = $image.map(function() {
            return $(this).attr('src');
        }).get();
        console.log(imageSources);  // Array of image sources
    }); */

        //  =============== using the FOR LOOP to retrieve all image links
      /*  $('section.ipc-page-section.ipc-page-section--base.sc-e8e4ce7-0.fkWWaa').each(function(i, element) {
            const $element = $(element);
            const $image = $element.find('ul li img.ipc-image');
            for(let i = 0; i < $image.length; i++){
                console.log($image.eq(i).attr('src'));
            }
        }); */

    //  =============== using the .each method to retrieve all the image links
    /* $('section.ipc-page-section.ipc-page-section--base.sc-e8e4ce7-0.fkWWaa').each(function(i, element) {
        const $element = $(element);
        const $image = $element.find('ul li img.ipc-image');
        $image.each(function() {
            console.log($(this).attr('src'));
        });
    });  */


    //  =============== using the .each method to retrieve all the movies
    // const movies = [];
    // $('section.ipc-page-section.ipc-page-section--base.sc-e8e4ce7-0.fkWWaa').each(function(i, element) {
    //     const $element = $(element);
    //     const $image = $element.find('ul li img.ipc-image');
    //     const $title = $element.find('ul li a.ipc-metadata-list-summary-item__t');
    //     $image.each(function() {
    //         // console.log($(this).attr('src'));
    //         $(this).attr('src');
    //     });
    //     const movie = {   
    //     } 
    // }); 


   


    
    // Still skips return data
    // const movies = [];
    // $('section.ipc-page-section.ipc-page-section--base.sc-e8e4ce7-0.fkWWaa ul li').each(function(i, li) {
    //     const $li = $(li);
    //     const movie = {
    //         image: $li.find('img.ipc-image').attr('src'),
    //         title: $li.find('a.ipc-metadata-list-summary-item__t').text()
    //     }
    //     movies.push(movie);

    // }); 
    // console.log(movies);
    
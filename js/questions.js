
/*
1.      Kjønn (gender)

    "male" / "female"

2.      Alder (age)
    
    1 = "opp til 25"
    2 = "26 til 35"
    3 = "36 til 45"
    4 = "46 til 55"
    5 = "56 til 65"
    6 = "66 eller eldre"

3.      Bosted (county & municipality)

    see "service/Backend.php" for id's    
    

4.      Hvor går hverdagsreisen? (destination)

    1 = "til skole/barnhage"
    2 = "til studiested"
    3 = "til jobb"
    4 = "til aerend"

5.      Transportmiddel (vehicle)
    
    1 = "med bil"
    2 = "med båt"
    3 = "med buss"
    4 = "med sykkel"
    5 = "med tog"
    6 = "med motorsykkel/moped"
    7 = "til fots"
    8 = "med bane/trikk"

6.      Bor i by/bor ikke i by (from)

    1 = "jeg bor i en by"
    2 = "jeg bor ikke i en by"

7.      Pendler inn til by/pendler ikke inn til by (to)

    1 = "pendler inn til by"
    2 = "pendler ikke in til by"

8.      Reisevei (distance)
    
    value is in km (one way)

9.      Reisetid (time)

    value is in minutes (one way)

10.     Unødvendig reisetid (delay)

    value is in minutes

11.     Assosiasjoner (associations)
    
    1 = Frustrasjon
    2 = Svettelukt
    3 = Tidsklemma
    4 = Forurensing
    5 = Stress
    6 = Trangt
    7 = Kaos
    8 = Humpete
    9 = Kø
    10 = Forsinkelse
    11 = Farlig
    12 = Aggresjon
    13 = Bompenger
    14 = Dyrt
    15 = Sosialt
    16 = Hyggelig
    17 = Effektivt
    18 = Familiekabal
    19 = Billig
    20 = Surfing
    21 = Avis
    22 = Musikk
    23 = Natur
    24 = Avkobling
    25 = Radio
    26 = Miljøvennlig
    27 = Enkelt
    28 = Helse

12.     Tippingen

    value is in minutes (one way)

13.     Takk/E-post (form)

    name = first + lastname
    email = email
    newsletter = 0/1
*/

var Questions = function() {
    
    this.questions = [
        {url: "ajax/gender.php", tracking: "/hverdagsreise/q1"},               // 0 - 1
        {url: "ajax/age.php", tracking: "/hverdagsreise/q2"},                  // 1 - 2
        {url: "ajax/location.php", tracking: "/hverdagsreise/q3"},             // 2 - 3
        {url: "ajax/destination.php", tracking: "/hverdagsreise/q4"},          // 3 - 4
        {url: "ajax/vehicle.php", tracking: "/hverdagsreise/q5"},              // 4 - 5
        {url: "ajax/from.php", tracking: "/hverdagsreise/q6"},                 // 5 - 6
        {url: "ajax/to.php", tracking: "/hverdagsreise/q7"},                   // 6 - 7
        {url: "ajax/distance.php", tracking: "/hverdagsreise/q8"},             // 7 - 8
        {url: "ajax/time.php", tracking: "/hverdagsreise/q9"},                 // 8 - 9
        {url: "ajax/delay.php", tracking: "/hverdagsreise/q10"},               // 9 - 10
        {url: "ajax/association.php", tracking: "/hverdagsreise/q11"},         // 10 - 11
        {url: "ajax/guess.php", tracking: "/hverdagsreise/q12"},               // 11 - 12
        {url: "ajax/form.php", tracking: "/hverdagsreise/register"}            // 12 - 13
    ];
    
    // data
    
    this.reset();
    
    // events
    
    $(".answer").live('click', $.proxy(this.answerQuestion, this));
}

Questions.prototype.init = function() {
    
    this.loadQuestion();
    this.updateProgress();  
}

Questions.prototype.reset = function() {
    
    this.currentQuestion = 0;
    this.gender = undefined;
    this.age = undefined;
    this.county = undefined;
    this.municipality = undefined;
    this.destination = undefined;
    this.vehicle = undefined;
    this.from = undefined;
    this.to = undefined;
    this.distance = undefined;
    this.time = undefined;
    this.delay = undefined;
    this.association = undefined;
    this.guess = undefined;
    
    /* // test
    this.gender = "female";
    this.age = "1";
    this.county = "1";
    this.municipality = "1";
    this.destination = "1";
    this.vehicle = "1";
    this.from = "1";
    this.to = "1";
    this.distance = "1";
    this.time = "1";
    this.delay = "1";
    this.association = "1";
    this.guess = "1";
    */
}

Questions.prototype.answerQuestion = function(event) {
    
    event.preventDefault();
    event.stopImmediatePropagation();
    
    var question = parseInt($(event.currentTarget).attr("data-question"));
    
    switch (question) {
        
        /* gender.php */
        case 0:
            this.gender = $(event.currentTarget).attr("data-gender");
            break;
        
        /* age.php */
        case 1:
            this.age = $(event.currentTarget).attr("data-age");
            break;
        
        /* location.php */
        case 2:
            this.county = $(event.currentTarget).attr("data-county");
            this.municipality = $(event.currentTarget).attr("data-municipality");
            break;
        
        /* destination.php */
        case 3:
            this.destination = $(event.currentTarget).attr("data-destination");
            break;
        
        /* vehicle.php */
        case 4:
            this.vehicle = $(event.currentTarget).attr("data-destination");
            break;
        
        /* from.php */
        case 5:
            this.from = $(event.currentTarget).attr("data-from");
            break;
        
        /* to.php */
        case 6:
            this.to = $(event.currentTarget).attr("data-to");
            break;
        
        /* distance.php */
        case 7:
            this.distance = $(event.currentTarget).attr("data-distance");
            break;
        
        /* time.php */
        case 8:
            this.time = $(event.currentTarget).attr("data-time");
            break;
        
        /* delay.php */
        case 9:
            this.delay = $(event.currentTarget).attr("data-delay");
            break;
        
        /* association.php */
        case 10:
            this.association = $(event.currentTarget).attr("data-association");
            break;
        
        /* guess.php */
        case 11:
            this.guess = $(event.currentTarget).attr("data-guess");
            break;
            
    }
    
    this.nextQuestion();
}

Questions.prototype.nextQuestion = function() {
    
    this.currentQuestion++;
    
    this.loadQuestion();
    this.updateProgress();
}

Questions.prototype.loadQuestion = function() {
    
    var scope = this;
    
    // scroll document back up
    // $("body").animate({scrollTop: "0px"}, 100, function() {
        
        $("#question-loader").slideDown(600, function() {
            
            $("#question-container").html('');            
            $("#question-container").load(scope.questions[scope.currentQuestion].url, function() {
                
                // hide preloader
                $("#question-loader").delay(500).slideUp(600);
                
                // skip url bar
                skipUrlBar();
            });
        });
    // });
    
    // tracking
    ga('send', 'pageview', this.questions[this.currentQuestion].tracking);
}

Questions.prototype.updateProgress = function() {
    
    var total = this.questions.length - 1;
    
    for (var i = 0; i<total; i++) {
        
        var listItem = $(".progress-bar ol li:nth-child(" + (i + 1) + ")");
        
        listItem.removeClass();            
        
        if (i == this.currentQuestion) {
            listItem.addClass("active");
        } else if (i < this.currentQuestion) {
            listItem.addClass("done");
        }
        
        if ((this.currentQuestion + 1) <= total) $(".progress-counter span").text((this.currentQuestion + 1) + " / " + total);
    }
    
    if (this.currentQuestion == 12) {
        
        $("#questions .progress-bar").addClass("hide"); 
        $("#questions .progress-counter").addClass("hide"); 
    } else {
        
        $("#questions .progress-bar").removeClass("hide");
        $("#questions .progress-counter").removeClass("hide");  
    }
}
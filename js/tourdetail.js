$(document).ready(function() {
    var queryString = location.search.substring(1);
    // Update detail section heading on base of tour package
    if (queryString == "1") {
        $("#side-image").attr({
            "src": "images/village-walk-detail-image.webp"
        });
        $('#heading-info').text("Village Walk");
        $(".breadcrumbs-custom-path").append('<li><a href="index.html">Village</a></li>');
        $(".breadcrumbs-custom-path").append(' <li class="active">Walk, Kumaon</li>');

        $('#gallery2').remove();
        $('#gallery3').remove();

        $('#top-parallax-2').remove();
        $('#top-parallax-3').remove();

        // add tabs
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-4-1" data-toggle="tab">BASIC INFO</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-2" data-toggle="tab">VILLAGE FACILITIES</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-3" data-toggle="tab">VILLAGE ACTIVITIES</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-4" data-toggle="tab">MORE</a></li>');


        // Basic info tab info
        var htmlText =
            '<h5>Village walk, Kumaon – A move in the right direction</h5>' +
            '<p><b>“If you want to see the modernization move to city but if you want to see the culture move to village”</b> ' +
            'Get ready ' +
            'for the thrilling trip of <b>Himalayan village walk</b> to explore the alluring exquisiteness and to witness the picturesque <b>Himalayan hamlet</b>, <b>marvelous snow</b> - covered towering peaks and relish the <b>cultural hospitality</b> of mountainous region. Peacefully listen to the <b>chirping of birds</b>, the <b>rustling wind</b> and the tinkling on the <b>bells</b> from the cattle herds and of course you will get the opportunity to mingle with the <b>local villager</b> to know more about the region and its <b>culture</b>.' +
            'In this spectacular <b>Himalayan foothill</b> area captivate yourself with charm of the sky creeping trees of virgin pine, oak and many more, appealing terraced fields, and enticing flora and fauna during the tender walk between village to village in the Himalayan foothill areas.Your stay during the village walk will' +
            'let you taste the <b>delicious mountainous cuisines</b> and traditional <b>homestays</b> to have a perfect experience of <b>culture</b> and congenial <b>warm welcome</b> by the local communities of the region.These heritage homestays are well furnished to facilitate you with the best accommodation. Despite their <b>traditional looks</b> these homestays are well - versed with all the <b>modern equipment</b> to convert it into a cozy cottage</p>' +
            'for your comfortable stay without sacrificing the urban comfort.' +
            'The best part is the option to customize your trip. Yes!We know that your interest may vary from others hence we avail the option to make a customize trips by keeping all the villages as per your priority list and also increase or decrease the halt duration as per your capabilities.'

        // "  <p></p>" + " <p><span style='color:red'>Distance from major cities: Delhi:</span> 300 kms | Chandigarh: 230 kms | Haridwar: 35 kms | Dehradun: 55 kms" +
        // "<p style='margin:0'><span style='color:red'>Route:</span> Delhi Ghaziabad Meerut Roorkee Haridwar Rishikesh Tapovan Neelkanth Bridge Camp Wildex</p>" +
        // "<p style='margin:0'><span style='color:red'>Weather:</span> Sept-Nov: Pleasant | Dec-Jan: Cold | Feb-Mar: Pleasant | Apr-Jun: Hot during day, pleasant at night</p>" +
        // "<p style='margin:0'><span style='color:red'>Season:</span> Camp is open throughout the year; River Rafting is open from Mid-September to June</p>"

        $('#tabs-4-1').html(htmlText);

        // Camp facilities tab data              
        var htmlText2 = '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
            '<li>Stay in the homestays that will you give a glimpse of the core and unobserved culture that you could typically visualize in the villages at the foothill villages of the Himalaya.</li>' +
            '<li>Homestays entirely exotic, cozy and well-furnished from inside.</li>' +
            '<li>Though the homestays are nestled around the dense forest of alpine and oak they are not less than a luxurious hotel room with all the essential amenities and services.</li>' +
            '<li>Electricity with power backup</li>' +
            '</ul>'

        $('#tabs-4-2').html(htmlText2);


        // Camp activities tab data              
        var htmlText3 = '<p><b>Day 1 – (Destination-Deora) (Walk – 4-5 hours)</b></p>' +
            'After having the breakfast, you will initiate your village walk' +
            'for your first destination‘ Deora’.The entire path is surrounded with the exotic beauty of the Himalayan snow - capped peaks and the magnificent exquisiteness of the nature.You will go to Wintola village via Math village.At Math village you will get the chance to mingle with the natives of the region to know more about their tradition.You will be amazed to see their friendliness and the description of their culture.Meanwhile you will see an enticing water fall“ The Balta Fall”.Surrounded with the natural majesties and amusing birdsongs the Balta fall is an ultimate beautiful spot where you will have a tea' +
            'break and bit relaxation at the peaceful spot.</p>'

        // '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
        // '<li>Romaing villages</li>' +
        // '<li>Night stay on village </li>' +
        // '<li>Buffet meals </li>' +
        // '<li>Electricity </li>' +
        // '<li>Large Conference Hall </li>' +
        // '</ul>'

        $('#tabs-4-3').html(htmlText3);


        // Map Iframe
        var mapIframe = '<div>' +
            '<iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=79.89472389221193%2C30.029346321255183%2C79.96682167053224%2C30.081349364235265&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=14/30.0553/79.9307">View Larger Map</a></small></div>'



        // More tab data              
        var htmlText4 = '<h5> Things which are not included</h5>' +
            '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
            '<li>Personal Insurance</li>' +
            '<li>Medical Certificate</li>' +
            '<li>Personal toiletry Items and Personal Medicine kit</li>' +
            '<li>Mules and Porters for Personal Luggage</li>' +
            '<li>On first day En Route to base camp the Breakfast and Lunch are Not Included</li>' +
            '<li>Last Day En Route Lunch and Dinner are Not Included</li>' +
            '</ul>' +
            mapIframe

        $('#tabs-4-4').html(htmlText4);

    } else if (queryString == "2") {
        $("#side-image").attr({
            "src": "images/dhakuri-tour-detail-image.webp"
        });

        $('#heading-info').text("Dhakuri");
        $(".breadcrumbs-custom-path").append('<li><a href="index.html">Dhakuri</a></li>');
        $(".breadcrumbs-custom-path").append(' <li class="active">Camping & Treking</li>');
        $('#gallery1').remove();
        $('#gallery3').remove();

        $('#top-parallax-1').remove();
        $('#top-parallax-3').remove();


        // add tabs
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-4-1" data-toggle="tab">BASIC INFO</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-2" data-toggle="tab">CAMP FACILITIES</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-3" data-toggle="tab">CAMP ACTIVITIES</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-4" data-toggle="tab">MORE</a></li>');


        // "altitude with a view of majestic mountain range, this place is perfect" +
        // "for a quiet weekend and" +
        // "festival session.It is located in <b><i>Uttarakhand’s Bageshwar district(Kumaon region)</i></b>.</p>" +
        // "<p>Dhakuri is the gateway of the two most beautiful valleys of Kumaon region Pindari and " +
        // "Sunderdhunga.It is also a place where you have to go to experience <b><i>snow without facing the " +
        // "harsh temperature</i></b>.It is an unusually flat, high altitude meadow.The lush green grass here is" +
        // "accentuated by the surrounding forests.To add to this are the snow - capped mountains of the" +
        // "southern rim of <b><i>Nanda Devi Sanctuary</b></i> that loom just ahead of you.</p>" +
        // "<p>A short trek from the Dhakuricampsite to Dhakuri - Khal offers even better views of the" +
        // "mountains, especially at <b><i>sunrise</b></i>.If you walk further up" +
        // "for about an hour, towards the South" +
        // "West forested ridge of the pass, you reach <b><i>Chilta Top</b></i>.The view you here is like no other– you " +
        // "can capture the <b><i>mountain ranges of Nanda Devi</b></i> all the way in a single frame! </p>" +

        // Basic info tab info
        var htmlText = "<h5> A gateway to Paradise</h5><p><b>Dhakuri</b> is a small hamlet in the lap of nature, surrounded by the flora and fauna of high" +
            'Dhakuri is a fascinating place with majestic natural charm;' +
            'it is located in the Bageshwar district of Uttrakhand.Its charisma pulls the nature lover to reach closer to such landscapes.It even allows them to trek to get closer to the mountains and picturesque scenery.Small trekking from the campsite will give you a completely different view you have never imagined.' +
            'Dhakuri opens up two separate trekking sites, Pindari glacier, and Sunderdhunga.Both the sites are virgin territories with completely untouched nature yet to be explored.Lust grasslands and meadows cover the entire region of Dhakuri;' +
            'forests filled up with sky - creeping horse chestnut and oak trees, snowcapped mountains, and wind that freeze the marrow.A short climb from the campsite to Dhakuri - Khal can lead you to an enticing and magnificent world of beautiful mountains and a mesmerizing sunrise.Approximately an hours walk from here towards the southwest through the forested ridge will help you reach Chilta-top. You will be amazed to see all the flats and high-altitude grasslands. ' +
            'Classy stay with all your comforts' +
            'We know going on a trip is exciting until you discover comfort similar to your home.We are available here to provide you with all the comforts of your home at a lovely site with breathable fresh air and lust greenery surrounded by mountains and dense forests.Rely on us' +
            'for quality services to make you feel like you are at home or even at better place.'

        $('#tabs-4-1').html(htmlText);



        // Camp facilities tab data              
        var htmlText2 = '<p>Switching from home bed to camp bed which seems not comfortable to everyone. We here take care of the same feeling by providing high quality of tent and sleeping begs. </p>' +

            '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
            '<li>Pick and drop from Kathgodam to Kathgodam</li>' +
            '<li>Quality tents and sleeping bags</li>' +
            '<li>Forest permit and entrance fee</li>' +
            '<li>Hygienically cooked, luscious food</li>' +
            '<li>Proper three meals in a day that would be of Kumaon cuisines</li>' +
            '<li>Regular beverages (tea/coffee) and snacks</li>' +
            '<li>Separate toilet tents for ladies and gents</li>' +
            '<li>Kitchen team to cook food for you</li>' +
            '<li>Liner</li>' +
            '<li>Separate Toilet tents – Ladies and Gents</li>' +
            '<li>Quality mattresses to make you feel cozy</li>' +
            '<li>Experienced trek leader guide and technical guide to support you during the trekking</li>' +
            '<li>Availability of Medical kit</li>' +
            '<li>Availability of oxygen cylinder, crampons, and gaiters</li>' +
            '</ul>'

        $('#tabs-4-2').html(htmlText2);

        // Camp activities tab data              
        var htmlText3 =
            '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
            '<li><b>Day 1-</b> - It is a day devoted to a drive from Kathgodam to Khali-dhar. On the way, you will see captivating views of beautiful forests and lofty mountains. You will travel around 199 KM to reach Khali-dhar.</li>' +
            '<li><b>Day 2-</b> - The day when you initiate your trekking from Ratmati to Dhakuri, the way consists of 9.3 KM of trekking.' +
            'Rest in camp while getting fascinating views of mountains and will have walks towards Dhakuri-Khal to be acculturated with the surrounding.' +
            'Altitude - 2086 mts</li>' +
            '<li><b>Day 3-</b> - Here, you will trek from Dhakuri to Chilta Top; it consists of 2.5 km of trekking.' +
            'You will get an enthralling 180° mountain view from Kumaon Himalaya to Nepal Himalaya.' +
            'Altitude – 3400 Mts</li>' +
            '<li><b>Day 4-</b> - Another trek to get a hypnotic mountainous view from Dhakuri to Dhur. It consists of a 3 km trek. Further, we will head back to Kathgodam.</li>' +
            '</ul>'


        $('#tabs-4-3').html(htmlText3);


        // Map Iframe
        var mapIframe = '<div>' +
            '<iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=79.89472389221193%2C30.029346321255183%2C79.96682167053224%2C30.081349364235265&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=14/30.0553/79.9307">View Larger Map</a></small></div>'



        // More tab data              
        var htmlText4 = '<h5> Things which are not included</h5>' +
            '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
            '<li>Personal Insurance</li>' +
            '<li>Medical Certificate</li>' +
            '<li>Personal toiletry Items and Personal Medicine kit</li>' +
            '<li>Mules and Porters for Personal Luggage</li>' +
            '<li>On first day En Route to base camp the Breakfast and Lunch are Not Included</li>' +
            '<li>Last Day En Route Lunch and Dinner are Not Included</li>' +
            '</ul>' +
            "<p><span style='color:red'>Trek Duration:</span> 4 DAYS – 3 NIGHTS | <span style='color:red'>Pick-up Point:</span> Kathgodam | <span style='color:red'>Trek Level:</span> Easy | <span style='color:red'> Maximum Altitude:</span> 3400 Meters | <span style='color:red'>Best Time:</span>    All year (except monsoon) | <span style='color:red'>Located:</span> Bageshwar, Kumaon | <span style='color:red'>Nearest Railway Station:</span> Kathgodam | <span style='color:red'>Nearest Airport:</span> Pantnagar | <span style='color:red'>Famous for:</span>    Trekking, Camping, Winter Trek, Summer Trek, Easy Trek</p>" +

            mapIframe

        $('#tabs-4-4').html(htmlText4);


    } else {
        $("#side-image").attr({
            "src": "images/liti-tour-detail-info-image.png"
        });
        $('#heading-info').text("Leti Camping");
        $(".breadcrumbs-custom-path").append('<li><a href="index.html">Leti</a></li>');
        $(".breadcrumbs-custom-path").append(' <li class="active">Camping</li>');
        $('#top-parallax-2').remove();
        $('#top-parallax-1').remove();
        $('#gallery1').remove();
        $('#gallery2').remove();

        // add tabs
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-4-1" data-toggle="tab">BASIC INFO</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-2" data-toggle="tab">CAMP FACILITIES</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-3" data-toggle="tab">CAMP ACTIVITIES</a></li>');
        $("#tabs").append('<li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-4-4" data-toggle="tab">MORE</a></li>');



        // Basic info tab info
        var htmlText = '<h5>Lay down in the lap of nature</h5>' +
            '<p>The days are gone when people wanted to enjoy their vacations at urbanized, highly developed, and hi-tech places. Nowadays, people are touring the natural landscape to seek fresh, breathable air and have a peaceful vacation away from heavy traffic, noise, and crowd. Leti is a pristine place where you can reach through a village walk and enjoy the jaw-dropping natural Himalayan beauty.Leti village is located in Kapkot tehsil of Bageshwar district in Uttarakhand, India. It is situated 35km away from sub-district headquarter Kapkot (tehsildar office) and 59km away from district headquarter Bageshwar.' +
            'Camping sounds crushing when you are stuck within your comfort zone.Here we bring you an opportunity to come out of your comfort zone and stay a few days in the lap of the Himalayas and' +
            'let nature embrace you with the love of its purity.Let the morning alarms of the original chirping birds’ sound wake you up' +
            'while the lullaby created by the blowing wind would make you sleep at night.You will discover your morning fresh by breathing the fresh air with the fragrance of moist grass.' +
            'Leti camping includes the jungle walk, lunch at the site with a touch of local Kumaonan flavours, or even a packed lunch during the Leti walk.Even river rafting is available during a particular season.Rely on us' +
            'for quality services, the best facilities, and comfortable convinces during your stay so that you will not miss your comfort zone amenities. </p>'


        // '  <iframe  src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allowfullscreen></iframe>'

        $('#tabs-4-1').html(htmlText);


        // Camp facilities tab data              
        var htmlText2 = '<p>We know the first thought that blinks into your mind while deciding upon the camping is – whether it would be a comfortable trip. You must be thinking of your cozy bed with a soft pillow and a warm quilt that wraps you to give the full warmth for a restful sleep. No worries! We will take care of all your necessities to provide a relaxed camping experience. The amenities during the camp include – </p>' +

            '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
            '<li>Safe and quality camping with exceptional quality tents</li>' +
            '<li>Superior bedding with excellent sleeping bags</li>' +
            '<li>Yummy meals include veg as well as non-veg cuisines</li>' +
            '<li>Every day three timely meals</li>' +
            '<li>Clean bathrooms and toilets with the availability of hot and cold water</li>' +
            '<li>Availability of solar electricity for your safety and convenience</li>' +
            '<li>Sufficient power backup for electricity management</li>' +
            '</ul>'
        $('#tabs-4-2').html(htmlText2);



        // Camp activities tab data              
        var htmlText3 =
            '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
            '<li><b>Day 1-</b> We will gather at Almora, stay there all night, and enjoy a delicious dinner. Here we will get a chance to explore the beauty of Kasar.</li>' +
            '<li><b>Day 2-</b> After having a delightful breakfast, we will head to Leti. The driveway consists of 3 hours, during which you will spoil yourself with the hypnotic gorgeousness of nature, picturesque landscape, and fascinating weather. You will feel yourself in paradise. After reaching Leti, a 30 min walk can lead you to the campsite. You will discover all the comforts of your home in our customized tents, where you will stay for the night.</li>' +
            '<li><b>Day 3-</b> After breakfast, you will initiate jungle walks and lunch at the campsite.</li>' +
            '<li><b>Day 4-</b> Here comes the chance for Leti walk with a picnic lunch with Kumaonan flavors that regional people cook at a beautiful spot you discover during your walk.</li>' +
            '<li><b>Day 5-</b> Another day to have Leti walk to sightsee and embrace nature, some more stunning and fascinating landscapes in the Leti region. Here you will have a packed lunch.</li>' +
            '<li><b>Day 6-</b> We will step back to Kasar and will wave your bye to Almora, and you will lead towards your destination.</li>' +
            '</ul>'



        $('#tabs-4-3').html(htmlText3);


        // // Map Iframe
        // var mapIframe = '<div>' +
        //     '<iframe height="280" width="90%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=79.37278747558595%2C29.49818287669286%2C79.94956970214844%2C29.915661925840578&amp;layer=mapnik"' +
        //     'style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=11/29.7071/79.6612">View Larger Map</a></small>' +
        //     '</div>'


        // // More tab data              
        // var htmlText4 = '<p><span style="color:red">Nearby Places to Visit:</p></span>' +
        //     '<p>Ganga Aarti - Parmarth <span style="color:red">9 kms</span> | Bungee Jump Station <span style="color:red">8 kms</span></p>' +
        //     '<p>Neelkanth Mandir <span style="color:red">15 kms</span> | Paintball Point <span style="color:red">1 km</span></p>' +
        //     '<p>Jeep Safari - Rajaji <span style="color:red">35 kms</span></p>' +
        //     mapIframe

        // Map Iframe

        var mapIframe = '<div>' +
            '<iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=79.89472389221193%2C30.029346321255183%2C79.96682167053224%2C30.081349364235265&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=14/30.0553/79.9307">View Larger Map</a></small></div>'


        //"<p style='margin:0'><span style='color:red'>Route:</span> Delhi Ghaziabad Meerut Roorkee Haridwar Rishikesh Tapovan Neelkanth Bridge Camp Wildex</p>" +


        // More tab data              
        var htmlText4 = '<h5> Things which are not included</h5>' +
            '<ul class="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">' +
            '<li>Personal Insurance</li>' +
            '<li>Medical Certificate</li>' +
            '<li>Personal toiletry Items and Personal Medicine kit</li>' +
            '<li>Mules and Porters for Personal Luggage</li>' +
            '<li>On first day En Route to base camp the Breakfast and Lunch are Not Included</li>' +
            '<li>Last Day En Route Lunch and Dinner are Not Included</li>' +
            '</ul>' +
            "<p><span style='color:red'>Distance from major cities:</span>  <b>Delhi:</b> 505 kms | <b>PantNager:</b> 230 kms | <b>Kathgodam:</b> 214 kms | <b>Haldwani:</b> 225 kms" +

            "<p style='margin:0'><span style='color:red'>Weather:</span> Sept-Nov: Pleasant | Dec-Jan: Cold | Feb-Mar: Pleasant | Apr-Jun: Hot during day, pleasant at night</p>" +
            "<p style='margin:0'><span style='color:red'>Season:</span> Camp is open throughout the year</p>" +

            mapIframe


        $('#tabs-4-4').html(htmlText4);

    }
});
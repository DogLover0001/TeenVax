$(document).ready(function() {
    var images = ["https://cdn.cnn.com/cnnnext/dam/assets/210514023241-teen-vaccine-0513-super-169.jpg", 
                  "https://github.com/DogLover0001/Vax-Photos/blob/main/IMG_20220731_215836_957.jpg?raw=true", 
                  "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2021_28/1749349/teen-vaccination-te-main-210715.jpg", 
                  "https://1.bp.blogspot.com/-erE52XXV5p8/YPbjTBfOxUI/AAAAAAAApjc/Ke3HCX-ylNIpzxcMLtaGC3JQmdVaU73SACLcBGAsYHQ/w630-h354/Child-Girl-Vaccine-Injection-Syringe.jpg", 
                  "https://th.bing.com/th/id/OIP.k1Xu2P8lNAGGKadBNBXt-QHaFP?pid=ImgDet&rs=1", 
                  "https://static.politico.com/a2/7b/a774193643c4b068b542561a4d84/teen-vaccine-773-getty.jpg", 
                  "https://patch.com/img/cdn20/getty/24679441/20210513/072104/styles/patch_image/public/gettyimages-1292706111___13192022309.jpg?width=695", 
                  "https://patch.com/img/cdn20/ap/22874714/20210513/072905/styles/patch_image/public/ap21131800548259___13072715027.jpg", 
                  "https://blog.lexmed.com/images/librariesprovider80/blog-post-inline-images/woman-getting-vaccine.tmb-medium.jpg?sfvrsn=e2eb950b_1", 
                  "https://ckphu.com/wp-content/uploads/2013/02/teen-getting-shot.jpg", 
                  "https://static01.nyt.com/images/2021/05/10/us/10evening-briefing-web-pfizer-promo/10evening-briefing-web-pfizer-facebookJumbo.jpg", 
                  "https://images.unsplash.com/photo-1631941618536-2979d565b726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
                  "https://assets.teenvogue.com/photos/6066202c24de7749ef36a9aa/16:9/w_2560%2Cc_limit/GettyImages-1230743226.jpg", 
                  "https://www.muhealth.org/sites/default/files/inline-images/School-Immunizations.jpg", 
                  "https://www.nova.ie/wp-content/uploads/2021/08/Covid-Vaccine-Teen-Boy.png", 
                  "https://images.unsplash.com/photo-1576765608622-067973a79f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80", 
                  "https://www.gannett-cdn.com/presto/2021/04/10/PNAS/a19a7591-a07b-4610-80c7-7725f551c927-NAS-Minority_mass_vaccination-JN_003.JPG?width=980&height=653&fit=crop&format=pjpg&auto=webp", 
                  "https://nihaocac.com/wp-content/uploads/2020/12/b556d72b44654edb88ef5a1e04b44327.jpg", 
                  "https://img.medscape.com/thumbnail_library/dt_141124_vaccine_child_800x600.jpg", 
                  "https://cdn.sanity.io/images/0vv8moc6/contpeds/54ec4420237ff9292f837793ecdba3e6b95c7d17-1200x800.jpg?fit=crop&auto=format", 
                  "https://www.connecticutchildrens.org/wp-content/uploads/2021/05/Teen-COVID-19-Vaccine-1-768x512.jpg", 
                  "https://www.mana.md/wp-content/uploads/2021/07/teen-vaccine.jpg", 
                  "https://nypost.com/wp-content/uploads/sites/2/2021/06/walensky-teen-vaccine-286.jpg?quality=90&strip=all", 
                  "https://secure.i.telegraph.co.uk/multimedia/archive/01823/injection_1823394c.jpg", 
                  "https://th.bing.com/th/id/OIP.LAUhg16JoCZje_UJyx-O5QHaEq?pid=ImgDet&w=890&h=560&rs=1", 
                  "https://assets.medpagetoday.net/media/images/93xxx/93340.jpg", 
                  "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/vaccines_for_adults_slideshow/getty_rf_hpv_shot.jpg", 
                  "https://i0.wp.com/calmatters.org/wp-content/uploads/2022/05/050522-TEEN-VACCINATION-SJM-TEENVAX-AC-CM.jpg?fit=2000%2C1333&ssl=1", 
                  "", 
                  "https://th.bing.com/th/id/R.01910ed98edd9fc8a31ee786ee12bc02?rik=tS%2fdtb0JFbtNCg&riu=http%3a%2f%2fwww.motherjones.com%2fwp-content%2fuploads%2fistock_000018460513_small.jpg%3fw%3d1200%26h%3d630%26crop%3d1&ehk=XGp%2f27u7FH4ocDhLqy8KTuJq%2bG1X%2fSsRqaIXOB4WVyk%3d&risl=&pid=ImgRaw&r=0"]; // replace with your images

    function getRandomImage() {
        var index = Math.floor(Math.random() * images.length);
        return images[index];
    }

    function scrollColumn(column) {
        var speed = Math.random() * 5000 + 30000; // adjust as needed for slower scroll speed
        column.animate({ scrollTop: column.prop("scrollHeight") - column.height() }, speed, "linear", function() {
            column.append('<img src="' + getRandomImage() + '" alt="Random Image" style="width:100%">');
            column.prop("scrollTop", 0);
            scrollColumn(column);
        });
    }

    $(".column").each(function() {
        for (var i = 0; i < 5; i++) {
            $(this).append('<img src="' + getRandomImage() + '" alt="Random Image" style="width:100%">');
        }
        scrollColumn($(this));
    });
});

(function ($) {
    document.getElementById("musicMsg").play();
    var T,
        write = {
            settings: {
                letters: $('.text'),
                button: $('#galleryBtn') // Add the ID of your button here
            },
            init: function () {
                T = this.settings;
                var self = this;
                this.putIntab();
            },
            putIntab: function () {
                for (var i = 0; i < T.letters.length; i++) {
                    var tableau = $.trim(T.letters[i].innerHTML).split(/(?=[^>]*(?:<|$))/);
                    T.letters[i].innerText = " ";
                    this.afficheDelay(i, tableau);
                }
            },
            afficheDelay: function (champ, texte) {
                var y = 0;
                var self = this;
                var affiche = setInterval(function () {
                    var lettre = texte[y];
                    $("<span>" + lettre + "<span>").appendTo(self.settings.letters[champ]);
                    y++;
                    if (y == texte.length) {
                        clearInterval(affiche);
                        setTimeout(function () {
                            self.showButton(); // Call the function to show the button
                        }, 10000); // Adjust the delay time as needed
                    }
                }, 60);
            },
            showButton: function () {
                T.button.show(); // Show the button
            }
        };
    write.init();
})(jQuery);



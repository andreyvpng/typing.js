;(function() {
  "use scrict";

  var style = document.createElement('style');
  style.innerHTML = ".typing { border-right: 0.08em solid #000; }";
  document.head.append(style);

  var typingElement = function(element) { 

    var element = element,
        period = parseInt(element.getAttribute('data-period')) || 2000,
        rotate = JSON.parse(element.getAttribute('data-rotate')),
        item_number = 0, 
        iteration_number = 0,
        now_string = '',
        isDeleting = false;

    if (rotate == null) {
      return false;
    }

    function loop() {
      item_number = iteration_number % rotate.length;
      
      if (isDeleting) {
        now_string = rotate[item_number].substring(0, now_string.length - 1);
        var delat = 150 - Math.random() * 50;
      } else {
        now_string = rotate[item_number].substring(0, now_string.length + 1);
        var delta = 250 - Math.random() * 100;
      }

      element.innerHTML = now_string;

      if (now_string.length == rotate[item_number].length) {
        isDeleting = true;
        delta = period;
      }

      if (now_string == '') {
        iteration_number++; 
        isDeleting = false;
      }

      setTimeout(loop, delta);
    }

    loop();
  };
  
  var elements = document.querySelectorAll('.typing');

  for (var i = 0; i < elements.length; i++) {
    new typingElement(elements[i]);
  }

}());

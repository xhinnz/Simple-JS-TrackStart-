<script type="text/javascript">
 function initialize() {
   insight.addEventListener(
     "trackstart" // specify event type
     "http://example.org/poi/25", // specify target uri
     function(event) {
       alert("Track Start: ´´ + event.target);
       event.element.src = "image2.png";
     }
    );
   };
 </script>

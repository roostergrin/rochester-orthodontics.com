<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="en" role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <meta name='google-site-verification' content='RcXvXY-WaMuwK4zeIjPPyd8cRlh1pCp_4wmPkaCQXGo' />
  <link rel='stylesheet' id='sb-font-awesome-css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' type='text/css' media='all' />    
</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>

  <script>
        function openNav() {
      document.getElementById("mobileSideNav").style.width = "320px";
    }
    function closeNav() {
      document.getElementById("mobileSideNav").style.width = "0";
    }
    function subMenu(val) {
    var activeId = document.getElementById("toggleClass-"+val);
        var x = document.getElementById("subMenu-"+val);
    activeId.classList.toggle("active");
         if (x.style.display == "none") {
           x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    }
    </script>   
</body>
</html>

$(document).ready(function() {
  $(".header").parallax({ imageSrc: "./images/photoset.jpg" });
  $(".container__key-feature").parallax({
    imageSrc: "./images/parallax-2.jpg",
    speed: "0.2"
  });
  $(".container__contact-area").parallax({
    imageSrc: "./images/contact-area.jpg",
    speed: "0.4"
  });
  let phone = document.querySelector(".container__key-feature__phone-img");
  new simpleParallax(phone, {
    scale: 0.9,
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)"
  });
  let people = document.querySelectorAll(".blog-area__img");
  for (let i = 0; i < people.length; i++) {
    new simpleParallax(people[i], {
      scale: 1.2,
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)"
    });
  }
  $("#main section").on("click", function() {
    console.log(this);
  });
  $('[href*="#"]').on("click", function() {
    var link = this;
    $("html, body").animate(
      { scrollTop: $(link.getAttribute("href")).position().top },
      2000
    );
  });
});
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.862186, lng: 12.533373 },
    zoom: 15,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#212121"
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#212121"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            color: "#c0c0c0"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [
          {
            color: "#c0c0c0"
          },
          {
            visibility: "on"
          },
          {
            weight: 0.5
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            weight: 0.5
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "poi.attraction",
        stylers: [
          {
            weight: 0.5
          }
        ]
      },
      {
        featureType: "poi.attraction",
        elementType: "labels.icon",
        stylers: [
          {
            weight: 1.5
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#181818"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1b1b1b"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#2c2c2c"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8a8a8a"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#373737"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#3c3c3c"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#4e4e4e"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3d3d3d"
          }
        ]
      }
    ]
  });
}

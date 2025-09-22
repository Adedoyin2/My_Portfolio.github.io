function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
  
    modal.style.display = "flex";
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  


//   const text = "My name is OGUNWUSI Adedoyin Noah.";
//   const speed = 100; // typing speed in ms
//   const delay = 1500; // delay before erasing
//   let i = 0;
//   let isDeleting = false;

//   function typeWriter() {
//     const el = document.getElementById("type");

//     if (!isDeleting) {
//       el.textContent = text.substring(0, i + 1);
//       i++;
//       if (i === text.length) {
//         isDeleting = true;
//         setTimeout(typeWriter, delay);
//       } else {
// setTimeout(typeWriter, speed);
//       }
//     } else {
//       el.textContent = text.substring(0, i - 1);
//       i--;
//       if (i === 0) {
//         isDeleting = false;
//       }
//       setTimeout(typeWriter, speed / 2);
//     }
//   }

//   typeWriter();

const text = "I am Noah";
  const typingElement = document.getElementById("typed-text");
  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    typingElement.textContent = text.substring(0, index);

    if (!isDeleting) {
      if (index < text.length) {
        index++;
      } else {
        isDeleting = true;
        setTimeout(typeLoop, 1200); // wait before deleting
        return;
      }
    } else {
      if (index > 0) {
        index--;
      } else {
        isDeleting = false;
      }
    }

    setTimeout(typeLoop, isDeleting ? 50 : 100);
  }

  typeLoop();




  document.getElementsByClassName(".side-bar").addEventListener("click", function(){document.getElementsByClassName(".side-bar").classList.add("show-sidebar");

  })
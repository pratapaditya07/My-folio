let buttons = document.querySelectorAll(".btn");
        let box = document.querySelector(".box");

        buttons.forEach(button => {
            button.addEventListener("mouseenter", () => {
                gsap.to(box, { height:"100px", backgroundColor: "#272527", duration: 0.9, scrub: 2, ease: "power2.out" });
            });

            button.addEventListener("mouseleave", () => {
                gsap.to(box, { height: "0px", backgroundColor: "#272527", duration: 0.9 ,scrub : 2 , ease: "power2.inOut" });
            });
        });










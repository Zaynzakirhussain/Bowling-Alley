AFRAME.registerComponent("bowl", {
    init: function () {
        this.baller();
    },

    baller: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "g") {
                var ball = document.createElement("a-entity");
                ball.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.42
                });
                ball.setAttribute("material", "color", "purple");

                ball.setAttribute("dynamic-body", { shape: "sphere", mass: "1" })

                var cam = document.querySelector("#camera");
                var grd = document.querySelector("#ground");
                var camera = document.querySelector("#camera").object3D;
                var scene = document.querySelector("#scene");

                //get camera direction as 3.js vector
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                pos = cam.getAttribute("position");
                grdy = grd.getAttribute("position");

                ball.setAttribute("position", {
                    x: pos.x,
                    y: grdy.y + 0.3,
                    z: pos.z
                });

                ball.setAttribute("velocity", direction.multiplyScalar(-11));

                ball.addEventListener("collide", this.impact);

                scene.appendChild(ball);
            }
        })
    },

    impact: function (e) {
        //ball element
        var element = e.detail.target.el;

        var elementHit = e.detail.body.el;

        if (elementHit.id.includes("pin")) {
            /*elementHit.setAttribute("material", {
                opacity: 0,
                transparent: true,
            });

            var impulse = new CANNON.Vec3(-1, 1, 0.5);
            var worldPoint = new CANNON.Vec3().copy(element.getAttribute("position"));
            elementHit.body.applyImpulse(impulse, worldPoint);

            element.removeEventListener("collide", this.impact);
            var scene = document.querySelector("#scene");
            scene.removeChild(element);*/
        }
    }
})
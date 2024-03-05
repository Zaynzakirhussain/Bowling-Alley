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
                    radius: 0.25
                });
                ball.setAttribute("material", "color", "purple");

                ball.setAttribute("dynamic-body", { shape: "sphere", mass: "0" })

                var cam = document.querySelector("#camera");
                var camera = document.querySelector("#camera").object3D;
                var scene = document.querySelector("#scene");

                //get camera direction as 3.js vector
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                pos = cam.getAttribute("position");

                ball.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                });

                ball.setAttribute("velocity", direction.multiplyScalar(-10));

                scene.appendChild(ball);
            }
        })
    }
})
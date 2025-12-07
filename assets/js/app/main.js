// controller
// import Controller from '/assets/js/app/Controller.js';
import Machine from '/assets/js/app/Machine.js';

window.machine = null;
async function start() {
    try {
        window.machine = new Machine();
    } catch (e) {
        console.log(e)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', () => {
        if (window.zombitron.zombiterface) {
            if (window.zombitron.zombiterface.ready) {
                start();
            }
        } else {
            window.addEventListener("zombiterfaceready", async (event) => {
                start()
            }, { once: true });
        }
    }, { once: true });
})
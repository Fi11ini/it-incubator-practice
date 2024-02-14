import {renderCounter} from "../components/counter/renderCounter.js";

export const  data = {
    clientsCount: 0
}

// каждую секунду будем увеличивать data.count
setInterval(function() {
    data.clientsCount++;
    // и затем перерисовывать весь счётчик
    renderCounter(data);
}, 1000);

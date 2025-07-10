
/**
 * 
 *  _    _      _   _____                                 _ _   _ _____
 * | |  | |    | | |_   _|                 (_)           | | | | |_   _|
 * | |  | | ___| |__ | | ___ _ __ _ __ ___  _ _ __   __ _| | | | | | |
 * | |/\| |/ _ \ '_ \| |/ _ \ '__| '_ ` _ \| | '_ \ / _` | | | | | | |
 * \  /\  /  __/ |_) | |  __/ |  | | | | | | | | | | (_| | | |_| |_| |_
 *  \/  \/ \___|_.__/\_/\___|_|  |_| |_| |_|_|_| |_|\__,_|_|\___/ \___/
 *  
 * Antoine LANDRIEUX 2025 (MIT LICENSE)
 * <https://github.com/AntoineLandrieux/WebTerminalUI>
 * 
 */

/**
 *
 * Designed for:
 *
 * <div class="terminal">
 *     <div class="task">
 *         <div class="circle hide-terminal"></div>
 *         <div class="circle full-terminal"></div>
 *         <div class="circle close-terminal"></div>
 *     </div>
 *     <div class="terminal-content">
 *         <p>Content <span class="blink-anim">&#9608;</span></p>
 *     </div>
 * </div>
 *
 */

window.onload = () => {

    const hide_terminal = document.getElementsByClassName("hide-terminal");

    Array.from(hide_terminal).forEach(term => {

        term.addEventListener("click", function () {

            term.parentElement?.parentElement?.classList?.remove("full");
            term.parentElement?.parentElement?.classList?.toggle("hide");

        });

    });

    const full_terminal = document.getElementsByClassName("full-terminal");

    Array.from(full_terminal).forEach(term => {

        term.addEventListener("click", function () {

            term.parentElement?.parentElement?.classList?.toggle("full");
            term.parentElement?.parentElement?.classList?.remove("hide");

        });

    });

    const close_terminal = document.getElementsByClassName("close-terminal");

    Array.from(close_terminal).forEach(term => {

        term.addEventListener("click", function () {

            term.parentElement?.parentElement?.classList.add("close");

        });

    });

}

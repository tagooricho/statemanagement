const App =(function (){

    let State = {
        counter : 0
    }

    function render (){
        app.innerHTML = view ();
        return App
    }

    function incer () {
        State.counter += 1;
        App
          .render()
          .setupEvents();
    }

    function view () {
        return `
            <div>Counter ${State.counter}</div>
            <button Class="counter">INC</button>
        `
    }

    function setupEvents () {
        let button =
        document
            .querySelector(".counter")
            .addEventListener("click", App.incer)
    }

    return {render, incer,setupEvents}
})();

App
  .render()
  .setupEvents();
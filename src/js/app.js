console.log("Hello Pomodoro")
const root = document.getElementById("root")

const App = props => {
  root.innerHTML = `
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="title">Titles of the page</div>
      </div>
    </div>
  </div>`
}
App()

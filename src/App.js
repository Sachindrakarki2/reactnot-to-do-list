import "./App.css";

function App() {
  return (
    <div class="wrapper">
      <div class="container">
        {/* <!-- top title --> */}
        <div class="row">
          <div class="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        {/* <!-- form area --> */}
        <form action="javascript:void(0)" onsubmit="handleOnSubmit(this)">
          <div class="row mt-3 g-2">
            <div class="col-md-6">
              <input
                name="task"
                type="text"
                class="form-control"
                placeholder=""
                required
              />
            </div>
            <div class="col-md-3">
              <input
                name="hr"
                type="number"
                class="form-control"
                min="1"
                placeholder=""
                required
              />
            </div>
            <div class="col-md-3 d-grid gap-2">
              <button class="btn btn-primary">
                <i class="fa-solid fa-plus"></i>
                Add New Task
              </button>
            </div>
          </div>
        </form>

        {/* <!-- list area --> */}
        <div class="row mt-5 g-2">
          <div class="col-md">
            <h2 class="text-center">Entry List</h2>
            <hr />
            <table class="table table-striped table-hover">
              <tbody id="task-list"></tbody>
            </table>
          </div>
          <div class="col-md">
            <h2 class="text-center">Bad List</h2>
            <hr />
            <table class="table table-striped table-hover">
              <tbody id="bad-task"></tbody>
            </table>
            <div class="text-end fw-bold">
              You could have saved = <span id="totalBadHr">0</span> Hrs
            </div>
          </div>
        </div>

        {/* <!-- total hr area --> */}
        <div class="row fw-bold">
          <div class="col">
            The total hours allocated = <span id="totalHrs">0</span> Hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

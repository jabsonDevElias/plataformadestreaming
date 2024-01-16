import '../App.css';

function BarraMenu() {
  return (
    <div className='col-2 bg-dark p-2' style={{height:"89vh"}}>
            <div className="list-group text-center rounded rounded-0 col-11 m-auto">
                <a href="/" className="list-group-item list-group-item-action  rounded rounded-1 mb-3 border border-0" aria-current="true">
                    Todos
                </a>
                <a href="/" className="list-group-item list-group-item-action  rounded rounded-1 mb-3 active border border-0">Filmes</a>
                <a href="/" className="list-group-item list-group-item-action  rounded rounded-1 mb-3 border border-0">Series</a>
                <a href="/" className="list-group-item list-group-item-action  rounded rounded-1 mb-3 border border-0">Documentarios</a>
            </div>
            <hr className='text-light'></hr>
            <h5 className='text-light'>Favoritos</h5>
    </div>
  );
}

export default BarraMenu;

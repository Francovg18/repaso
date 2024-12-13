import './grid.css'
function Grid(){
    return(
        <>
            <div className="contenedor">
                <div className='articulos articulo1'>
                    <div className='cajas caja-1'>1</div>
                    <div className='cajas caja-2'>2</div>
                    <div className='cajas caja-3'>3</div>
                    <div className='cajas caja-4'>4</div>
                    <div className='cajas caja-5'>5</div>
                </div>

                <div className='articulos articulo2'>
                    <div className='cajas caja-1'>1</div>
                    <div className='cajas caja-2'>2</div>
                    <div className='cajas caja-3'>3</div>
                    <div className='cajas caja-4'>4</div>
                </div>

                <div className='articulos articulos3'>
                    <div className='cajas caja-1'>1</div>
                    <div className='cajas caja-2'>2</div>
                    <div className='cajas caja-3'>3</div>
                    <div className='cajas caja-4'>4</div>
                    <div className='cajas caja-5'>5</div>
                </div>
            </div>
        </>
    )
}
export default Grid;
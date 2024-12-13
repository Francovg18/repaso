import React from 'react'

function Card({title, imagen}) {
  return (
    <>
    <div className='card text-center bg-dark'>
        <div className='overflow'>
            <img src={imagen}  className='card-img-top' width={100} height={200}/>
        </div>
        <div className='card-body text-light'>
            <h4 className='card-title small'>{title}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores cupiditate neque corrupti repellendus recusandae vel, deleniti fuga modi corporis officiis eaque velit placeat facilis cumque nihil, in tenetur unde.</p>
            <a href="#" className='btn btn-outline-secondary rounded-5'>Ir a la pagina</a>
        </div>
    </div>
    </>
  )
}

export default Card


  import './main.css'
  import React from 'react';
  import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


  export default function Item({items, title, linkAction, style}) {
   
    return (
      <div>
        <h1 className='fs-2 text pt-5 pl-6'>{title}</h1>
        <div className='d-flex'>
      <Button variant="outline-primary m-auto">left</Button>
        <div className='listItem'>
        <div className="container" style={style}>
        {items.map((item, index) => (
          <div className="bg-white" key={index} >
          <div className="mx-auto px-5 ">
            <div className="item">
            <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`${linkAction +item.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{item.price}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
      <Button variant="outline-primary m-auto">right</Button>
      </div>
      </div>
    )
  }
  
import React from "react";
import { Link } from "react-router-dom";

   export default function GridData({items, properties, style, title, linkAction}){
    return (
      <div className="">
        <div className="text-center p-5 ">
          <h1 className='fs-2 text pt-5 pl-6'>{title}</h1>
        </div>
        <div className="container d-flex pt-2 justify-content-center" style={style}>
        {items.map((item, index) => (
          <div className="bg-white m-5 " key={index}>
            <div className="mx-auto p-5 ">
              <div className="item">
              <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={item[properties[3]]}
                        alt={item[properties[1]]}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link to={`${linkAction +item[properties[0]]}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    )
   }
import React from 'react';

export default function Logo() {
    return (
        <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150  duration-500"
               src="/logo.svg"
               alt="logo"
               width={50}
               height={50}/>
    )
}
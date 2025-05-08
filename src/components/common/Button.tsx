import * as React from 'react';

export default function Button() {
    return(
        <div className="flex-row gap-7 w-81 h-12">
            <button className='w-39 h-12 p-3 gap-2 rounded-2xl border-1 bg-gray-900 text-white font-sans font-medium text-base'>Start for Free</button>
            <button className='w-39 h-12 p-3 gap-2 rounded-2xla from-gray-900 bg-white text-gray-800 font-sans font-medium text-base'>Contact Sales</button>
        </div>
    )
}

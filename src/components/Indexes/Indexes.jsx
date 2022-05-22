import React from 'react'

function Indexes({ data }) {
    return (
        <div>
            <div>Indexes</div>
            {data.map(a =>
                <div key={a['id'] + a['market']}>
                    <div>{a['name']}-{a['id']}-{a['market']}</div>
                </div>)}
        </div>
    )

}

export default Indexes
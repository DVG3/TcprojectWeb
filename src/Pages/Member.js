import React from 'react'
import './Member.css'
import Memberlist from '../components/Memberlist'
function member() {
    const memberlist = []
    for (let i = 1; i <= 100;i++)
    {
        memberlist.push({
            name:`Linh ${i}`,
            score: Math.round(Math.random() * 100),
        })
    }
    return (
        <div className="pagebody">
            <Memberlist memberList={memberlist}/>
        </div>
    )
}

export default member
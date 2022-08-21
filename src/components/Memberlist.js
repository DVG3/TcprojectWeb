import './Memberlist.css'
import Member from './Member'
import React from 'react'

function Memberlist({memberList}) {
    memberList.sort((a,b)=>{return  b.score - a.score})
    for (let i = 0; i < memberList.length; i++) {
        memberList[i].rank = i + 1;
    }
  return (
    
    <div className="container">
        {
            memberList.map(member=>{
            return <Member name={member.name} rank={member.rank} score = {member.score}/>})
        }
    </div>
    
  )
}

export default Memberlist

import React from 'react'
import './Member.css'
function Member({name,rank,score}) {
  return (
    <>
        <div className="memberInfoField">
            <div>
                <div className = "left">
                    <div>
                        Name: {name}
                    </div>
                    <div>
                        Score: {score}
                    </div>
                </div>
                <div>#{rank}</div>
            </div>
            
        </div>
    </>
  )
}

export default Member